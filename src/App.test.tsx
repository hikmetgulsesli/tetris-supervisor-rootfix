import { describe, it, expect, beforeEach } from 'vitest';
import { render, act } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    localStorage.clear();
    delete (window as any).app;
    delete (window as any).game;
    delete (window as any).render_game_to_text;
    delete (window as any).advanceTime;
  });

  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container.querySelector('[data-setfarm-root]')).toBeTruthy();
  });

  it('exposes window.app bridge', () => {
    render(<App />);
    expect(typeof (window as any).app).toBe('object');
    expect(typeof (window as any).app.getState).toBe('function');
    expect(typeof (window as any).app.startGame).toBe('function');
  });

  it('exposes window.game state object', () => {
    render(<App />);
    expect(typeof (window as any).game).toBe('object');
    expect((window as any).game.mode).toBe('menu');
  });

  it('exposes render_game_to_text', () => {
    render(<App />);
    expect(typeof (window as any).render_game_to_text).toBe('function');
    const text = (window as any).render_game_to_text();
    const parsed = JSON.parse(text);
    expect(parsed.mode).toBe('menu');
    expect(parsed).toHaveProperty('score');
    expect(parsed).toHaveProperty('board');
  });

  it('exposes advanceTime', () => {
    render(<App />);
    expect(typeof (window as any).advanceTime).toBe('function');
    act(() => {
      (window as any).app.startGame();
    });
    const before = JSON.parse((window as any).render_game_to_text());
    act(() => {
      (window as any).advanceTime(5000);
    });
    const after = JSON.parse((window as any).render_game_to_text());
    expect(after.mode).toBe('playing');
  });

  it('can start game via bridge', () => {
    render(<App />);
    act(() => {
      (window as any).app.startGame();
    });
    expect((window as any).game.mode).toBe('playing');
  });

  it('responds to keyboard via bridge', () => {
    render(<App />);
    act(() => {
      (window as any).app.startGame();
    });
    const before = JSON.parse((window as any).render_game_to_text());
    act(() => {
      (window as any).app.moveRight();
    });
    const after = JSON.parse((window as any).render_game_to_text());
    expect(after.currentPiece.x).toBe(before.currentPiece.x + 1);
  });
});
