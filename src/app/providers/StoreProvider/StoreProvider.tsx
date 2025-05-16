import type { FunctionalComponent } from "preact";

interface StoreProviderProps {}

const StoreProvider: FunctionalComponent<StoreProviderProps> = (props) => {
  return <div>{props.children}</div>;
};

export default StoreProvider;
