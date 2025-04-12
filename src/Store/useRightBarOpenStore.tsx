import { RefObject } from "react";
import { create } from "zustand";

export const useRightBarOpenStore = create((set) => ({
  rightBarOpen: false,
  setRightBarOpen: (newRightBarOpen: boolean) =>
    set({ rightBarOpen: newRightBarOpen }),
}));


export interface RightBarRefStore {
  rightBarRef: RefObject<HTMLDivElement> | null;
  setRightBarRef: (ref: RefObject<HTMLDivElement>) => void;
}

export const useRightBarRefStore = create<RightBarRefStore>((set) => ({
  rightBarRef: null,
  setRightBarRef: (ref) => set({ rightBarRef: ref }),
}));