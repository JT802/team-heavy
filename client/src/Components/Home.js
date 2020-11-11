import React from 'react';
import { Link } from "react-router-dom";


export default function Home() {


    return(
        <div id="homePage">
        <Link to = {"/Home"}> Home </Link>
        <Link to = {"/horizontalCarousel"}>Carousel </Link>
        </div>
    )


}