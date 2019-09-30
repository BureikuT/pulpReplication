import React from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "../contact/Contact";
import Menu from "../menu/Menu";
import LandingPage from "../landingpage/LandingPage";

const Routing = () => {
  return (
    <section>
      <Switch>
        <Route exact path="/landing-page" component={LandingPage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/menu" component={Menu} />
      </Switch>
    </section>
  );
};

export default Routing;
