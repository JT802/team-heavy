<<<<<<< HEAD
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
  
=======
import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>This is just placeholder text until we change it.</h1>
    </div>
>>>>>>> d704c905faa0cfe4536ad291d8f8732b6d2ec9ad
  );
}

export default App;
