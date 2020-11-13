import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './Components/HomeComponent/Home'
import HorizontalCarousel from './Components/CarouselComponents/horizontalCarousel';
import SecondCarousel from './Components/CarouselComponents/SecondCarousel'

function App() {
  return (
   <div id= "main-wrapper">
     <Router>
       <Home/>
       <Switch>
        <Route path = "/HorizontalCarousel" exact component = {HorizontalCarousel}></Route>
        <Route path = "/SecondCarousel" exact component = {SecondCarousel}></Route>
     </Switch>
     </Router>
   </div>
  
  );
}

export default App;
