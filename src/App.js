import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUsScreen from "./Screens/AboutUsScreen";
import CoFounderScreen from "./Screens/CoFounderScreen";
import ContactScreen from "./Screens/ContactScreen";
import HomeScreen from "./Screens/HomeScreen";
import InvestorScreen from "./Screens/InvestorScreen";
import StartUpScreen from "./Screens/StartUpScreen";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomeScreen />
        </Route>
        <Route path="/start-up">
          <StartUpScreen />
        </Route>
        <Route path="/co-founder">
          <CoFounderScreen />
        </Route>
        <Route path="/investor">
          <InvestorScreen />
        </Route>
        <Route path="/about-us">
          <AboutUsScreen />
        </Route>
        <Route path="/contact">
          <ContactScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
