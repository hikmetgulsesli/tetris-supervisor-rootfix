export type TetrominoType = 'I' | 'O' | 'T' | 'S' | 'Z' | 'J' | 'L';

export type CellValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type Board = CellValue[][];

export interface Position {
  x: number;
  y: number;
}

export interface Piece {
  type: TetrominoType;
  shape: number[][];
  position: Position;
  rotation: number;
}

export type GameMode =
  | 'menu'
  | 'playing'
  | 'paused'
  | 'gameover'
  | 'settings'
  | 'help'
  | 'profile';

export interface GameStats {
  score: number;
  level: number;
  lines: number;
  highScore: number;
}

export interface GameSettings {
  startLevel: number;
  assistHints: boolean;
  controls: string;
}

export interface GameState {
  mode: GameMode;
  board: Board;
  currentPiece: Piece | null;
  nextQueue: TetrominoType[];
  holdPiece: TetrominoType | null;
  canHold: boolean;
  stats: GameStats;
  settings: GameSettings;
  isClearing: boolean;
  clearedLines: number[];
}

export const TETROMINO_SHAPES: Record<TetrominoType, number[][][]> = {
  I: [
    [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
    [[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]],
    [[0, 0, 0, 0], [0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0]],
    [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]],
  ],
  O: [
    [[1, 1], [1, 1]],
    [[1, 1], [1, 1]],
    [[1, 1], [1, 1]],
    [[1, 1], [1, 1]],
  ],
  T: [
    [[0, 1, 0], [1, 1, 1], [0, 0, 0]],
    [[0, 1, 0], [0, 1, 1], [0, 1, 0]],
    [[0, 0, 0], [1, 1, 1], [0, 1, 0]],
    [[0, 1, 0], [1, 1, 0], [0, 1, 0]],
  ],
  S: [
    [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
    [[0, 1, 0], [0, 1, 1], [0, 0, 1]],
    [[0, 0, 0], [0, 1, 1], [1, 1, 0]],
    [[1, 0, 0], [1, 1, 0], [0, 1, 0]],
  ],
  Z: [
    [[1, 1, 0], [0, 1, 1], [0, 0, 0]],
    [[0, 0, 1], [0, 1, 1], [0, 1, 0]],
    [[0, 0, 0], [1, 1, 0], [0, 1, 1]],
    [[0, 1, 0], [1, 1, 0], [1, 0, 0]],
  ],
  J: [
    [[1, 0, 0], [1, 1, 1], [0, 0, 0]],
    [[0, 1, 1], [0, 1, 0], [0, 1, 0]],
    [[0, 0, 0], [1, 1, 1], [0, 0, 1]],
    [[0, 1, 0], [0, 1, 0], [1, 1, 0]],
  ],
  L: [
    [[0, 0, 1], [1, 1, 1], [0, 0, 0]],
    [[0, 1, 0], [0, 1, 0], [0, 1, 1]],
    [[0, 0, 0], [1, 1, 1], [1, 0, 0]],
    [[1, 1, 0], [0, 1, 0], [0, 1, 0]],
  ],
};

export const TETROMINO_COLORS: Record<TetrominoType, CellValue> = {
  I: 1, O: 2, T: 3, S: 4, Z: 5, J: 6, L: 7,
};

export const TYPE_TO_CELL: Record<string, CellValue> = {
  I: 1, O: 2, T: 3, S: 4, Z: 5, J: 6, L: 7,
};

export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;
export const VISIBLE_HEIGHT = 20;
export const BUFFER_ROWS = 4;

export const WALL_KICKS_JLSTZ: Record<string, Position[]> = {
  '0->1': [{ x: -1, y: 0 }, { x: -1, y: -1 }, { x: 0, y: 2 }, { x: -1, y: 2 }],
  '1->0': [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: -2 }, { x: 1, y: -2 }],
  '1->2': [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: -2 }, { x: 1, y: -2 }],
  '2->1': [{ x: -1, y: 0 }, { x: -1, y: -1 }, { x: 0, y: 2 }, { x: -1, y: 2 }],
  '2->3': [{ x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: 2 }, { x: 1, y: 2 }],
  '3->2': [{ x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: -2 }, { x: -1, y: -2 }],
  '3->0': [{ x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: -2 }, { x: -1, y: -2 }],
  '0->3': [{ x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: 2 }, { x: 1, y: 2 }],
};

export const WALL_KICKS_I: Record<string, Position[]> = {
  '0->1': [{ x: -2, y: 0 }, { x: 1, y: 0 }, { x: -2, y: 1 }, { x: 1, y: -2 }],
  '1->0': [{ x: 2, y: 0 }, { x: -1, y: 0 }, { x: 2, y: -1 }, { x: -1, y: 2 }],
  '1->2': [{ x: -1, y: 0 }, { x: 2, y: 0 }, { x: -1, y: -2 }, { x: 2, y: 1 }],
  '2->1': [{ x: 1, y: 0 }, { x: -2, y: 0 }, { x: 1, y: 2 }, { x: -2, y: -1 }],
  '2->3': [{ x: 2, y: 0 }, { x: -1, y: 0 }, { x: 2, y: -1 }, { x: -1, y: 2 }],
  '3->2': [{ x: -2, y: 0 }, { x: 1, y: 0 }, { x: -2, y: 1 }, { x: 1, y: -2 }],
  '3->0': [{ x: 1, y: 0 }, { x: -2, y: 0 }, { x: 1, y: 2 }, { x: -2, y: -1 }],
  '0->3': [{ x: -1, y: 0 }, { x: 2, y: 0 }, { x: -1, y: -2 }, { x: 2, y: 1 }],
};

export const DROP_SPEEDS_MS: Record<number, number> = {
  1: 1000,
  2: 793,
  3: 618,
  4: 473,
  5: 355,
  6: 262,
  7: 190,
  8: 135,
  9: 94,
  10: 64,
  11: 43,
  12: 28,
  13: 18,
  14: 11,
  15: 7,
};

export function getDropSpeed(level: number): number {
  return DROP_SPEEDS_MS[Math.min(level, 15)] ?? 7;
}

export function createEmptyBoard(): Board {
  return Array.from({ length: BOARD_HEIGHT + BUFFER_ROWS }, () =>
    Array.from({ length: BOARD_WIDTH }, () => 0 as CellValue)
  );
}
