import React from "react";
import "./Home.css";
import BHW2 from "../../images/BHW2.png";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <Link id="link" to="/HorizontalCarousel">
      <div id="homepage-wrapper">
        <p class="info">Touch the screen on the kiosk to learn more!</p>
        <img id="BHW" src={BHW2} alt="BHW Image" />
        <div id="parallax-wrapper">
          <div class="parallax"></div>
        </div>
      </div>
    </Link>
  );
}

export default Homepage;
