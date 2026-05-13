// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle } from "lucide-react";


export type GameOverActionId = "play-again-1" | "main-menu-2";

export interface GameOverProps {
  actions?: Partial<Record<GameOverActionId, () => void>>;
}

export function GameOver({ actions }: GameOverProps) {
  return (
    <>
      {/* Decorative Fixed Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0 flex flex-wrap" style={{backgroundImage: "linear-gradient(to right, #88929b 1px, transparent 1px), linear-gradient(to bottom, #88929b 1px, transparent 1px)", backgroundSize: "32px 32px"}}></div>
      {/* Main Content Container */}
      <div className="flex flex-col items-center w-full max-w-[400px] z-10 relative gap-8">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-4 w-full">
      {/* Luminescent Text Effect for "GAME OVER" */}
      <div className="relative inline-block w-full text-center">
      <h1 aria-hidden={true} className="absolute inset-0 text-display-xl font-display-xl text-error blur-xl opacity-60 tracking-widest uppercase">GAME OVER</h1>
      <h1 className="relative text-display-xl font-display-xl text-error tracking-widest uppercase z-10">GAME OVER</h1>
      </div>
      {/* High Score Indicator (Golden/Tertiary Glow) */}
      <div className="relative w-full max-w-[280px]">
      <div className="absolute inset-0 bg-tertiary blur-lg opacity-20 rounded-full"></div>
      <div className="relative bg-surface-container border border-tertiary/50 px-6 py-2 rounded-full flex items-center justify-center gap-2">
      <Circle  data-icon="trophy" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} className="text-tertiary" aria-hidden={true} focusable="false" />
      <span className="text-label-lg-bold font-label-lg-bold text-tertiary uppercase tracking-wider">High Score</span>
      </div>
      </div>
      </div>
      {/* HUD Bento Grid for Stats */}
      <div className="grid grid-cols-2 gap-unit w-full relative">
      {/* Background panel ambient glow */}
      <div className="absolute inset-0 bg-primary blur-[100px] opacity-5 -z-10 rounded-3xl"></div>
      {/* Final Score Panel (Spans full width) */}
      <div className="col-span-2 bg-surface-container border border-outline-variant rounded-xl p-panel-padding flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <span className="text-label-mono font-label-mono text-on-surface-variant mb-2 tracking-widest">FINAL SCORE</span>
      {/* Glowing Score Text */}
      <div className="relative">
      <span aria-hidden={true} className="absolute inset-0 text-display-xl font-display-xl text-primary blur-md opacity-40 text-center">1,420,000</span>
      <span className="relative text-display-xl font-display-xl text-primary text-center z-10">1,420,000</span>
      </div>
      </div>
      {/* Lines Cleared Panel */}
      <div className="bg-surface-container border border-outline-variant rounded-xl p-gutter flex flex-col items-center justify-center relative">
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-surface-variant to-transparent"></div>
      <span className="text-label-mono font-label-mono text-on-surface-variant mb-1 tracking-widest">LINES</span>
      <span className="text-headline-lg font-headline-lg text-on-surface">142</span>
      </div>
      {/* Level Reached Panel */}
      <div className="bg-surface-container border border-outline-variant rounded-xl p-gutter flex flex-col items-center justify-center relative">
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-surface-variant to-transparent"></div>
      <span className="text-label-mono font-label-mono text-on-surface-variant mb-1 tracking-widest">LEVEL</span>
      <span className="text-headline-lg font-headline-lg text-on-surface">15</span>
      </div>
      </div>
      {/* Action Controls */}
      <div className="flex flex-col gap-4 w-full mt-4">
      {/* Primary Arcade Button (Play Again) */}
      <div className="relative w-full group">
      {/* Intense Outer Glow for resting state, amplifies on hover */}
      <div className="absolute inset-0 bg-primary blur-md opacity-40 rounded-lg group-hover:opacity-60 transition-opacity duration-300"></div>
      <button className="relative w-full bg-primary text-on-primary h-[56px] rounded-lg flex items-center justify-center gap-2 text-headline-sm font-headline-sm uppercase tracking-wide border border-primary-fixed-dim hover:bg-surface-tint transition-colors active:scale-[0.98]" type="button" data-action-id="play-again-1" onClick={actions?.["play-again-1"]}>
      <Circle  data-icon="replay" aria-hidden={true} focusable="false" />
                          Play Again
                      </button>
      </div>
      {/* Secondary Button (Main Menu) */}
      <button className="w-full bg-surface-container text-on-surface border border-outline-variant h-[56px] rounded-lg flex items-center justify-center text-label-lg-bold font-label-lg-bold uppercase tracking-wider hover:bg-surface-container-high transition-colors active:scale-[0.98]" type="button" data-action-id="main-menu-2" onClick={actions?.["main-menu-2"]}>
                      Main Menu
                  </button>
      </div>
      </div>
    </>
  );
}
