import { describe, it, expect } from 'vitest';
import {
  TETROMINO_SHAPES,
  TETROMINO_COLORS,
  BOARD_WIDTH,
  BOARD_HEIGHT,
  getDropSpeed,
  createEmptyBoard,
  type TetrominoType,
} from './domain';

describe('domain', () => {
  it('has 7 tetromino types', () => {
    const types = Object.keys(TETROMINO_SHAPES) as TetrominoType[];
    expect(types).toHaveLength(7);
    expect(types).toContain('I');
    expect(types).toContain('O');
    expect(types).toContain('T');
    expect(types).toContain('S');
    expect(types).toContain('Z');
    expect(types).toContain('J');
    expect(types).toContain('L');
  });

  it('I piece has 4 rotations', () => {
    expect(TETROMINO_SHAPES.I).toHaveLength(4);
  });

  it('O piece has identical 4 rotations', () => {
    expect(TETROMINO_SHAPES.O).toHaveLength(4);
    expect(TETROMINO_SHAPES.O[0]).toEqual(TETROMINO_SHAPES.O[1]);
  });

  it('maps colors 1-7', () => {
    const values = Object.values(TETROMINO_COLORS);
    expect(values).toHaveLength(7);
    expect(new Set(values).size).toBe(7);
  });

  it('board dimensions are correct', () => {
    expect(BOARD_WIDTH).toBe(10);
    expect(BOARD_HEIGHT).toBe(20);
  });

  it('createEmptyBoard returns correct size', () => {
    const board = createEmptyBoard();
    expect(board).toHaveLength(24); // 20 + 4 buffer
    board.forEach((row) => {
      expect(row).toHaveLength(10);
      expect(row.every((c) => c === 0)).toBe(true);
    });
  });

  it('getDropSpeed decreases with level', () => {
    expect(getDropSpeed(1)).toBe(1000);
    expect(getDropSpeed(5)).toBe(355);
    expect(getDropSpeed(10)).toBe(64);
    expect(getDropSpeed(15)).toBe(7);
    expect(getDropSpeed(20)).toBe(7); // capped
  });
});
