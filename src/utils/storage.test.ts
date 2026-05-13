import { describe, it, expect, beforeEach } from 'vitest';
import { loadSettings, saveSettings, loadHighScore, saveHighScore, updateStatsWithHighScore } from './storage';

describe('storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('loads default settings when empty', () => {
    const s = loadSettings();
    expect(s.startLevel).toBe(1);
    expect(s.assistHints).toBe(true);
    expect(s.controls).toBe('Arrow keys, WASD, or touch');
  });

  it('saves and loads settings', () => {
    const settings = { startLevel: 5, assistHints: false, controls: 'WASD' };
    saveSettings(settings);
    const loaded = loadSettings();
    expect(loaded).toEqual(settings);
  });

  it('loads high score 0 when empty', () => {
    expect(loadHighScore()).toBe(0);
  });

  it('saves and loads high score', () => {
    saveHighScore(1200);
    expect(loadHighScore()).toBe(1200);
  });

  it('does not overwrite lower high score', () => {
    saveHighScore(5000);
    saveHighScore(3000);
    expect(loadHighScore()).toBe(5000);
  });

  it('updates stats with high score', () => {
    const stats = { score: 800, level: 2, lines: 10, highScore: 0 };
    const updated = updateStatsWithHighScore(stats);
    expect(updated.highScore).toBe(800);
  });
});
