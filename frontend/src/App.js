import React from "react";
import "./App.css";
import { HashRouter, Link, Switch, Route } from "react-router-dom";
import DashboardContainer from "./containers/dashboard/dashboardContainer";
import ResourceNotFoundContainer from "./containers/resourceNotFoundContainer";
import HomeContainer from "./containers/home/homeContainer";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/dashboard" component={DashboardContainer} />
          <Route path="/" exact component={HomeContainer} />
          <Route component={ResourceNotFoundContainer} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
