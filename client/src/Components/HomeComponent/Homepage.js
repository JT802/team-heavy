//imports
import React from "react";
import "./Home.css";
import BHW2 from "../../images/BHW2.png";
import { Link } from "react-router-dom";

//function for rendering the landing page
function Homepage() {
  return (
    //wrap everything in a link tag so the entire screen is a clickable link

    <div id="homepage-wrapper">
      <p className="info">Touch the screen on the kiosk to learn more!</p>
      {/* bringing in Big Heavy World logo */}
      <img id="BHW" src={BHW2} alt="BHW Image" />
      {/* divs for parallex css effect */}
      <div id="parallax-wrapper">
        <div className="parallax-footer"></div>
      </div>
    </div>
  );
}

export default Homepage;
