import React from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "./contact/Contact";

const Routing = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default Routing;
