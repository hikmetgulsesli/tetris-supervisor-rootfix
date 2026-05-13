// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls Help
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Circle, Gavel, MousePointerClick, RotateCw } from "lucide-react";


export type ControlsHelpActionId = "back-1";

export interface ControlsHelpProps {
  actions?: Partial<Record<ControlsHelpActionId, () => void>>;
}

export function ControlsHelp({ actions }: ControlsHelpProps) {
  return (
    <>
      {/* Top Navigation for Context, Task-Focused so standard nav is suppressed, showing a back button instead */}
      <header className="w-full flex items-center p-gutter border-b border-outline-variant bg-surface-container">
      <button className="flex items-center text-primary hover:text-primary-fixed transition-colors h-touch-target" type="button" data-action-id="back-1" onClick={actions?.["back-1"]}>
      <ArrowLeft className="mr-2" aria-hidden={true} focusable="false" />
      <span className="font-label-lg-bold text-label-lg-bold">Back</span>
      </button>
      <div className="flex-1 text-center pr-10">
      <h1 className="font-headline-sm text-headline-sm font-extrabold text-primary tracking-tighter">HELP &amp; CONTROLS</h1>
      </div>
      </header>
      <main className="flex-1 overflow-y-auto p-gutter md:p-panel-padding max-w-4xl mx-auto w-full flex flex-col gap-8">
      {/* Intro */}
      <section className="text-center mt-4">
      <p className="text-on-surface-variant max-w-2xl mx-auto">Master the mechanics. Familiarize yourself with the controls to achieve a state of flow and dominate the leaderboard.</p>
      </section>
      {/* Keyboard Controls (Web/Desktop) */}
      <section className="bg-surface-container border border-outline-variant rounded-lg p-6 flex flex-col gap-6 shadow-lg">
      <h2 className="font-headline-lg text-headline-lg text-primary border-b border-outline-variant pb-2 mb-2 flex items-center">
      <Circle className="mr-3 text-3xl" aria-hidden={true} focusable="false" />
                      Keyboard
                  </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Movement */}
      <div className="flex flex-col gap-4">
      <h3 className="font-label-mono text-label-mono text-on-surface-variant uppercase">Movement</h3>
      <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-1">
      <div className="key-btn"><ArrowUp aria-hidden={true} focusable="false" /></div>
      <div className="flex gap-1">
      <div className="key-btn"><ArrowLeft aria-hidden={true} focusable="false" /></div>
      <div className="key-btn"><ArrowDown aria-hidden={true} focusable="false" /></div>
      <div className="key-btn"><ArrowRight aria-hidden={true} focusable="false" /></div>
      </div>
      </div>
      <div className="flex flex-col justify-center text-sm">
      <p><span className="font-bold text-on-surface">Up:</span> Rotate Right</p>
      <p><span className="font-bold text-on-surface">Left/Right:</span> Move</p>
      <p><span className="font-bold text-on-surface">Down:</span> Soft Drop</p>
      </div>
      </div>
      </div>
      {/* Actions */}
      <div className="flex flex-col gap-4">
      <h3 className="font-label-mono text-label-mono text-on-surface-variant uppercase">Actions</h3>
      <ul className="flex flex-col gap-3">
      <li className="flex items-center gap-3">
      <div className="key-btn wide">Space</div>
      <span>Hard Drop</span>
      </li>
      <li className="flex items-center gap-3">
      <div className="key-btn">C</div>
      <span>Hold Piece</span>
      </li>
      <li className="flex items-center gap-3">
      <div className="key-btn">Z</div>
      <span>Rotate Left</span>
      </li>
      <li className="flex items-center gap-3">
      <div className="key-btn">P</div>
      <span>Pause Game</span>
      </li>
      </ul>
      </div>
      </div>
      </section>
      {/* Touch Controls (Mobile) */}
      <section className="bg-surface-container border border-outline-variant rounded-lg p-6 flex flex-col gap-6 shadow-lg">
      <h2 className="font-headline-lg text-headline-lg text-secondary border-b border-outline-variant pb-2 mb-2 flex items-center">
      <MousePointerClick className="mr-3 text-3xl" aria-hidden={true} focusable="false" />
                      Touch
                  </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="flex flex-col gap-4">
      <p className="text-on-surface-variant">For touch devices, utilize the on-screen arcade buttons for precise control. Tap zones are optimized for zero-latency input.</p>
      <ul className="flex flex-col gap-3 mt-2">
      <li className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center bg-surface text-on-surface">
      <Circle aria-hidden={true} focusable="false" />
      </div>
      <span><strong className="text-on-surface">Swipe L/R:</strong> Move Piece</span>
      </li>
      <li className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center bg-surface text-on-surface">
      <Circle aria-hidden={true} focusable="false" />
      </div>
      <span><strong className="text-on-surface">Swipe Down:</strong> Soft Drop</span>
      </li>
      <li className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center bg-primary/10 text-primary neon-glow">
      <Circle aria-hidden={true} focusable="false" />
      </div>
      <span><strong className="text-on-surface">Tap Hard Drop:</strong> Instant Place</span>
      </li>
      </ul>
      </div>
      {/* Abstract Mobile representation */}
      <div className="relative w-full max-w-[240px] mx-auto h-[400px] border-2 border-outline-variant rounded-xl bg-surface-dim overflow-hidden shadow-2xl flex flex-col">
      <div className="flex-1 p-2 border-b border-outline-variant/50 relative">
      {/* Simulated game board area */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgyMHYyMEgwem0xIDF2MThoMThWMXoiIGZpbGw9IiMzZTRiNTAiIGZpbGwtb3BhY2l0eT0iLjIiLz48L3N2Zz4=')]"></div>
      </div>
      <div className="h-32 bg-surface-container flex flex-col justify-end p-2 gap-2 relative z-10">
      {/* Simulated Controls */}
      <div className="flex justify-between w-full px-2">
      <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center bg-surface/50 opacity-50">
      <Circle className="text-sm" aria-hidden={true} focusable="false" />
      </div>
      <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center bg-surface/50 opacity-50">
      <RotateCw className="text-sm" aria-hidden={true} focusable="false" />
      </div>
      </div>
      <div className="flex justify-between w-full">
      <div className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center bg-surface/50 opacity-50">
      <ArrowLeft className="text-xl" aria-hidden={true} focusable="false" />
      </div>
      <div className="w-16 h-16 rounded-full border border-primary flex items-center justify-center bg-primary/20 text-primary neon-glow">
      <Circle className="text-2xl" aria-hidden={true} focusable="false" />
      </div>
      <div className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center bg-surface/50 opacity-50">
      <ArrowRight className="text-xl" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Rules Summary */}
      <section className="bg-surface-container border border-outline-variant rounded-lg p-6 flex flex-col gap-4 shadow-lg mb-8">
      <h2 className="font-headline-sm text-headline-sm text-on-surface border-b border-outline-variant pb-2 flex items-center">
      <Gavel className="mr-2 text-primary" aria-hidden={true} focusable="false" />
                      Basic Rules
                  </h2>
      <ul className="list-disc pl-5 space-y-2 text-on-surface-variant">
      <li>Clear lines by filling a horizontal row completely with blocks.</li>
      <li>Clearing multiple lines at once scores significantly higher points (e.g., a "Tetris" is 4 lines).</li>
      <li>The speed of falling blocks increases as you level up.</li>
      <li>The game ends when the blocks stack to the top of the playfield.</li>
      <li>Use the 'Hold' function strategically to save a piece for later.</li>
      </ul>
      </section>
      </main>
    </>
  );
}
