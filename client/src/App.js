//imports
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/HomeComponent/Homepage.js";
import HorizontalCarousel from "./Components/CarouselComponents/HorizontalCarousel";
import BrentCarousel from "./Components/BrentCarousel";
import DeckCascade from "./Components/CarouselComponents/DeckCascade";
import About from "./Components/AboutComponent/About";
import NavBar from "./Components/NavBarComponent/NavBar";
import "./App.css";

function App() {
  return (
    // -- We need the NavBar to exist on every page *except* for /Home -- //
    <div id="main-wrapper">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/HorizontalCarousel" component={HorizontalCarousel} />
          <Route path="/BrentCarousel" component={BrentCarousel} />
          <Route path="/DeckCascade" component={DeckCascade} />
          <Route path="/About" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
