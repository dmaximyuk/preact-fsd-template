import { useState, useEffect, useCallback } from "preact/hooks";

import { AppTheme } from "@/shared/config";

const THEME_STORAGE_KEY = "app_theme";

export function useTheme(defaultTheme: AppTheme) {
  const [theme, setThemeState] = useState<AppTheme>(() => {
    if (typeof window === "undefined") return defaultTheme;

    const saved = localStorage.getItem(THEME_STORAGE_KEY);

    if (saved === "undefined") {
      localStorage.removeItem(THEME_STORAGE_KEY);
    }

    if (saved && saved !== "undefined") {
      return saved as AppTheme;
    }

    const prefersDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)",
    ).matches;
    const systemTheme = prefersDark ? AppTheme.Dark : AppTheme.Light;

    return systemTheme ?? defaultTheme;
  });

  const updateHtmlDataTheme = useCallback((newTheme: AppTheme) => {
    if (typeof document === "undefined") return;

    document.documentElement.setAttribute("data-theme", newTheme);
  }, []);

  const setTheme = useCallback(
    (value: AppTheme | ((prev: AppTheme) => AppTheme)) => {
      setThemeState((prev) => {
        const newTheme = typeof value === "function" ? value(prev) : value;

        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
        updateHtmlDataTheme(newTheme);

        return newTheme;
      });
    },
    [updateHtmlDataTheme],
  );

  useEffect(() => {
    updateHtmlDataTheme(theme);
  }, [theme, updateHtmlDataTheme]);

  return [theme, setTheme] as const;
}
