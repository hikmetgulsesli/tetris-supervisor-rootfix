// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, ArrowRight, Circle, Pause, RotateCw, Settings } from "lucide-react";


export type GameBoardActionId = "button-1-1" | "button-2-2" | "button-3-3" | "button-4-4" | "button-5-5" | "button-6-6" | "button-7-7" | "button-8-8" | "game-9" | "stats-10" | "social-11" | "config-12";

export interface GameBoardProps {
  actions?: Partial<Record<GameBoardActionId, () => void>>;
}

export function GameBoard({ actions }: GameBoardProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-background dark:bg-background border-b border-outline-variant dark:border-outline-variant flex justify-between items-center w-full px-gutter h-touch-target shrink-0 z-50">
      <div className="flex items-center gap-4">
      <span className="text-headline-sm font-headline-sm font-extrabold text-primary dark:text-primary tracking-tighter">ROOT FIX</span>
      </div>
      <div className="flex items-center gap-2">
      <button className="h-touch-target w-touch-target flex items-center justify-center text-on-surface-variant hover:bg-surface-variant/20 transition-colors rounded-full touch-control" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      <button className="h-touch-target w-touch-target flex items-center justify-center text-on-surface-variant hover:bg-surface-variant/20 transition-colors rounded-full touch-control" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Game Area Container */}
      <main className="flex-1 flex flex-col md:flex-row w-full max-w-6xl mx-auto overflow-hidden relative">
      {/* Left HUD (Hold & Status) - Hidden on small mobile, stacked on tablet, side on desktop */}
      <aside className="hidden md:flex flex-col w-64 p-panel-padding gap-6 shrink-0 h-full border-r border-outline-variant bg-surface-container">
      {/* Hold Panel */}
      <div className="bg-surface-dim border border-outline-variant rounded-lg p-4 flex flex-col items-center">
      <h2 className="w-full text-left font-label-mono text-label-mono text-on-surface-variant mb-4 uppercase">Hold</h2>
      <div className="w-24 h-24 mini-grid">
      {/* Example L Piece in Hold */}
      <div className="col-start-2 row-start-2 w-full h-full bg-tetris-l block-glow-l"></div>
      <div className="col-start-2 row-start-3 w-full h-full bg-tetris-l block-glow-l"></div>
      <div className="col-start-2 row-start-4 w-full h-full bg-tetris-l block-glow-l"></div>
      <div className="col-start-3 row-start-4 w-full h-full bg-tetris-l block-glow-l"></div>
      </div>
      </div>
      {/* Bridge Status */}
      <div className="bg-surface-dim border border-outline-variant rounded-lg p-4 mt-auto">
      <h2 className="font-label-mono text-label-mono text-on-surface-variant mb-2 uppercase">Bridge Status</h2>
      <div className="flex items-center gap-2 text-primary font-label-mono text-label-mono">
      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                          SYNCED v1.0.4
                      </div>
      </div>
      </aside>
      {/* Center Game Board Area */}
      <section className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 relative min-h-0">
      {/* Top Mobile HUD (Only visible on mobile) */}
      <div className="md:hidden w-full flex justify-between items-center mb-4 px-2 max-w-[300px]">
      <div className="bg-surface-dim border border-outline-variant rounded p-2 flex flex-col items-center w-16">
      <span className="text-[10px] font-label-mono text-on-surface-variant uppercase">Hold</span>
      {/* Tiny L Piece */}
      <div className="grid grid-cols-4 grid-rows-4 gap-[1px] w-8 h-8 mt-1">
      <div className="col-start-2 row-start-2 w-full h-full bg-tetris-l"></div>
      <div className="col-start-2 row-start-3 w-full h-full bg-tetris-l"></div>
      <div className="col-start-2 row-start-4 w-full h-full bg-tetris-l"></div>
      <div className="col-start-3 row-start-4 w-full h-full bg-tetris-l"></div>
      </div>
      </div>
      <div className="flex flex-col items-center">
      <span className="text-display-xl font-display-xl text-primary tracking-tighter leading-none">004200</span>
      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest mt-1">Score</span>
      </div>
      <div className="bg-surface-dim border border-outline-variant rounded p-2 flex flex-col items-center w-16">
      <span className="text-[10px] font-label-mono text-on-surface-variant uppercase">Next</span>
      {/* Tiny I Piece */}
      <div className="grid grid-cols-4 grid-rows-4 gap-[1px] w-8 h-8 mt-1">
      <div className="col-start-1 row-start-2 w-full h-full bg-tetris-i"></div>
      <div className="col-start-2 row-start-2 w-full h-full bg-tetris-i"></div>
      <div className="col-start-3 row-start-2 w-full h-full bg-tetris-i"></div>
      <div className="col-start-4 row-start-2 w-full h-full bg-tetris-i"></div>
      </div>
      </div>
      </div>
      {/* The Matrix (Game Board) */}
      <div className="bg-[#0F172A] border border-outline-variant tetris-grid w-full max-w-[300px] md:max-w-[350px] shadow-[0_0_30px_rgba(0,0,0,0.5)] relative">
      {/* Background Grid Lines (visual effect) */}
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-20 opacity-20 pointer-events-none">
      {/* Generative grid lines could go here, but css grid gap handles it nicely */}
      </div>
      {/* Placed Blocks (Bottom Rows) */}
      {/* Row 19 (bottom-most) */}
      <div className="col-start-1 row-start-20 w-full h-full bg-surface-container border border-outline-variant/50"></div>
      <div className="col-start-2 row-start-20 w-full h-full bg-surface-container border border-outline-variant/50"></div>
      <div className="col-start-3 row-start-20 w-full h-full bg-surface-container border border-outline-variant/50"></div>
      <div className="col-start-4 row-start-20 w-full h-full bg-surface-container border border-outline-variant/50"></div>
      {/* Gap at 5 */}
      <div className="col-start-6 row-start-20 w-full h-full bg-surface-container border border-outline-variant/50"></div>
      <div className="col-start-7 row-start-20 w-full h-full bg-surface-container border border-outline-variant/50"></div>
      <div className="col-start-8 row-start-20 w-full h-full bg-surface-container border border-outline-variant/50"></div>
      <div className="col-start-9 row-start-20 w-full h-full bg-surface-container border border-outline-variant/50"></div>
      <div className="col-start-10 row-start-20 w-full h-full bg-surface-container border border-outline-variant/50"></div>
      {/* Active Falling Piece (T Piece) */}
      <div className="col-start-4 row-start-5 w-full h-full bg-tetris-t block-glow-t"></div>
      <div className="col-start-5 row-start-5 w-full h-full bg-tetris-t block-glow-t z-10 relative">
      {/* Core highlight */}
      <div className="absolute inset-1 bg-white/20 rounded-sm"></div>
      </div>
      <div className="col-start-6 row-start-5 w-full h-full bg-tetris-t block-glow-t"></div>
      <div className="col-start-5 row-start-4 w-full h-full bg-tetris-t block-glow-t"></div>
      {/* Ghost Piece */}
      <div className="col-start-4 row-start-19 w-full h-full block-ghost"></div>
      <div className="col-start-5 row-start-19 w-full h-full block-ghost"></div>
      <div className="col-start-6 row-start-19 w-full h-full block-ghost"></div>
      <div className="col-start-5 row-start-18 w-full h-full block-ghost"></div>
      {/* Pause Button Overlay */}
      <button className="absolute top-4 right-4 w-10 h-10 bg-surface-dim/80 backdrop-blur border border-outline-variant rounded-full flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors z-20 touch-control" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Pause  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Mobile Controls (D-Pad & Actions) */}
      <div className="md:hidden w-full flex justify-between items-end mt-6 px-4 max-w-[400px]">
      {/* Left: D-Pad / Movement */}
      <div className="grid grid-cols-3 grid-rows-2 gap-2 w-32 h-24">
      <button className="col-start-1 row-start-2 bg-surface-variant border border-outline-variant rounded-lg flex items-center justify-center active:bg-primary active:text-on-primary transition-colors touch-control h-12" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <ArrowLeft aria-hidden={true} focusable="false" />
      </button>
      <button className="col-start-2 row-start-2 bg-surface-variant border border-outline-variant rounded-lg flex items-center justify-center active:bg-primary active:text-on-primary transition-colors touch-control h-12" type="button" data-action-id="button-5-5" onClick={actions?.["button-5-5"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="col-start-3 row-start-2 bg-surface-variant border border-outline-variant rounded-lg flex items-center justify-center active:bg-primary active:text-on-primary transition-colors touch-control h-12" type="button" data-action-id="button-6-6" onClick={actions?.["button-6-6"]}>
      <ArrowRight aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Right: Actions (Rotate / Hard Drop) */}
      <div className="flex gap-4">
      <button className="w-14 h-14 rounded-full bg-surface-variant border border-outline-variant flex items-center justify-center active:bg-secondary active:text-on-secondary transition-colors touch-control" type="button" data-action-id="button-7-7" onClick={actions?.["button-7-7"]}>
      <RotateCw aria-hidden={true} focusable="false" />
      </button>
      <button className="w-16 h-16 rounded-full bg-primary text-on-primary border border-primary-fixed flex items-center justify-center shadow-[0_0_15px_rgba(137,206,255,0.4)] active:scale-95 transition-transform touch-control" type="button" data-action-id="button-8-8" onClick={actions?.["button-8-8"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </section>
      {/* Right HUD (Next, Score, Stats) - Hidden on small mobile, stacked on tablet, side on desktop */}
      <aside className="hidden md:flex flex-col w-64 p-panel-padding gap-6 shrink-0 h-full border-l border-outline-variant bg-surface-container">
      {/* Next Panel */}
      <div className="bg-surface-dim border border-outline-variant rounded-lg p-4 flex flex-col items-center">
      <h2 className="w-full text-left font-label-mono text-label-mono text-on-surface-variant mb-4 uppercase">Next</h2>
      <div className="flex flex-col gap-4 items-center">
      {/* Primary Next */}
      <div className="w-24 h-24 mini-grid">
      <div className="col-start-1 row-start-2 w-full h-full bg-tetris-i block-glow-i"></div>
      <div className="col-start-2 row-start-2 w-full h-full bg-tetris-i block-glow-i"></div>
      <div className="col-start-3 row-start-2 w-full h-full bg-tetris-i block-glow-i"></div>
      <div className="col-start-4 row-start-2 w-full h-full bg-tetris-i block-glow-i"></div>
      </div>
      <div className="w-full h-px bg-outline-variant/50"></div>
      {/* Secondary Next (smaller) */}
      <div className="w-16 h-16 mini-grid opacity-70">
      <div className="col-start-2 row-start-2 w-full h-full bg-tetris-z opacity-80"></div>
      <div className="col-start-3 row-start-2 w-full h-full bg-tetris-z opacity-80"></div>
      <div className="col-start-3 row-start-3 w-full h-full bg-tetris-z opacity-80"></div>
      <div className="col-start-4 row-start-3 w-full h-full bg-tetris-z opacity-80"></div>
      </div>
      </div>
      </div>
      {/* Score Panel */}
      <div className="bg-surface-dim border border-outline-variant rounded-lg p-4 flex flex-col items-end">
      <h2 className="w-full text-left font-label-mono text-label-mono text-on-surface-variant mb-1 uppercase">Score</h2>
      <span className="text-headline-lg font-headline-lg text-primary font-bold tracking-tighter">004200</span>
      </div>
      {/* Stats Panel */}
      <div className="bg-surface-dim border border-outline-variant rounded-lg p-4 flex flex-col gap-4 mt-auto">
      <div>
      <div className="flex justify-between items-end mb-1">
      <h2 className="font-label-mono text-label-mono text-on-surface-variant uppercase">Level</h2>
      <span className="font-label-lg-bold text-label-lg-bold text-on-surface">04</span>
      </div>
      {/* Progress Bar */}
      <div className="w-full h-2 bg-outline-variant rounded-full overflow-hidden">
      <div className="h-full bg-primary w-[60%]"></div>
      </div>
      </div>
      <div className="flex justify-between items-end pt-2 border-t border-outline-variant/50">
      <h2 className="font-label-mono text-label-mono text-on-surface-variant uppercase">Lines</h2>
      <span className="font-label-lg-bold text-label-lg-bold text-on-surface">42</span>
      </div>
      </div>
      </aside>
      </main>
      {/* BottomNavBar (Mobile Only) - Using exact JSON implementation but suppressing FAB logic as this is a focused game screen */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 h-16 md:hidden bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant shadow-lg">
      {/* Game (Active) */}
      <button className="flex flex-col items-center justify-center bg-primary text-on-primary rounded-xl px-4 py-1 scale-90 transition-colors touch-control" type="button" data-action-id="game-9" onClick={actions?.["game-9"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="text-label-mono font-label-mono mt-1">Game</span>
      </button>
      {/* Stats */}
      <button className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 transition-opacity touch-control" type="button" data-action-id="stats-10" onClick={actions?.["stats-10"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      <span className="text-label-mono font-label-mono mt-1 text-[10px]">Stats</span>
      </button>
      {/* Social */}
      <button className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 transition-opacity touch-control" type="button" data-action-id="social-11" onClick={actions?.["social-11"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      <span className="text-label-mono font-label-mono mt-1 text-[10px]">Social</span>
      </button>
      {/* Config */}
      <button className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 transition-opacity touch-control" type="button" data-action-id="config-12" onClick={actions?.["config-12"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      <span className="text-label-mono font-label-mono mt-1 text-[10px]">Config</span>
      </button>
      </nav>
    </>
  );
}
