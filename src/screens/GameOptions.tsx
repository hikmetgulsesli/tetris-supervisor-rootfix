// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Options
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, Circle, Gamepad2, MousePointerClick, TriangleAlert } from "lucide-react";


export type GameOptionsActionId = "save-and-return-1" | "clear-local-storage-2";

export interface GameOptionsProps {
  actions?: Partial<Record<GameOptionsActionId, () => void>>;
}

export function GameOptions({ actions }: GameOptionsProps) {
  return (
    <>
      {/* Sub-page Header (Navigation Suppressed as per Task-Focused rule) */}
      <header className="flex justify-between items-center w-full px-gutter h-touch-target border-b border-outline-variant bg-background shrink-0 sticky top-0 z-10">
      {/* Back Button: Save and Return */}
      <button aria-label="Save and return to previous screen" className="flex items-center gap-2 text-primary font-bold hover:bg-surface-variant/20 transition-colors rounded px-2 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background group" type="button" data-action-id="save-and-return-1" onClick={actions?.["save-and-return-1"]}>
      <ArrowLeft className="group-hover:-translate-x-1 transition-transform" aria-hidden={true} focusable="false" />
      <span className="text-label-mono font-label-mono uppercase hidden sm:inline">Save &amp; Return</span>
      </button>
      {/* Brand Anchor */}
      <div className="text-headline-sm font-headline-sm font-extrabold text-primary tracking-tighter absolute left-1/2 -translate-x-1/2 pointer-events-none">
                  ROOT FIX
              </div>
      {/* Decorative trailing space to balance flex-between */}
      <div className="w-[100px]"></div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-2xl flex flex-col gap-6 pb-12">
      {/* Page Title */}
      <div className="mb-2">
      <h1 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">Supervisor Settings</h1>
      <p className="text-label-mono font-label-mono text-on-surface-variant mt-1">Configure telemetry and feedback parameters.</p>
      </div>
      {/* AUDIO SETTINGS PANEL */}
      <section className="bg-surface-container border border-outline-variant rounded-lg p-panel-padding flex flex-col gap-6 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
      <header className="flex items-center gap-3 border-b border-outline-variant pb-3">
      <Circle className="text-primary" aria-hidden={true} focusable="false" />
      <h2 className="text-label-lg-bold font-label-lg-bold text-on-surface tracking-wider uppercase">Aural Telemetry</h2>
      </header>
      <div className="flex flex-col gap-6">
      {/* Music Volume Slider */}
      <div className="flex flex-col gap-3 group">
      <div className="flex justify-between items-center">
      <label className="text-label-mono font-label-mono text-on-surface group-focus-within:text-primary transition-colors" htmlFor="music-vol">Music Synthesis</label>
      <span className="text-label-mono font-label-mono text-primary bg-surface border border-outline-variant px-2 py-1 rounded min-w-[3rem] text-center">80%</span>
      </div>
      <div className="flex items-center gap-4 min-h-[44px]">
      <Circle className="text-on-surface-variant" aria-hidden={true} focusable="false" />
      <input aria-label="Music Volume" className="w-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container rounded-sm" id="music-vol" max="100" min="0" type="range" value="80" />
      <Circle className="text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* SFX Volume Slider */}
      <div className="flex flex-col gap-3 group">
      <div className="flex justify-between items-center">
      <label className="text-label-mono font-label-mono text-on-surface group-focus-within:text-primary transition-colors" htmlFor="sfx-vol">Tactile Audio (SFX)</label>
      <span className="text-label-mono font-label-mono text-primary bg-surface border border-outline-variant px-2 py-1 rounded min-w-[3rem] text-center">100%</span>
      </div>
      <div className="flex items-center gap-4 min-h-[44px]">
      <Circle className="text-on-surface-variant" aria-hidden={true} focusable="false" />
      <input aria-label="SFX Volume" className="w-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container rounded-sm" id="sfx-vol" max="100" min="0" type="range" value="100" />
      <Circle className="text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </section>
      {/* GAMEPLAY SETTINGS PANEL */}
      <section className="bg-surface-container border border-outline-variant rounded-lg p-panel-padding flex flex-col gap-6 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
      <header className="flex items-center gap-3 border-b border-outline-variant pb-3">
      <Gamepad2 className="text-primary" aria-hidden={true} focusable="false" />
      <h2 className="text-label-lg-bold font-label-lg-bold text-on-surface tracking-wider uppercase">Simulation Parameters</h2>
      </header>
      <div className="flex flex-col gap-6">
      {/* Starting Level Dropdown */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-h-[44px]">
      <label className="text-label-mono font-label-mono text-on-surface" htmlFor="start-level">Initial Velocity (Level)</label>
      <div className="relative">
      <select className="appearance-none bg-surface border border-outline-variant text-primary text-label-mono font-label-mono rounded px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-w-[140px] w-full sm:w-auto hover:bg-surface-variant/50 transition-colors cursor-pointer" id="start-level">
      <option value="1">Level 01</option>
      <option value="5">Level 05</option>
      <option selected={true} value="10">Level 10</option>
      <option value="15">Level 15</option>
      </select>
      <Circle className="absolute right-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none" aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* Difficulty Select (Radio Buttons styled as pills) */}
      <div className="flex flex-col gap-3">
      <label className="text-label-mono font-label-mono text-on-surface">Algorithm Aggression</label>
      <div aria-label="Difficulty Selection" className="grid grid-cols-3 gap-2" role="radiogroup">
      <label className="relative cursor-pointer">
      <input className="peer sr-only" name="difficulty" type="radio" value="casual" />
      <div className="min-h-[44px] flex items-center justify-center border border-outline-variant rounded bg-surface text-on-surface-variant text-label-mono font-label-mono uppercase peer-checked:bg-primary peer-checked:text-on-primary peer-checked:border-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-surface-container transition-colors hover:bg-surface-variant">
                                          Casual
                                      </div>
      </label>
      <label className="relative cursor-pointer">
      <input checked={true} className="peer sr-only" name="difficulty" type="radio" value="standard" />
      <div className="min-h-[44px] flex items-center justify-center border border-outline-variant rounded bg-surface text-on-surface-variant text-label-mono font-label-mono uppercase peer-checked:bg-primary peer-checked:text-on-primary peer-checked:border-primary peer-checked:shadow-[0_0_12px_rgba(137,206,255,0.4)] peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-surface-container transition-colors hover:bg-surface-variant">
                                          Standard
                                      </div>
      </label>
      <label className="relative cursor-pointer">
      <input className="peer sr-only" name="difficulty" type="radio" value="expert" />
      <div className="min-h-[44px] flex items-center justify-center border border-outline-variant rounded bg-surface text-on-surface-variant text-label-mono font-label-mono uppercase peer-checked:bg-primary peer-checked:text-on-primary peer-checked:border-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-surface-container transition-colors hover:bg-surface-variant">
                                          Expert
                                      </div>
      </label>
      </div>
      </div>
      {/* Ghost Piece Toggle */}
      <div className="flex items-center justify-between min-h-[44px]">
      <div>
      <span className="text-label-mono font-label-mono text-on-surface block">Predictive Projection</span>
      <span className="text-label-mono font-label-mono text-on-surface-variant text-[12px] opacity-70">Display ghost piece indicator</span>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input checked={true} className="sr-only peer" type="checkbox" />
      <div className="w-14 h-7 bg-surface border border-outline-variant peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary peer-focus:ring-offset-2 peer-focus:ring-offset-surface-container rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant after:border-outline-variant after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary peer-checked:after:bg-on-primary peer-checked:shadow-[0_0_8px_rgba(137,206,255,0.4)]"></div>
      </label>
      </div>
      </div>
      </section>
      {/* CONTROLS SETTINGS PANEL */}
      <section className="bg-surface-container border border-outline-variant rounded-lg p-panel-padding flex flex-col gap-6 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
      <header className="flex items-center gap-3 border-b border-outline-variant pb-3">
      <MousePointerClick className="text-primary" aria-hidden={true} focusable="false" />
      <h2 className="text-label-lg-bold font-label-lg-bold text-on-surface tracking-wider uppercase">Input Interface</h2>
      </header>
      <div className="flex flex-col gap-3 group">
      <div className="flex justify-between items-center">
      <div>
      <label className="text-label-mono font-label-mono text-on-surface group-focus-within:text-primary transition-colors block" htmlFor="input-sens">DAS / ARR Sensitivity</label>
      <span className="text-label-mono font-label-mono text-on-surface-variant text-[12px] opacity-70">Auto-repeat rate for lateral movement</span>
      </div>
      <span className="text-label-mono font-label-mono text-primary bg-surface border border-outline-variant px-2 py-1 rounded min-w-[3rem] text-center">Fast</span>
      </div>
      <div className="flex items-center gap-4 min-h-[44px] mt-2">
      <Circle className="text-on-surface-variant text-sm" aria-hidden={true} focusable="false" />
      <input aria-label="Input Sensitivity" className="w-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container rounded-sm" id="input-sens" max="100" min="0" type="range" value="75" />
      <Circle className="text-primary text-xl drop-shadow-[0_0_4px_rgba(137,206,255,0.6)]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </section>
      {/* DANGER ZONE PANEL */}
      <section className="bg-surface-container border border-error/30 rounded-lg p-panel-padding flex flex-col gap-4 mt-4">
      <header className="flex items-center gap-3 border-b border-error/30 pb-3">
      <TriangleAlert className="text-error" aria-hidden={true} focusable="false" />
      <h2 className="text-label-lg-bold font-label-lg-bold text-error tracking-wider uppercase">Data Integrity</h2>
      </header>
      <p className="text-body-md font-body-md text-on-surface-variant">
                          Emergency recovery option. This will purge all local high scores, saved configurations, and telemetry data. This action cannot be reversed.
                      </p>
      <button className="w-full sm:w-auto self-start mt-2 min-h-[44px] px-6 flex items-center justify-center gap-2 bg-surface border border-error text-error text-label-mono font-label-mono uppercase rounded hover:bg-error hover:text-on-error focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-surface-container transition-colors group shadow-[0_0_0_rgba(255,180,171,0)] hover:shadow-[0_0_12px_rgba(255,180,171,0.4)]" type="button" data-action-id="clear-local-storage-2" onClick={actions?.["clear-local-storage-2"]}>
      <Circle className="group-hover:text-on-error transition-colors" aria-hidden={true} focusable="false" />
                          Clear Local Storage
                      </button>
      </section>
      </div>
      </main>
    </>
  );
}
