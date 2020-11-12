import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage.js";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Homepage />} />
          <Route path="" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
