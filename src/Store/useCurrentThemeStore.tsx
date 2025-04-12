import { create } from "zustand";
import { ThemeType } from "../Util/appTheme";

export const useCurrentThemeStore = create<{ currentTheme: ThemeType; setCurrentTheme: (newCurrentTheme: ThemeType) => void }>((set) => ({
  currentTheme: "light",
  setCurrentTheme: (newCurrentTheme) => set({ currentTheme: newCurrentTheme }),
}));