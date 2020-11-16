//imports
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/HomeComponent/Homepage.js";
import HorizontalCarousel from "./Components/CarouselComponents/horizontalCarousel";
import SecondCarousel from "./Components/CarouselComponents/SecondCarousel";

function App() {
  return (
    // route to the carousel page after landing page screen is touched
    <div id="main-wrapper">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/HorizontalCarousel"
            component={HorizontalCarousel}
          ></Route>
          <Route path="/SecondCarousel" component={SecondCarousel}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
