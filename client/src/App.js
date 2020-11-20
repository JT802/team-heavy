import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/HomeComponent/Homepage.js";
import HorizontalCarousel from "./Components/CarouselComponents/orizontalCarousel";
import BrentCarousel from "./Components/BrentCarousel";
import DeckCascade from "./Components/CarouselComponents/DeckCascade";
import About from "./Components/AboutComponent/About";
import NavBar from "./Components/NavBarComponent/NavBar";
import "./App.css";

function App() {
  return (
    // -- NavBar can persist across pages -- //
    <div>
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
