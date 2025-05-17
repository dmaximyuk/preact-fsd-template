import "@/shared/styles/index.sass";

import type { FunctionComponent } from "preact";

import { PlatformProvider, StoreProvider, ThemeProvider } from "./providers";
import { Routes } from "./routes";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <PlatformProvider>
      <StoreProvider>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </StoreProvider>
    </PlatformProvider>
  );
};

export default App;
