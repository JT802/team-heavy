//imports
import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Gif from "../../images/gif2.gif";
import TimSnow from "../../images/Tim-Snow.jpg";
import Door from "../../images/242Door2.jpg";

//function for rendering the landing page
function Homepage() {
  return (
    //wrap everything in a link tag so the entire screen is a clickable link

    <div id="homepage-wrapper">
      <div id="header-wrapper">
        <Link id="link" to="/BrentCarousel">
          <div className="interviews">
            <img id="BH" src={Gif} alt="Interviews" />
            <div className="interview-text">Interviews</div>
          </div>
        </Link>
        <Link id="link" to="/DeckCascade">
          <div className="tim-snow">
            <img id="Tim-Snow" src={TimSnow} alt="Tim Snow" />
            <div className="tim-snow-text">"Final" Show Photos by Tim Snow</div>
          </div>
        </Link>
        <Link id="link" to="/About">
          <div className="about">
            <img id="BHW" src={Door} alt="242 Main Door" />
            <div className="about-text">About 242 Main</div>
          </div>
        </Link>
      </div>

      <p className="info">242 Main Interactive</p>
      <Link id="link" to="/HorizontalCarousel">
        <div id="parallax-wrapper">
          <div className="parallax-footer"></div>
        </div>
      </Link>
    </div>
  );
}

export default Homepage;
