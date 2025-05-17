import type { FunctionalComponent } from "preact";

interface StoreProviderProps {}

const StoreProvider: FunctionalComponent<StoreProviderProps> = (props) => {
  return <>{props.children}</>;
};

export default StoreProvider;
