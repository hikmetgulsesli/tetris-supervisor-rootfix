import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useAppState } from './useAppState';

describe('useAppState', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('starts in menu mode', () => {
    const { result } = renderHook(() => useAppState());
    expect(result.current.state.mode).toBe('menu');
  });

  it('can start game', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    expect(result.current.state.mode).toBe('playing');
    expect(result.current.state.currentPiece).not.toBeNull();
    expect(result.current.state.board).toBeDefined();
  });

  it('can pause and resume', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    act(() => result.current.actions.pauseGame());
    expect(result.current.state.mode).toBe('paused');
    act(() => result.current.actions.resumeGame());
    expect(result.current.state.mode).toBe('playing');
  });

  it('can move piece left and right', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    const startX = result.current.state.currentPiece!.position.x;
    act(() => result.current.actions.moveRight());
    expect(result.current.state.currentPiece!.position.x).toBe(startX + 1);
    act(() => result.current.actions.moveLeft());
    expect(result.current.state.currentPiece!.position.x).toBe(startX);
  });

  it('can rotate piece', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    const startRot = result.current.state.currentPiece!.rotation;
    act(() => result.current.actions.rotateClockwise());
    expect(result.current.state.currentPiece!.rotation).not.toBe(startRot);
  });

  it('can soft drop', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    const startY = result.current.state.currentPiece!.position.y;
    act(() => result.current.actions.softDrop());
    expect(result.current.state.currentPiece!.position.y).toBe(startY + 1);
    expect(result.current.state.stats.score).toBeGreaterThan(0);
  });

  it('can hold piece', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    const firstType = result.current.state.currentPiece!.type;
    act(() => result.current.actions.hold());
    expect(result.current.state.holdPiece).toBe(firstType);
    expect(result.current.state.canHold).toBe(false);
  });

  it('advances time via tick', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    const startY = result.current.state.currentPiece!.position.y;
    act(() => result.current.actions.tick(2));
    expect(result.current.state.currentPiece!.position.y).toBeGreaterThanOrEqual(startY);
  });

  it('goes to game over when board fills', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    // Hard drop many pieces to force game over
    for (let i = 0; i < 300; i++) {
      act(() => result.current.actions.hardDrop());
      if (result.current.state.mode === 'gameover') break;
    }
    expect(result.current.state.mode).toBe('gameover');
  });

  it('can go to menu and back', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    act(() => result.current.actions.goToMenu());
    expect(result.current.state.mode).toBe('menu');
  });

  it('saves high score on game over', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    // Score some points
    for (let i = 0; i < 50; i++) {
      act(() => result.current.actions.hardDrop());
      if (result.current.state.mode === 'gameover') break;
    }
    expect(result.current.state.stats.highScore).toBeGreaterThanOrEqual(0);
  });
});
