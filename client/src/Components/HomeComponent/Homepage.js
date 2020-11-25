//imports
import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
//import interview headshot gif
import Gif from "../../images/gif2.gif";
//import tim snow photograph for image link
import TimSnow from "../../images/Tim-Snow.jpg";
//import 242 main door image for image link
import Door from "../../images/242Door2.jpg";

//function for rendering the landing page
function Homepage() {
  return (
    
    //div that wraps the entire homepage
    <div id="homepage-wrapper">
      {/* wrapper for the top row of image links */}
      <div id="header-wrapper">
        {/* link the interview headshot gif to the interview page */}
        <Link id="link" to="/BrentCarousel">
          <div className="interviews">
            {/* bring in interview headshot gif */}
            <img id="BH" src={Gif} alt="Interviews" />
            {/* div for the text to be displayed on top of interview headshots gif */}
            <div className="interview-text">Interviews</div>
          </div>
        </Link>
        {/* link the tim snow photograph to his page of photographs */}
        <Link id="link" to="/DeckCascade">
          <div className="tim-snow">
            {/* bring in tim snow photograph */}
            <img id="Tim-Snow" src={TimSnow} alt="Tim Snow" />
            {/* div for the text to be displayed on top of tim snow image */}
            <div className="tim-snow-text">"Final" Show Photos by Tim Snow</div>
          </div>
        </Link>
        {/* link 242 main door picture to the about 242 main page */}
        <Link id="link" to="/About">
          <div className="about">
            {/* bring in 242 main door image */}
            <img id="BHW" src={Door} alt="242 Main Door" />
            {/* div for text to be displayed on top of 242 mian door image */}
            <div className="about-text">About 242 Main</div>
          </div>
        </Link>
      </div>
      {/* main page heading, positioned in the center of page, styled to flash gold */}
      <p className="info">242 Main Interactive</p>
      {/* link the scrolling posters image to the posters of 242 main page */}
      <Link id="link" to="/HorizontalCarousel">
        {/* wrapper for the scrolling poster image */}
        <div id="parallax-wrapper">
          <div className="parallax-footer"></div>
        </div>
      </Link>
    </div>
  );
}

export default Homepage;
