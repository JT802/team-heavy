import React from "react";
import "./App.css";
import BHW2 from "./images/BHW2.png";

function Homepage() {
  return (
    <div>
      <p class="info">Touch the kiosk screen here to learn more!</p>
      <img id="BHW" src={BHW2} alt="BHW Image" />
      <div id="parallax-wrapper">
        <div class="parallax"></div>
      </div>
    </div>
  );
}

export default Homepage;
