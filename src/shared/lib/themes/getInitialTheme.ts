import { THEME_STORAGE_KEY } from "@/shared/config";
import type { Theme } from "./types";

export const getInitialTheme = (): Theme => {
  const saved = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
  if (saved === "light" || saved === "dark") return saved;

  const prefersDark = window.matchMedia?.(
    "(prefers-color-scheme: dark)",
  ).matches;
  return prefersDark ? "dark" : "light";
};
