import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/HomeComponent/Homepage.js";
import HorizontalCarousel from "./Components/CarouselComponents/HorizontalCarousel";
import BrentCarousel from "./Components/BrentCarousel";
import DeckCascade from "./Components/CarouselComponents/DeckCascade";
import About from "./Components/AboutComponent/About";
import Information from "./Components/InformationComponent/Information";
import InfoLink from "./Components/InformationComponent/InfoLink";
import "./App.css";

function App() {
  return (
    // -- NavBar persists across pages -- //
    <div>
      <Router>
     

        <InfoLink />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/HorizontalCarousel" component={HorizontalCarousel} />
          <Route path="/BrentCarousel" component={BrentCarousel} />
          <Route path="/DeckCascade" component={DeckCascade} />
          <Route path="/About" component={About} />
          <Route path="/Information" component={Information} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
