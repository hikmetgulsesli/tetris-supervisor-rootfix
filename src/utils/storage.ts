import type { GameSettings, GameStats } from '../types/domain';

const SETTINGS_KEY = 'tetris_settings';
const HIGH_SCORE_KEY = 'tetris_highscore';

export function loadSettings(): GameSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        startLevel: typeof parsed.startLevel === 'number' ? parsed.startLevel : 1,
        assistHints: typeof parsed.assistHints === 'boolean' ? parsed.assistHints : true,
        controls: typeof parsed.controls === 'string' ? parsed.controls : 'Arrow keys, WASD, or touch',
      };
    }
  } catch {
    // ignore
  }
  return {
    startLevel: 1,
    assistHints: true,
    controls: 'Arrow keys, WASD, or touch',
  };
}

export function saveSettings(settings: GameSettings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch {
    // ignore
  }
}

export function loadHighScore(): number {
  try {
    const raw = localStorage.getItem(HIGH_SCORE_KEY);
    if (raw) {
      const parsed = parseInt(raw, 10);
      return isNaN(parsed) ? 0 : parsed;
    }
  } catch {
    // ignore
  }
  return 0;
}

export function saveHighScore(score: number): void {
  try {
    const current = loadHighScore();
    if (score > current) {
      localStorage.setItem(HIGH_SCORE_KEY, String(score));
    }
  } catch {
    // ignore
  }
}

export function updateStatsWithHighScore(stats: GameStats): GameStats {
  const high = loadHighScore();
  return { ...stats, highScore: Math.max(stats.score, high) };
}
