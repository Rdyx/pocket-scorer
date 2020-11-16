import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import YamsPage from "./yams/YamsPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./homepage/Homepage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/yams" exact component={YamsPage} />
      </Switch>
    </Router>
  );
}

export default App;
