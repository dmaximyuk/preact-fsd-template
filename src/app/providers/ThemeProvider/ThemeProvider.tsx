import type { FunctionalComponent } from "preact";

import { useEffect } from "preact/hooks";
import { useTheme } from "@/shared/lib/hooks";

import { AppTheme } from "@/shared/config";

interface ThemeProviderProps {
  defaultTheme: AppTheme;
}

const ThemeProvider: FunctionalComponent<ThemeProviderProps> = (props) => {
  const [theme] = useTheme(props.defaultTheme);

  useEffect(() => {
    console.log("Theme usage:", theme);
  }, [theme]);

  return <div>{props.children}</div>;
};

export default ThemeProvider;
