import type { FunctionalComponent } from "preact";

import { useEffect } from "preact/hooks";
import { useTheme } from "@/shared/lib/themes";

import { AppTheme } from "@/shared/config";

interface ThemeProviderProps {
  defaultTheme: AppTheme;
}

const ThemeProvider: FunctionalComponent<ThemeProviderProps> = (props) => {
  const [theme] = useTheme(props.defaultTheme);

  useEffect(() => {
    console.log("Theme usage:", theme);
  }, [theme]);

  return <>{props.children}</>;
};

export default ThemeProvider;
