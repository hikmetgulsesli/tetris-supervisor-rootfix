import { useState, useCallback, useRef, useEffect } from 'react';
import {
  type GameState,
  type GameMode,
  type Piece,
  type TetrominoType,
  type Position,
  type Board,
  type CellValue,
  TETROMINO_SHAPES,
  TETROMINO_COLORS,
  WALL_KICKS_JLSTZ,
  WALL_KICKS_I,
  BOARD_WIDTH,
  BOARD_HEIGHT,
  BUFFER_ROWS,
  getDropSpeed,
  createEmptyBoard,
} from '../types/domain';
import { loadSettings, loadHighScore, saveHighScore, updateStatsWithHighScore, saveSettings } from '../utils/storage';

const TETROMINO_TYPES: TetrominoType[] = ['I', 'O', 'T', 'S', 'Z', 'J', 'L'];

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateBag(): TetrominoType[] {
  return shuffleArray(TETROMINO_TYPES);
}

function getNextFromQueue(queue: TetrominoType[]): { piece: TetrominoType; newQueue: TetrominoType[] } {
  if (queue.length <= 7) {
    return { piece: queue[0], newQueue: [...queue.slice(1), ...generateBag()] };
  }
  return { piece: queue[0], newQueue: queue.slice(1) };
}

function createPiece(type: TetrominoType): Piece {
  const shape = TETROMINO_SHAPES[type][0];
  let startX = Math.floor((BOARD_WIDTH - shape[0].length) / 2);
  let startY = 0;
  if (type === 'I') startY = -1;
  if (type === 'O') startY = 0;
  return { type, shape, position: { x: startX, y: startY }, rotation: 0 };
}

function isValidPosition(board: Board, piece: Piece, offsetX = 0, offsetY = 0): boolean {
  for (let y = 0; y < piece.shape.length; y++) {
    for (let x = 0; x < piece.shape[y].length; x++) {
      if (piece.shape[y][x] !== 0) {
        const nx = piece.position.x + x + offsetX;
        const ny = piece.position.y + y + offsetY;
        if (nx < 0 || nx >= BOARD_WIDTH || ny >= BOARD_HEIGHT + BUFFER_ROWS) return false;
        if (ny >= 0 && board[ny][nx] !== 0) return false;
      }
    }
  }
  return true;
}

function lockPiece(board: Board, piece: Piece): Board {
  const newBoard = board.map((row) => [...row]);
  const color = TETROMINO_COLORS[piece.type];
  for (let y = 0; y < piece.shape.length; y++) {
    for (let x = 0; x < piece.shape[y].length; x++) {
      if (piece.shape[y][x] !== 0) {
        const ny = piece.position.y + y;
        const nx = piece.position.x + x;
        if (ny >= 0 && ny < BOARD_HEIGHT + BUFFER_ROWS && nx >= 0 && nx < BOARD_WIDTH) {
          newBoard[ny][nx] = color;
        }
      }
    }
  }
  return newBoard;
}

function clearLines(board: Board): { board: Board; linesCleared: number; clearedLineIndices: number[] } {
  const newBoard: Board = [];
  const clearedLineIndices: number[] = [];
  for (let y = 0; y < board.length; y++) {
    if (board[y].every((cell) => cell !== 0)) {
      clearedLineIndices.push(y);
    } else {
      newBoard.push(board[y]);
    }
  }
  const linesCleared = clearedLineIndices.length;
  while (newBoard.length < BOARD_HEIGHT + BUFFER_ROWS) {
    newBoard.unshift(Array.from({ length: BOARD_WIDTH }, () => 0 as CellValue));
  }
  return { board: newBoard, linesCleared, clearedLineIndices };
}

function getScoreForLines(lines: number, level: number): number {
  const base = lines === 1 ? 100 : lines === 2 ? 300 : lines === 3 ? 500 : lines === 4 ? 800 : 0;
  return base * level;
}

function getWallKicks(type: TetrominoType, fromRot: number, toRot: number): Position[] {
  const key = `${fromRot}->${toRot}`;
  if (type === 'I') {
    return WALL_KICKS_I[key] ?? [{ x: 0, y: 0 }];
  }
  return WALL_KICKS_JLSTZ[key] ?? [{ x: 0, y: 0 }];
}

function rotatePiece(piece: Piece, clockwise: boolean): Piece {
  const newRotation = (piece.rotation + (clockwise ? 1 : 3)) % 4;
  const newShape = TETROMINO_SHAPES[piece.type][newRotation];
  return { ...piece, shape: newShape, rotation: newRotation };
}

function getMergedBoard(board: Board, piece: Piece | null): Board {
  const merged = board.map((row) => [...row]);
  if (!piece) return merged;
  const color = TETROMINO_COLORS[piece.type];
  for (let y = 0; y < piece.shape.length; y++) {
    for (let x = 0; x < piece.shape[y].length; x++) {
      if (piece.shape[y][x] !== 0) {
        const ny = piece.position.y + y;
        const nx = piece.position.x + x;
        if (ny >= 0 && ny < BOARD_HEIGHT + BUFFER_ROWS && nx >= 0 && nx < BOARD_WIDTH) {
          merged[ny][nx] = color;
        }
      }
    }
  }
  return merged;
}

function getGhostPosition(board: Board, piece: Piece): Position {
  let ghostY = piece.position.y;
  while (isValidPosition(board, { ...piece, position: { ...piece.position, y: ghostY + 1 } })) {
    ghostY++;
  }
  return { x: piece.position.x, y: ghostY };
}

function makeInitialState(): GameState {
  const settings = loadSettings();
  const bag = generateBag();
  const queue = [...bag, ...generateBag()];
  const { piece: firstType, newQueue } = getNextFromQueue(queue);
  return {
    mode: 'menu',
    board: createEmptyBoard(),
    currentPiece: createPiece(firstType),
    nextQueue: newQueue,
    holdPiece: null,
    canHold: true,
    stats: { score: 0, level: settings.startLevel, lines: 0, highScore: loadHighScore() },
    settings,
    isClearing: false,
    clearedLines: [],
  };
}

export interface AppActions {
  startGame: () => void;
  resumeGame: () => void;
  pauseGame: () => void;
  restartGame: () => void;
  goToMenu: () => void;
  openSettings: () => void;
  openHelp: () => void;
  openProfile: () => void;
  saveSettings: (s: GameState['settings']) => void;
  resetSettings: () => void;
  moveLeft: () => void;
  moveRight: () => void;
  rotateClockwise: () => void;
  rotateCounterClockwise: () => void;
  softDrop: () => void;
  hardDrop: () => void;
  hold: () => void;
  tick: (dt: number) => void;
  setMode: (mode: GameMode) => void;
}

export function useAppState() {
  const [state, setState] = useState<GameState>(makeInitialState);
  const stateRef = useRef(state);
  stateRef.current = state;

  const dropTimerRef = useRef(0);
  const lockDelayRef = useRef(0);
  const isLockingRef = useRef(false);

  const setStateRef = useCallback((updater: (prev: GameState) => GameState) => {
    setState((prev) => {
      const next = updater(prev);
      stateRef.current = next;
      return next;
    });
  }, []);

  const spawnNextPiece = useCallback(
    (prev: GameState): GameState => {
      const { piece: nextType, newQueue } = getNextFromQueue(prev.nextQueue);
      const newPiece = createPiece(nextType);
      if (!isValidPosition(prev.board, newPiece)) {
        saveHighScore(prev.stats.score);
        return {
          ...prev,
          mode: 'gameover',
          currentPiece: null,
          nextQueue: newQueue,
          canHold: true,
          stats: updateStatsWithHighScore(prev.stats),
        };
      }
      return {
        ...prev,
        currentPiece: newPiece,
        nextQueue: newQueue,
        canHold: true,
        isClearing: false,
        clearedLines: [],
      };
    },
    []
  );

  const lockPieceAndClear = useCallback(
    (prev: GameState): GameState => {
      if (!prev.currentPiece) return prev;
      const lockedBoard = lockPiece(prev.board, prev.currentPiece);
      const { board: clearedBoard, linesCleared, clearedLineIndices } = clearLines(lockedBoard);
      const scoreGain = getScoreForLines(linesCleared, prev.stats.level);
      const newLines = prev.stats.lines + linesCleared;
      const newLevel = Math.max(prev.stats.level, Math.floor(newLines / 10) + 1);
      const newStats = {
        ...prev.stats,
        score: prev.stats.score + scoreGain,
        lines: newLines,
        level: newLevel,
      };
      const afterClear: GameState = {
        ...prev,
        board: clearedBoard,
        currentPiece: null,
        stats: newStats,
        isClearing: linesCleared > 0,
        clearedLines: clearedLineIndices,
      };
      if (linesCleared > 0) {
        return afterClear;
      }
      return spawnNextPiece(afterClear);
    },
    [spawnNextPiece]
  );

  const startGame = useCallback(() => {
    const settings = loadSettings();
    const bag = generateBag();
    const queue = [...bag, ...generateBag()];
    const { piece: firstType, newQueue } = getNextFromQueue(queue);
    const newState: GameState = {
      mode: 'playing',
      board: createEmptyBoard(),
      currentPiece: createPiece(firstType),
      nextQueue: newQueue,
      holdPiece: null,
      canHold: true,
      stats: { score: 0, level: settings.startLevel, lines: 0, highScore: loadHighScore() },
      settings,
      isClearing: false,
      clearedLines: [],
    };
    dropTimerRef.current = 0;
    lockDelayRef.current = 0;
    isLockingRef.current = false;
    setState(newState);
    stateRef.current = newState;
  }, []);

  const resumeGame = useCallback(() => {
    setStateRef((prev) => (prev.mode === 'paused' ? { ...prev, mode: 'playing' } : prev));
  }, [setStateRef]);

  const pauseGame = useCallback(() => {
    setStateRef((prev) => (prev.mode === 'playing' ? { ...prev, mode: 'paused' } : prev));
  }, [setStateRef]);

  const restartGame = useCallback(() => {
    startGame();
  }, [startGame]);

  const goToMenu = useCallback(() => {
    setStateRef((prev) => {
      if (prev.stats.score > 0) {
        saveHighScore(prev.stats.score);
      }
      return { ...prev, mode: 'menu', stats: updateStatsWithHighScore(prev.stats) };
    });
  }, [setStateRef]);

  const openSettings = useCallback(() => {
    setStateRef((prev) => ({ ...prev, mode: 'settings' }));
  }, [setStateRef]);

  const openHelp = useCallback(() => {
    setStateRef((prev) => ({ ...prev, mode: 'help' }));
  }, [setStateRef]);

  const openProfile = useCallback(() => {
    setStateRef((prev) => ({ ...prev, mode: 'profile' }));
  }, [setStateRef]);

  const saveSettingsAction = useCallback(
    (s: GameState['settings']) => {
      saveSettings(s);
      setStateRef((prev) => ({ ...prev, settings: s }));
    },
    [setStateRef]
  );

  const resetSettings = useCallback(() => {
    const defaults = { startLevel: 1, assistHints: true, controls: 'Arrow keys, WASD, or touch' };
    saveSettings(defaults);
    setStateRef((prev) => ({ ...prev, settings: defaults }));
  }, [setStateRef]);

  const moveLeft = useCallback(() => {
    setStateRef((prev) => {
      if (prev.mode !== 'playing' || !prev.currentPiece) return prev;
      if (isValidPosition(prev.board, prev.currentPiece, -1, 0)) {
        return { ...prev, currentPiece: { ...prev.currentPiece, position: { ...prev.currentPiece.position, x: prev.currentPiece.position.x - 1 } } };
      }
      return prev;
    });
  }, [setStateRef]);

  const moveRight = useCallback(() => {
    setStateRef((prev) => {
      if (prev.mode !== 'playing' || !prev.currentPiece) return prev;
      if (isValidPosition(prev.board, prev.currentPiece, 1, 0)) {
        return { ...prev, currentPiece: { ...prev.currentPiece, position: { ...prev.currentPiece.position, x: prev.currentPiece.position.x + 1 } } };
      }
      return prev;
    });
  }, [setStateRef]);

  const tryRotate = useCallback(
    (clockwise: boolean) => {
      setStateRef((prev) => {
        if (prev.mode !== 'playing' || !prev.currentPiece) return prev;
        const rotated = rotatePiece(prev.currentPiece, clockwise);
        if (isValidPosition(prev.board, rotated)) {
          return { ...prev, currentPiece: rotated };
        }
        const kicks = getWallKicks(prev.currentPiece.type, prev.currentPiece.rotation, rotated.rotation);
        for (const kick of kicks) {
          const kicked = { ...rotated, position: { x: rotated.position.x + kick.x, y: rotated.position.y + kick.y } };
          if (isValidPosition(prev.board, kicked)) {
            return { ...prev, currentPiece: kicked };
          }
        }
        return prev;
      });
    },
    [setStateRef]
  );

  const rotateClockwise = useCallback(() => tryRotate(true), [tryRotate]);
  const rotateCounterClockwise = useCallback(() => tryRotate(false), [tryRotate]);

  const softDrop = useCallback(() => {
    setStateRef((prev) => {
      if (prev.mode !== 'playing' || !prev.currentPiece) return prev;
      if (isValidPosition(prev.board, prev.currentPiece, 0, 1)) {
        return {
          ...prev,
          currentPiece: { ...prev.currentPiece, position: { ...prev.currentPiece.position, y: prev.currentPiece.position.y + 1 } },
          stats: { ...prev.stats, score: prev.stats.score + 1 },
        };
      }
      return prev;
    });
  }, [setStateRef]);

  const hardDrop = useCallback(() => {
    setStateRef((prev) => {
      if (prev.mode !== 'playing' || !prev.currentPiece) return prev;
      let dropDistance = 0;
      while (isValidPosition(prev.board, prev.currentPiece, 0, dropDistance + 1)) {
        dropDistance++;
      }
      const newPiece = { ...prev.currentPiece, position: { ...prev.currentPiece.position, y: prev.currentPiece.position.y + dropDistance } };
      const lockedBoard = lockPiece(prev.board, newPiece);
      const { board: clearedBoard, linesCleared, clearedLineIndices } = clearLines(lockedBoard);
      const scoreGain = getScoreForLines(linesCleared, prev.stats.level) + dropDistance * 2;
      const newLines = prev.stats.lines + linesCleared;
      const newLevel = Math.max(prev.stats.level, Math.floor(newLines / 10) + 1);
      const newStats = { ...prev.stats, score: prev.stats.score + scoreGain, lines: newLines, level: newLevel };
      const afterClear: GameState = { ...prev, board: clearedBoard, currentPiece: null, stats: newStats, isClearing: linesCleared > 0, clearedLines: clearedLineIndices };
      if (linesCleared > 0) {
        return afterClear;
      }
      return spawnNextPiece(afterClear);
    });
  }, [setStateRef, spawnNextPiece]);

  const hold = useCallback(() => {
    setStateRef((prev) => {
      if (prev.mode !== 'playing' || !prev.currentPiece || !prev.canHold) return prev;
      const currentType = prev.currentPiece.type;
      if (prev.holdPiece) {
        return {
          ...prev,
          currentPiece: createPiece(prev.holdPiece),
          holdPiece: currentType,
          canHold: false,
        };
      }
      const { piece: nextType, newQueue } = getNextFromQueue(prev.nextQueue);
      return {
        ...prev,
        currentPiece: createPiece(nextType),
        nextQueue: newQueue,
        holdPiece: currentType,
        canHold: false,
      };
    });
  }, [setStateRef]);

  const tick = useCallback(
    (dt: number) => {
      setStateRef((prev) => {
        if (prev.mode !== 'playing' || !prev.currentPiece) return prev;
        const speed = getDropSpeed(prev.stats.level);
        dropTimerRef.current += dt * 1000;

        if (prev.isClearing) {
          if (dropTimerRef.current > 300) {
            dropTimerRef.current = 0;
            return spawnNextPiece({ ...prev, isClearing: false, clearedLines: [] });
          }
          return prev;
        }

        if (dropTimerRef.current >= speed) {
          dropTimerRef.current = 0;
          if (isValidPosition(prev.board, prev.currentPiece, 0, 1)) {
            isLockingRef.current = false;
            lockDelayRef.current = 0;
            return { ...prev, currentPiece: { ...prev.currentPiece, position: { ...prev.currentPiece.position, y: prev.currentPiece.position.y + 1 } } };
          }

          if (!isLockingRef.current) {
            isLockingRef.current = true;
            lockDelayRef.current = 0;
          }
          lockDelayRef.current += speed;
          if (lockDelayRef.current >= 500) {
            isLockingRef.current = false;
            lockDelayRef.current = 0;
            return lockPieceAndClear(prev);
          }
        }
        return prev;
      });
    },
    [setStateRef, lockPieceAndClear, spawnNextPiece]
  );

  // Clear line animation timer
  useEffect(() => {
    if (state.mode === 'playing' && state.isClearing) {
      const timer = setTimeout(() => {
        setStateRef((prev) => {
          if (prev.isClearing) {
            return spawnNextPiece({ ...prev, isClearing: false, clearedLines: [] });
          }
          return prev;
        });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [state.mode, state.isClearing, setStateRef, spawnNextPiece]);

  const mergedBoard = getMergedBoard(state.board, state.currentPiece);
  const ghostPosition = state.currentPiece ? getGhostPosition(state.board, state.currentPiece) : null;

  const actions: AppActions = {
    startGame,
    resumeGame,
    pauseGame,
    restartGame,
    goToMenu,
    openSettings,
    openHelp,
    openProfile,
    saveSettings: saveSettingsAction,
    resetSettings,
    moveLeft,
    moveRight,
    rotateClockwise,
    rotateCounterClockwise,
    softDrop,
    hardDrop,
    hold,
    tick,
    setMode: (mode: GameMode) => setStateRef((prev) => ({ ...prev, mode })),
  };

  return { state, actions, mergedBoard, ghostPosition };
}
