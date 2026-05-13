// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pause Overlay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play } from "lucide-react";


export type PauseOverlayActionId = "resume-1" | "restart-2" | "quit-to-menu-3";

export interface PauseOverlayProps {
  actions?: Partial<Record<PauseOverlayActionId, () => void>>;
}

export function PauseOverlay({ actions }: PauseOverlayProps) {
  return (
    <>
      {/* Mock Background Game Board (Dimmed & Blurred) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center bg-surface-container-lowest overflow-hidden">
      {/* Abstract grid representation */}
      <div className="grid grid-cols-10 grid-rows-20 gap-block-gap opacity-20 transform scale-[1.2] blur-[2px]">
      {/* Just some mock blocks to give the illusion of a game */}
      <div className="w-8 h-8 bg-surface-variant col-start-4 col-end-5 row-start-15 row-end-16 rounded-sm"></div>
      <div className="w-8 h-8 bg-surface-variant col-start-5 col-end-6 row-start-15 row-end-16 rounded-sm"></div>
      <div className="w-8 h-8 bg-surface-variant col-start-6 col-end-7 row-start-15 row-end-16 rounded-sm"></div>
      <div className="w-8 h-8 bg-surface-variant col-start-5 col-end-6 row-start-14 row-end-15 rounded-sm"></div>
      <div className="w-8 h-8 bg-surface-variant col-start-2 col-end-3 row-start-18 row-end-19 rounded-sm"></div>
      <div className="w-8 h-8 bg-surface-variant col-start-2 col-end-3 row-start-19 row-end-20 rounded-sm"></div>
      <div className="w-8 h-8 bg-surface-variant col-start-3 col-end-4 row-start-19 row-end-20 rounded-sm"></div>
      <div className="w-8 h-8 bg-surface-variant col-start-3 col-end-4 row-start-20 row-end-21 rounded-sm"></div>
      </div>
      {/* Mock HUD overlay (faint) */}
      <div className="absolute left-8 top-1/4 w-32 h-64 border border-outline-variant bg-surface rounded-DEFAULT opacity-30"></div>
      <div className="absolute right-8 top-1/4 w-32 h-64 border border-outline-variant bg-surface rounded-DEFAULT opacity-30"></div>
      </div>
      {/* The Overlay (The Void Level 0) */}
      <div aria-labelledby="pause-title" aria-modal="true" className="absolute inset-0 z-40 bg-background/60 backdrop-blur-md flex items-center justify-center p-gutter" role="dialog">
      {/* Pause Modal Container (Surface Level 1) */}
      <div className="w-full max-w-[400px] bg-surface-container border-2 border-outline-variant rounded-lg p-panel-padding flex flex-col items-center gap-8 shadow-2xl relative overflow-hidden">
      {/* Subtle accent lines mimicking scanlines or tech borders */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-container to-transparent opacity-50"></div>
      {/* Header */}
      <div className="text-center w-full flex flex-col items-center gap-2">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-[48px] text-primary" aria-hidden={true} focusable="false" />
      <h1 className="font-display-xl text-display-xl text-primary tracking-tighter uppercase text-center w-full block drop-shadow-[0_0_8px_rgba(137,206,255,0.4)]" id="pause-title">PAUSED</h1>
      <p className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest mt-2">Take a breath</p>
      </div>
      {/* Action Buttons */}
      <div className="w-full flex flex-col gap-4 mt-4">
      {/* Primary Action: Resume */}
      <button aria-label="Resume Game" className="w-full h-[56px] min-h-touch-target bg-primary-container text-on-primary-container rounded-DEFAULT font-label-lg-bold text-label-lg-bold flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] active:scale-95 neon-glow-primary border border-primary-fixed focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container" type="button" data-action-id="resume-1" onClick={actions?.["resume-1"]}>
      <Play  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                          Resume
                      </button>
      {/* Secondary Action: Restart */}
      <button aria-label="Restart Game" className="w-full h-[56px] min-h-touch-target bg-surface text-on-surface border border-outline-variant hover:bg-surface-variant/50 rounded-DEFAULT font-label-lg-bold text-label-lg-bold flex items-center justify-center gap-3 transition-colors focus:outline-none focus:ring-2 focus:ring-outline focus:ring-offset-2 focus:ring-offset-surface-container" type="button" data-action-id="restart-2" onClick={actions?.["restart-2"]}>
      <Circle aria-hidden={true} focusable="false" />
                          Restart
                      </button>
      {/* Tertiary Action/Destructive: Quit */}
      <button aria-label="Quit to Menu" className="w-full h-[56px] min-h-touch-target bg-surface text-error hover:bg-error-container/20 border border-outline-variant hover:border-error-container/50 rounded-DEFAULT font-label-lg-bold text-label-lg-bold flex items-center justify-center gap-3 transition-colors focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-surface-container" type="button" data-action-id="quit-to-menu-3" onClick={actions?.["quit-to-menu-3"]}>
      <Circle aria-hidden={true} focusable="false" />
                          Quit to Menu
                      </button>
      </div>
      {/* Keyboard Hint (Web/Desktop context) */}
      <div className="hidden md:flex w-full items-center justify-center mt-2 opacity-50">
      <span className="font-label-mono text-label-mono text-on-surface-variant">Press <kbd className="px-2 py-1 bg-surface border border-outline-variant rounded-sm text-xs font-bold text-on-surface mx-1">ESC</kbd> to resume</span>
      </div>
      </div>
      </div>
    </>
  );
}
