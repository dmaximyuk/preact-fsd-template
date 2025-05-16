import "@/shared/styles/index.sass";

import type { FunctionComponent } from "preact";

import { StoreProvider, ThemeProvider } from "./providers";
import { Routes } from "./routes";

import { AppTheme } from "@/shared/config";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <StoreProvider>
      <ThemeProvider defaultTheme={AppTheme.Light}>
        <Routes />
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
