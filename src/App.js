import React from "react";
import Header from "./components/header/Header";
import LandingPage from "./components/landingpage/LandingPage";
import Footer from "./components/footer/Footer";
import Routing from "./components/routing/Routing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route component={Routing} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
