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
      <img src="https://omeka.bigheavyworld.com/files/original/46a6604ded5d36dc6937b81230198543.jpg" />
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
            src="https://omeka.bigheavyworld.com/files/original/4b824ef80c2daac9aead386388522906.mp4"
          ></video>
        </p>
      </div>
      <div>
      <img src="https://omeka.bigheavyworld.com/files/original/4c9a455e1a55f5670ebb788d31b11bac.jpg" />
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
            src="https://omeka.bigheavyworld.com/files/original/505278550becb7d098a5596b9423d7e3.jpg"
          ></video>
        </p>
      </div>
      <div>
      <img src="https://omeka.bigheavyworld.com/files/original/4c9a455e1a55f5670ebb788d31b11bac.jpg" />
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
            src="https://omeka.bigheavyworld.com/files/original/e05d9749647ddd10ad10cd8090aca0d9.mp4"
          ></video>
        </p>
      </div>
      <div>
      <img src="https://omeka.bigheavyworld.com/files/original/bd03882694b2144534bac1453ab8cb75.jpg" />
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
            src="https://omeka.bigheavyworld.com/files/original/e095068916fe3e5915749c15083ae3c3.mp4"
          ></video>
        </p>
      </div>
      <div>
      <img src="https://omeka.bigheavyworld.com/files/original/92fedfd859e6a1b5bda2f50d60b5f6ec.jpg" />
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
            src="https://omeka.bigheavyworld.com/files/original/83a7755c94af2c9fdbfbd4fff3f6de70.mp4"
          ></video>
        </p>
      </div>
      <div>
      <img src="https://omeka.bigheavyworld.com/files/original/effa30d2c182fe2d67aa638f4499f913.jpg" />
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
            src="https://omeka.bigheavyworld.com/files/original/f41f77100f2ad9394f097ce6db87399a.mp4"
          ></video>
        </p>
      </div>
      <div>
      <img src="https://omeka.bigheavyworld.com/files/original/7ff465074961d37ad52461318b27d389.jpg" />
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
            src="https://omeka.bigheavyworld.com/files/original/e6c95079d7c62fe63dab4cceef44d001.mp4"
          ></video>
        </p>
      </div>
      <div>
      <img src="https://omeka.bigheavyworld.com/files/original/b99e75974aad46272e57f88060138158.jpg" />
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
            src="https://omeka.bigheavyworld.com/files/original/0714da4ad557b6d0660bfab25105e1ff.mp4"
          ></video>
        </p>
      </div>
      <div>
      <img src="https://omeka.bigheavyworld.com/files/original/eaf6963b6e3080109b9e18871ab60fbb.jpg" />
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
            src="https://omeka.bigheavyworld.com/files/original/04d22d1b0f6d48dc973caaddb4f30a9d.mp4"
          ></video>
        </p>
      </div>
      <div>
      <img src="https://omeka.bigheavyworld.com/files/original/ce7264d6190a4f7a7018e51e0a9cbebb.jpg" />
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
            src="https://omeka.bigheavyworld.com/files/original/4864b2c7d216442b38aba275948f95a7.mp4"
          ></video>
        </p>
      </div>
      <div>
      <img src="https://omeka.bigheavyworld.com/files/original/80da9d78e04e52fd27c0e595507562b4.jpg" />
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
            src="https://omeka.bigheavyworld.com/files/original/4cf8ae94c9bf41980bdc2e5634764a06.mp4"
          ></video>
        </p>
      </div>
      <div>
      <img src="https://omeka.bigheavyworld.com/files/original/ca7e8bfb16506af2df83b01adf0978fc.jpg" />
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
            src="https://omeka.bigheavyworld.com/files/original/17f5567baad86578451a08c5ae8425ab.mp4"
          ></video>
        </p>
      </div>
      <div>
      <img src="https://omeka.bigheavyworld.com/files/original/a0c5e976d864bbcef94ef48c288bdcca.jpg" />
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
            src="https://omeka.bigheavyworld.com/files/original/6863c6be4a8d490f31a6e8236275de8c.mp4"
          ></video>
        </p>
      </div>
      <div>
      <img src="https://omeka.bigheavyworld.com/files/original/1079de508dbb60de0e1235c2b15a2ebb.jpg" />
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
            src="https://omeka.bigheavyworld.com/files/original/0815f9766ca188afd817961a6d00d557.mp4"
          ></video>
        </p>
      </div>
      <div>
      <img src="https://omeka.bigheavyworld.com/files/original/45076b2720d064647cf2d901e06230b5.jpg" />
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
            src="https://omeka.bigheavyworld.com/files/original/9e04b0eb15928388d1d648acd7cb143f.mp4"
          ></video>
        </p>
      </div>
      <div>
      <img src="https://omeka.bigheavyworld.com/files/original/b411d3d7cdd491edc70c098f7fd64d61.jpg" />
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
            src="https://omeka.bigheavyworld.com/files/original/7e0aeca7c2ec049fc13bc3b0f262bf38.mp4"
          ></video>
        </p>
      </div>
      <div>
      <img src="https://omeka.bigheavyworld.com/files/original/4c9a455e1a55f5670ebb788d31b11bac.jpg" />
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
            src="https://omeka.bigheavyworld.com/files/original/090062348a03c82b0ea5780dcb7091c0.mp4"
          ></video>
        </p>
      </div>
    </Carousel>
  );
}
