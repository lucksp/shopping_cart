import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import PageLink from "./PageLink";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/link/" component={PageLink} />
    </Switch>
  );
};

export default App;
