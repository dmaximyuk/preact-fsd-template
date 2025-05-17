import {
  type ComponentChildren,
  createContext,
  type FunctionalComponent,
} from "preact";
import { useEffect, useState } from "preact/hooks";

import { getInitialTheme } from "@/shared/lib/themes";

import { type Theme } from "@/shared/lib/themes/types";

import { THEME_STORAGE_KEY } from "@/shared/config";

type SetThemeFunction = (
  theme: Theme,
  params?: { setToLocalStorage?: boolean },
) => void;

interface ThemeContextProps {
  theme: Theme;
  setTheme: SetThemeFunction;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

interface ThemeProviderProps {
  children: ComponentChildren;
}

const ThemeProvider: FunctionalComponent<ThemeProviderProps> = ({
  children,
}: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const setTheme: SetThemeFunction = (newTheme: Theme, params) => {
    if (params?.setToLocalStorage) {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    }

    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
