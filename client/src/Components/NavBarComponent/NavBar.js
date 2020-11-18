import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

function NavBar() {
    return (
        // -- Some of these paths are temporary until other components are updated. -- //
        // -- It's simpler to make this a persistent dropdown menu instead of a horizontal bar. -- //
        <nav className="navigation" id="dropdown">
            <span id="learnMore">Learn More</span>
            {/*Using Link to add dropdwon menu items to components  */}
            <div className="menu-content">
                <li><Link className="navText" to="/">Go Home</Link></li>
                <li><Link className="navText" to="/Components/AboutComponent/About">About 242 Main</Link></li>
                <li><Link className="navText" to="/Components/CarouselComponents/DeckCascade">Concert Photos by Tim Snow</Link></li>
                <li><Link className="navText" to="/Components/CarouselComponents/HorizontalCarousel">Concert Posters</Link></li>
                <li><Link className="navText" to="/Components/BrentCarousel/index">Interviews</Link></li>
                {/* The "About" text will change when Jim sends us the specifics. */}
            </div>
        </nav>
    )
}

export default NavBar
