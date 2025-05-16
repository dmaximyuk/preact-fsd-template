import type { FunctionComponent } from "preact";
import { Route, Switch } from "wouter-preact";

import { HomePage, NotFoundPage } from "@/pages";

interface RoutesProps {}

const Routes: FunctionComponent<RoutesProps> = () => {
  return (
    <Switch>
      <Route path={"/"} component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
