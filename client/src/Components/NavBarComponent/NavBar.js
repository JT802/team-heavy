import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcMenu } from "react-icons/fc";
import "./NavBar.css";

function NavBar() {
    const [dropDown, setDropDown] = useState("none")

    function dropdownHandler() {
        if (dropDown === "none") {
            setDropDown(true)
        } else {
            setDropDown("none")
        }
    }

    return (
        // -- It's simpler to make this a persistent dropdown menu instead of a horizontal bar. -- //
        <nav className="navigation" id="dropdown">
            <span onClick={dropdownHandler} ><FcMenu id="burger" /></span>
            {/*Using Link to add dropdwon menu items to components  */}
            <div className="menu-content" style={{ display: dropDown }}>
                <li onClick={dropdownHandler}><Link className="navText" to="/">Go Home</Link></li>
                <li onClick={dropdownHandler}><Link className="navText" to="/About">About 242 Main</Link></li>
                <li onClick={dropdownHandler}><Link className="navText" to="/DeckCascade">Concert Photos by Tim Snow</Link></li>
                <li onClick={dropdownHandler}><Link className="navText" to="/HorizontalCarousel">Concert Posters</Link></li>
                <li onClick={dropdownHandler}><Link className="navText" to="/BrentCarousel">Interviews</Link></li>
                {/* The "About" text will change when Jim sends us the specifics. */}
            </div>
        </nav>
    )
}

export default NavBar
