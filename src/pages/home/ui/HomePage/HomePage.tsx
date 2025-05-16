import type { FunctionComponent } from "preact";

import { Title } from "@/shared/ui";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  return (
    <div>
      <Title>Test</Title>
    </div>
  );
};

export default HomePage;
