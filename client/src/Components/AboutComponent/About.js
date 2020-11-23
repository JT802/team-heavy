import React from "react";
import "./About.css";
import NavBar from "../NavBarComponent/NavBar";

function About() {
  return (
    <div>
      <NavBar />
      <div className="about-page">
        <p id="about-title"> About 242 Main</p>
        {/* The text below is sourced from the BHW website */}
        <p>
          For more than 30 years, 242 Main was a gathering spot for the youth of
          northwestern Vermont. Funded by the City of Burlington (begun during
          the Bernie Sanders Mayoral administration), 242 provided a haven for
          young misfits and fans of underground music. It was part music venue,
          part musician proving ground, and part teen drop-in center. With
          programming driven by teens, it became America’s longest-running
          all-ages punk rock venue and a sanctuary anchored in the hearts of
          thousands. No Stage Diving: The Story of 242 Main celebrates the
          history and legacy of this historic venue, and, in the words of those
          whose lives were touched by it, explores what the space meant to the
          community it served.
        </p>
        {/* Attribution not needed */}
      </div>
    </div>
  );
}

export default About;
