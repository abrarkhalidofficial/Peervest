import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomeScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
