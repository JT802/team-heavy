import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css"


export default function Home() {
    return(
        <div id="homePage">
        <Link id= "Home" to = {"/Home"}> Home </Link>
        <Link to = {"/horizontalCarousel"}>Carousel </Link>
        <Link to ={"/SecondCarousel"}>Carousel Two</Link>
        </div>
    )
}