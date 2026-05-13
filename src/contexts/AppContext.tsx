import React, { createContext, useContext } from 'react';
import { useAppState } from '../hooks/useAppState';
import type { GameState } from '../types/domain';
import type { AppActions } from '../hooks/useAppState';
import type { Board } from '../types/domain';

interface AppContextValue {
  state: GameState;
  actions: AppActions;
  mergedBoard: Board;
  ghostPosition: { x: number; y: number } | null;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const { state, actions, mergedBoard, ghostPosition } = useAppState();
  return (
    <AppContext.Provider value={{ state, actions, mergedBoard, ghostPosition }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return ctx;
}
