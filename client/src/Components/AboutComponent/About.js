import React from 'react';
import { Link } from 'react-router-dom'
import "./About.css";

function About() {
    return (

        <div className="about-page">
            <nav className="navigation">
                <Link className="navText" to="/">Go Home</Link>
                <Link className="navText" to="/Components/CarouselComponents/DeckCascade">Concert Photos by Tim Snow</Link>
                {/* The "About" text will change when Jim sends us the specifics. */}
                <Link className="navText" to="/Components/BrentCarousel/index">Interviews</Link>
                <Link className="navText" to="/Components/CarouselComponents/HorizontalCarousel">Concert Posters</Link>
            </nav>
            {/* The text below is sourced from the BHW website until we get specifics. */}
            <p>For more than 30 years, 242 Main was a gathering spot for the youth of northwestern Vermont. Funded by the City of Burlington (begun during the Bernie Sanders Mayoral administration), 242 provided a haven for young misfits and fans of underground music. It was part music venue, part musician proving ground, and part teen drop-in center. With programming driven by teens, it became America’s longest-running all-ages punk rock venue and a sanctuary anchored in the hearts of thousands. No Stage Diving: The Story of 242 Main celebrates the history and legacy of this historic venue, and, in the words of those whose lives were touched by it, explores what the space meant to the community it served.</p>
            {/* The webpage source is not formatted as a regular link b/c we don't know if Jim lets the kiosk itself actually allow browser access for the visitors. */}
            <p>Source: bigheavyworld.com/no-stage-diving-the-242-main-documentary-film</p>
        </div>
    )
}

export default About
