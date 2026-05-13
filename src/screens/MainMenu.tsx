// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Gamepad2, Info, Play, Settings, User } from "lucide-react";


export type MainMenuActionId = "button-1-1" | "button-2-2" | "new-game-enter-3" | "resume-no-save-data-4" | "options-5" | "help-6";

export interface MainMenuProps {
  actions?: Partial<Record<MainMenuActionId, () => void>>;
}

export function MainMenu({ actions }: MainMenuProps) {
  return (
    <>
      {/* SideNavBar (Web) */}
      <nav className="hidden md:flex flex-col h-full py-panel-padding bg-surface-container dark:bg-surface-container border-r border-outline-variant h-full w-64 fixed left-0 top-0 z-30">
      <div className="px-gutter mb-8 flex items-center gap-3">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary text-3xl" aria-hidden={true} focusable="false" />
      <div>
      <h1 className="text-headline-sm font-headline-sm text-primary tracking-tight">TETRIS ROOT</h1>
      <p className="text-label-mono font-label-mono text-outline text-[10px]">V1.0.4-STABLE</p>
      </div>
      </div>
      <div className="flex-1 px-4 space-y-2">
      {/* Active Tab */}
      <a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary-container text-on-primary-container font-bold border-l-4 border-primary translate-x-1 duration-150 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container" href="#">
      <Gamepad2  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="text-label-mono font-label-mono">Arcade</span>
      </a>
      {/* Inactive Tabs */}
      <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="text-label-mono font-label-mono">Leaderboard</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="text-label-mono font-label-mono">Settings</span>
      </a>
      </div>
      <div className="px-gutter mt-auto flex items-center gap-3 pt-4 border-t border-outline-variant">
      <div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline flex items-center justify-center relative">
      <span className="w-2 h-2 rounded-full bg-primary absolute bottom-0 right-0 shadow-[0_0_6px_#89ceff]"></span>
      <User className="text-outline text-sm" aria-hidden={true} focusable="false" />
      </div>
      <div className="text-label-mono font-label-mono text-on-surface text-xs truncate">System Status Indicator</div>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="md:ml-64 min-h-screen flex flex-col relative pb-16 md:pb-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 block-pattern opacity-50 pointer-events-none z-0"></div>
      {/* Faint decorative background blocks */}
      <div className="absolute right-[10%] top-[20%] w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-sm pointer-events-none z-0 rotate-12 blur-[1px]"></div>
      <div className="absolute left-[5%] bottom-[30%] w-24 h-8 bg-tertiary/10 border border-tertiary/20 rounded-sm pointer-events-none z-0 -rotate-6 blur-[1px]"></div>
      {/* TopAppBar */}
      <header className="flex justify-between items-center w-full px-gutter h-touch-target bg-background dark:bg-background border-b border-outline-variant dark:border-outline-variant z-20 sticky top-0 md:pl-8">
      <div className="flex items-center">
      <span className="text-headline-sm font-headline-sm font-extrabold text-primary dark:text-primary tracking-tighter">ROOT FIX</span>
      </div>
      <div className="flex items-center gap-2">
      <button className="w-touch-target h-touch-target flex items-center justify-center text-primary dark:text-primary hover:bg-surface-variant/20 transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-primary" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button className="w-touch-target h-touch-target flex items-center justify-center text-primary dark:text-primary hover:bg-surface-variant/20 transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-primary" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Canvas: Starting Screen */}
      <div className="flex-1 flex flex-col items-center justify-center p-gutter z-10 relative">
      <div className="w-full max-w-sm flex flex-col items-center">
      {/* Main Title Area */}
      <div className="text-center mb-12 relative group">
      <h2 className="text-display-xl font-display-xl text-on-surface tracking-tighter uppercase mb-2 relative z-10 drop-shadow-2xl">
                              Supervisor
                              <span className="block text-primary glow-primary mix-blend-screen text-4xl mt-1">Terminal</span>
      </h2>
      <div className="h-1 w-24 bg-primary mx-auto rounded-full glow-primary"></div>
      </div>
      {/* Menu Buttons (Bento Stack Layout) */}
      <div className="w-full flex flex-col gap-4">
      {/* Primary Action: New Game */}
      <button className="w-full h-14 flex items-center justify-between px-6 bg-surface border border-outline-variant rounded-lg group relative overflow-hidden focus:outline-none focus:ring-4 focus:ring-primary/50 transition-transform hover:scale-[1.02]" type="button" data-action-id="new-game-enter-3" onClick={actions?.["new-game-enter-3"]}>
      <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary group-hover:glow-primary transition-colors"></div>
      <span className="text-label-lg-bold font-label-lg-bold text-on-surface group-hover:text-primary transition-colors flex items-center gap-3">
      <Play  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary" aria-hidden={true} focusable="false" />
                                  New Game
                              </span>
      <span className="text-label-mono font-label-mono text-outline text-xs opacity-0 group-hover:opacity-100 transition-opacity">ENTER</span>
      </button>
      {/* Disabled Action: Resume */}
      <button className="w-full h-14 flex items-center justify-between px-6 bg-surface-container-low border border-outline-variant/50 rounded-lg opacity-50 cursor-not-allowed" disabled={true} type="button" data-action-id="resume-no-save-data-4" onClick={actions?.["resume-no-save-data-4"]}>
      <span className="text-label-lg-bold font-label-lg-bold text-on-surface-variant flex items-center gap-3">
      <Circle aria-hidden={true} focusable="false" />
                                  Resume
                              </span>
      <span className="text-label-mono font-label-mono text-outline text-xs">NO SAVE DATA</span>
      </button>
      {/* Secondary Action: Options */}
      <button className="w-full h-14 flex items-center justify-between px-6 bg-surface border border-outline-variant rounded-lg hover:bg-surface-variant/50 hover:border-outline transition-colors focus:outline-none focus:ring-2 focus:ring-outline" type="button" data-action-id="options-5" onClick={actions?.["options-5"]}>
      <span className="text-label-lg-bold font-label-lg-bold text-on-surface flex items-center gap-3">
      <Circle aria-hidden={true} focusable="false" />
                                  Options
                              </span>
      </button>
      {/* Secondary Action: Help */}
      <button className="w-full h-14 flex items-center justify-between px-6 bg-surface border border-outline-variant rounded-lg hover:bg-surface-variant/50 hover:border-outline transition-colors focus:outline-none focus:ring-2 focus:ring-outline" type="button" data-action-id="help-6" onClick={actions?.["help-6"]}>
      <span className="text-label-lg-bold font-label-lg-bold text-on-surface flex items-center gap-3">
      <Info aria-hidden={true} focusable="false" />
                                  Help
                              </span>
      </button>
      </div>
      </div>
      {/* Footer Metadata */}
      <footer className="mt-16 text-center">
      <p className="text-label-mono font-label-mono text-outline-variant text-xs">
                          SYSTEM BUILD: 2024.10.BETA <br />
                          CONNECTED TO: MAIN_SERVER_01
                      </p>
      </footer>
      </div>
      </main>
      {/* BottomNavBar (Mobile) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 h-16 md:hidden border-t border-outline-variant bg-surface-container-lowest dark:bg-surface-container-lowest shadow-lg">
      {/* Active Tab */}
      <a className="flex flex-col items-center justify-center bg-primary text-on-primary rounded-xl px-4 py-1 scale-90 transition-colors" href="#">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="text-label-mono font-label-mono text-[10px]">Game</span>
      </a>
      {/* Inactive Tabs */}
      <a className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 transition-opacity" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="text-label-mono font-label-mono text-[10px]">Stats</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 transition-opacity" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="text-label-mono font-label-mono text-[10px]">Social</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 transition-opacity" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="text-label-mono font-label-mono text-[10px]">Config</span>
      </a>
      </nav>
    </>
  );
}
