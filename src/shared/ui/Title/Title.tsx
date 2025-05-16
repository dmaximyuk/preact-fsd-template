import type { FunctionComponent } from "preact";

interface TitleProps {}

const Title: FunctionComponent<TitleProps> = (props) => {
  return <h1>{props.children}</h1>;
};

export default Title;
