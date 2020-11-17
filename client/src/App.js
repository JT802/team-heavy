//imports
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/HomeComponent/Homepage.js";
import HorizontalCarousel from "./Components/CarouselComponents/HorizontalCarousel";
import BrentCarousel from "./Components/BrentCarousel";
import DeckCascade, { Deck } from "./Components/CarouselComponents/DeckCascade";
import About from "./Components/About";
import NavBar from "./Components/NavBar";

function App() {
  return (
    // -- We need the NavBar to exist on every page *except* for /Home -- //
    <div id="main-wrapper">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/HorizontalCarousel" component={HorizontalCarousel}><NavBar /></Route>
          <Route path="/SecondCarousel" component={SecondCarousel}><NavBar /></Route>
          <Route path="/BrentCarousel" component={BrentCarousel}><NavBar /></Route>
          <Route path="/DeckCascade" component={DeckCascade}><NavBar /></Route>
          <Route path="/About" component={About}><NavBar /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
