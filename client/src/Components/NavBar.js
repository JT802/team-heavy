import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        // -- Some of these paths are temporary until other components are updated. -- //
        <nav className="navigation">
            <Link className="navText" to="/">Go Home</Link>
            <Link className="navText" to="/CarouselComponents/DeckCascade">Photos by Tim Snow</Link>
            {/*<Link className="navText" to="/Components/About">About 242 Main</Link>*/}
            {/* The "About" component doesn't exist yet. Waiting on Jim. */}
            <Link className="navText" to="/BrentCarousel/index">Interviews</Link>
            <Link className="navText" to="/CarouselComponents/HorizontalCarousel">Concert Posters</Link>

        </nav>
    )
}

export default NavBar
