import { useContext } from "preact/hooks";

import { ThemeContext } from "@/app/providers/ThemeProvider/ThemeProvider.tsx";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme need use in ThemeProvider");
  }

  return context;
};
