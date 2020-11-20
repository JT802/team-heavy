//imports
import React from "react";
import "./Home.css";
import BHW3 from "../../images/3DLight.jpg";
import { Link } from "react-router-dom";
import BH from "../../images/BH.jpg";
import TimSnow from "../../images/Tim-Snow.jpg";
import BHW from "../../images/BHW.png";

//function for rendering the landing page
function Homepage() {
  return (
    //wrap everything in a link tag so the entire screen is a clickable link

    <div id="homepage-wrapper">
      <div id="header-wrapper">
        <Link id="link" to="/index">
          <div className="interviews">
            <img id="BH" src={BH} alt="Interviews" />
            <div className="interview-text">Interviews</div>
          </div>
        </Link>
        <Link id="link" to="/DeckCascade">
          <div className="tim-snow">
            <img id="Tim-Snow" src={TimSnow} alt="Tim Snow" />
            <div className="tim-snow-text">Tim Snow Photography</div>
          </div>
        </Link>
        <div className="about">
          <img id="BHW" src={BHW} alt="BHW Image" />
          <div className="about-text">About Page</div>
        </div>
      </div>

      <p className="info">242 Main Interactive</p>
      <Link id="link" to="/HorizontalCarousel">
        <div id="parallax-wrapper-bottom">
          <div className="parallax-footer"></div>
          <div className="posters-text">242 Main Posters</div>
        </div>
      </Link>
    </div>
  );
}

export default Homepage;
