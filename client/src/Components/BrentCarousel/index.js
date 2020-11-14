import React, { useRef, useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Brentcarousel.css";
export default function BrentCarousel() {
    //save video ref to play video onclick
  const videoref = useRef();
  const [playState, setplayState] = useState(false);
  return (
    <Carousel>
      <div>
        <img src="https://omeka.bigheavyworld.com/files/original/baf306eeec77522da3fddba54a6764e7.jpg" />
        <p className="legend">
          <button
            onClick={() => {
                //play video and then put it fullscreen and set play state to be true
              videoref.current.play();
              videoref.current.requestFullscreen();
              setplayState(true);
            }}
          >
            Watch Interview
          </button>
          <button>Listen to Full Interview</button>
          <video
            className={playState ? "" : "video"}
            ref={videoref}
            controls
            src="https://omeka.bigheavyworld.com/files/original/27b404d7dd692585a0d0e63bd8580e0c.mp4"
          ></video>
        </p>
      </div>
      <div>
        <img src="https://omeka.bigheavyworld.com/files/original/772d29efd643bcea35e673bc9adfba47.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://omeka.bigheavyworld.com/files/original/772d29efd643bcea35e673bc9adfba47.jpg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}
