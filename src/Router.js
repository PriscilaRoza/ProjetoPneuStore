import React from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  );
}
