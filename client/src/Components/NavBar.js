import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        // -- Some of these paths are temporary until other components are updated. -- //
        // -- It may be necessary to hardcode the navigation into each component instead. -- //
        <nav className="navigation">
            <Link className="navText" to="/">Go Home</Link>
            <Link className="navText" to="/Components/CarouselComponents/DeckCascade">Concert Photos by Tim Snow</Link>
            <Link className="navText" to="/Components/AboutComponent/About">About 242 Main</Link>
            {/* The "About" text will change when Jim sends us the specifics. */}
            <Link className="navText" to="/Components/BrentCarousel/index">Interviews</Link>
            <Link className="navText" to="/Components/CarouselComponents/HorizontalCarousel">Concert Posters</Link>

        </nav>
    )
}

export default NavBar
