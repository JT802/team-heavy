import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './Components/Home'
import HorizontalCarousel from './Components/horizontalCarousel';

function App() {
  return (
   <div id= "main-wrapper">
     <Router>
       <Home/>
       <Switch>
        <Route path = "/HorizontalCarousel" exact component = {HorizontalCarousel}></Route>
     </Switch>
     </Router>
   </div>
  
  );
}

export default App;
