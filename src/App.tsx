import { useEffect, useRef, useCallback } from 'react';
import { AppProvider, useAppContext } from './contexts/AppContext';
import {
  MainMenu,
  GameBoard,
  PauseOverlay,
  GameOver,
  Settings,
  HelpAndRules,
  Profile,
} from './screens';
import type {
  MainMenuActionId,
  GameBoardActionId,
  PauseOverlayActionId,
  GameOverActionId,
  SettingsActionId,
  HelpAndRulesActionId,
  ProfileActionId,
} from './screens';
import './App.css';
import { TETROMINO_SHAPES, TETROMINO_COLORS, type TetrominoType } from './types/domain';

const COLOR_MAP: Record<number, string> = {
  0: 'transparent',
  1: '#00f0f0',
  2: '#f0f000',
  3: '#a000f0',
  4: '#00f000',
  5: '#f00000',
  6: '#0000f0',
  7: '#f0a000',
};

function GameRenderer() {
  const { state, mergedBoard, ghostPosition } = useAppContext();

  const renderCell = (value: number, isGhost = false) => {
    const baseColor = COLOR_MAP[value] || 'transparent';
    return (
      <div
        className={`tetris-cell ${value !== 0 ? 'filled' : ''} ${isGhost ? 'ghost' : ''}`}
        style={value !== 0 && !isGhost ? { backgroundColor: baseColor, boxShadow: `0 0 8px ${baseColor}55` } : {}}
      />
    );
  };

  const renderMiniGrid = (type: TetrominoType | null) => {
    const shape = type ? TETROMINO_SHAPES[type][0] : null;
    const cells: React.ReactNode[] = [];
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        const active = shape && shape[y] && shape[y][x] !== 0;
        cells.push(
          <span
            key={`${y}-${x}`}
            className={`mini-cell ${active ? 'active' : ''}`}
            style={active ? { backgroundColor: COLOR_MAP[TETROMINO_COLORS[type!]] } : {}}
          />
        );
      }
    }
    return <div className="mini-grid">{cells}</div>;
  };

  const boardCells: React.ReactNode[] = [];
  for (let y = 0; y < 20; y++) {
    for (let x = 0; x < 10; x++) {
      const boardY = y + 4;
      let value = mergedBoard[boardY]?.[x] ?? 0;
      let isGhost = false;
      if (ghostPosition && value === 0) {
        const piece = state.currentPiece;
        if (piece) {
          for (let py = 0; py < piece.shape.length; py++) {
            for (let px = 0; px < piece.shape[py].length; px++) {
              if (piece.shape[py][px] !== 0) {
                const gx = ghostPosition.x + px;
                const gy = ghostPosition.y + py;
                if (gx === x && gy === boardY) {
                  value = TETROMINO_COLORS[piece.type];
                  isGhost = true;
                }
              }
            }
          }
        }
      }
      boardCells.push(
        <div key={`${y}-${x}`} className="board-cell-wrapper">
          {renderCell(value, isGhost)}
        </div>
      );
    }
  }

  return (
    <section className="game-layout" aria-label="Tetris game">
      <div className="board" role="grid" aria-label="Playable game field">
        {boardCells}
      </div>
      <aside className="side-panel">
        <h2>Status</h2>
        <div>
          <div className="side-label">Next</div>
          {renderMiniGrid(state.nextQueue[0] ?? null)}
        </div>
        <div>
          <div className="side-label">Hold</div>
          {renderMiniGrid(state.holdPiece)}
        </div>
        <dl>
          <dt>Score</dt>
          <dd>{state.stats.score.toLocaleString()}</dd>
          <dt>Level</dt>
          <dd>{state.stats.level}</dd>
          <dt>Lines</dt>
          <dd>{state.stats.lines}</dd>
          <dt>High Score</dt>
          <dd>{state.stats.highScore.toLocaleString()}</dd>
        </dl>
      </aside>
    </section>
  );
}

function GameInner() {
  const { state, actions } = useAppContext();
  const lastTimeRef = useRef(0);
  const rafRef = useRef(0);

  const gameLoop = useCallback(
    (timestamp: number) => {
      if (lastTimeRef.current === 0) lastTimeRef.current = timestamp;
      const dt = Math.min((timestamp - lastTimeRef.current) / 1000, 0.05);
      lastTimeRef.current = timestamp;
      if (state.mode === 'playing') {
        actions.tick(dt);
      }
      rafRef.current = requestAnimationFrame(gameLoop);
    },
    [state.mode, actions]
  );

  useEffect(() => {
    lastTimeRef.current = 0;
    rafRef.current = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [gameLoop]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      const code = e.code;
      const isPlaying = state.mode === 'playing';
      const isPaused = state.mode === 'paused';

      if (key === 'ArrowLeft' || key === 'a' || key === 'A') {
        if (isPlaying) actions.moveLeft();
        e.preventDefault();
      } else if (key === 'ArrowRight' || key === 'd' || key === 'D') {
        if (isPlaying) actions.moveRight();
        e.preventDefault();
      } else if (key === 'ArrowDown' || key === 's' || key === 'S') {
        if (isPlaying) actions.softDrop();
        e.preventDefault();
      } else if (key === 'ArrowUp' || key === 'w' || key === 'W' || code === 'KeyX') {
        if (isPlaying) actions.rotateClockwise();
        e.preventDefault();
      } else if (code === 'KeyZ') {
        if (isPlaying) actions.rotateCounterClockwise();
        e.preventDefault();
      } else if (key === ' ') {
        if (isPlaying) actions.hardDrop();
        e.preventDefault();
      } else if (code === 'KeyC' || code === 'ShiftLeft' || code === 'ShiftRight') {
        if (isPlaying) actions.hold();
        e.preventDefault();
      } else if (key === 'p' || key === 'P' || key === 'Escape') {
        if (isPlaying) actions.pauseGame();
        else if (isPaused) actions.resumeGame();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [state.mode, actions]);

  // Expose window bridge
  useEffect(() => {
    const appBridge = {
      getState: () => state,
      startGame: actions.startGame,
      pauseGame: actions.pauseGame,
      resumeGame: actions.resumeGame,
      restartGame: actions.restartGame,
      moveLeft: actions.moveLeft,
      moveRight: actions.moveRight,
      rotateClockwise: actions.rotateClockwise,
      rotateCounterClockwise: actions.rotateCounterClockwise,
      softDrop: actions.softDrop,
      hardDrop: actions.hardDrop,
      hold: actions.hold,
      tick: actions.tick,
    };
    (window as any).app = appBridge;
    (window as any).game = {
      mode: state.mode,
      score: state.stats.score,
      level: state.stats.level,
      lines: state.stats.lines,
      board: state.board,
      currentPiece: state.currentPiece,
    };
    (window as any).render_game_to_text = () =>
      JSON.stringify({
        mode: state.mode,
        score: state.stats.score,
        level: state.stats.level,
        lines: state.stats.lines,
        board: state.board,
        currentPiece: state.currentPiece
          ? {
              type: state.currentPiece.type,
              x: state.currentPiece.position.x,
              y: state.currentPiece.position.y,
              rotation: state.currentPiece.rotation,
            }
          : null,
        nextQueue: state.nextQueue.slice(0, 3),
        holdPiece: state.holdPiece,
        isClearing: state.isClearing,
      });
    (window as any).advanceTime = (ms: number) => {
      const steps = Math.max(1, Math.round(ms / (1000 / 60)));
      for (let i = 0; i < steps; i++) {
        actions.tick(1 / 60);
      }
    };
  }, [state, actions]);

  const mainMenuActions: Record<MainMenuActionId, () => void> = {
    'start-game-1': actions.startGame,
    'resume-2': actions.resumeGame,
    'open-settings-3': actions.openSettings,
  };

  const gameBoardActions: Record<GameBoardActionId, () => void> = {
    'pause-1': actions.pauseGame,
    'restart-2': actions.restartGame,
  };

  const pauseOverlayActions: Record<PauseOverlayActionId, () => void> = {
    'play-again-1': actions.restartGame,
    'share-score-2': () => {
      const text = `I scored ${state.stats.score} in Tetris Supervisor!`;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).catch(() => {});
      }
    },
    'main-menu-3': actions.goToMenu,
  };

  const gameOverActions: Record<GameOverActionId, () => void> = {
    'pause-1': actions.goToMenu,
    'restart-2': actions.restartGame,
  };

  const settingsActions: Record<SettingsActionId, () => void> = {
    'save-settings-1': () => {
      actions.saveSettings(state.settings);
    },
    'reset-defaults-2': actions.resetSettings,
  };

  const helpActions: Record<HelpAndRulesActionId, () => void> = {
    'start-game-1': actions.startGame,
    'resume-2': actions.resumeGame,
    'open-settings-3': actions.openSettings,
  };

  const profileActions: Record<ProfileActionId, () => void> = {
    'start-game-1': actions.startGame,
    'resume-2': actions.resumeGame,
    'open-settings-3': actions.openSettings,
  };

  switch (state.mode) {
    case 'menu':
      return (
        <main className="app-main">
          <MainMenu actions={mainMenuActions} />
        </main>
      );
    case 'playing':
      return (
        <main className="app-main">
          <GameBoard actions={gameBoardActions} />
          <GameRenderer />
        </main>
      );
    case 'paused':
      return (
        <main className="app-main">
          <GameBoard actions={gameBoardActions} />
          <GameRenderer />
          <div className="overlay-backdrop">
            <PauseOverlay actions={pauseOverlayActions} />
          </div>
        </main>
      );
    case 'gameover':
      return (
        <main className="app-main">
          <GameOver actions={gameOverActions} />
          <GameRenderer />
        </main>
      );
    case 'settings':
      return (
        <main className="app-main">
          <Settings actions={settingsActions} />
        </main>
      );
    case 'help':
      return (
        <main className="app-main">
          <HelpAndRules actions={helpActions} />
        </main>
      );
    case 'profile':
      return (
        <main className="app-main">
          <Profile actions={profileActions} />
        </main>
      );
    default:
      return (
        <main className="app-main">
          <MainMenu actions={mainMenuActions} />
        </main>
      );
  }
}

export default function App() {
  return (
    <AppProvider>
      <div className="app-root" data-setfarm-root="us-001">
        <GameInner />
      </div>
    </AppProvider>
  );
}
