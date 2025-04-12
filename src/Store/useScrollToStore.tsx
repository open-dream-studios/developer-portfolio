import { create } from "zustand";

export const useScrollToStore = create<{ scrollTo: number; setScrollTo: (newScrollTo: number) => void }>((set) => ({
  scrollTo: 0,
  setScrollTo: (newScrollTo) => set({ scrollTo: newScrollTo }),
}));

export const useScrollToTriggerStore = create<{ scrollTo: number; setScrollTo: (newScrollTo: number) => void }>((set) => ({
  scrollTo: 0,
  setScrollTo: (newScrollTo) => set({ scrollTo: newScrollTo }),
}));