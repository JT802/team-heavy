import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import ReactPlayer from "react-player";
import ReactAudioPlayer from "react-audio-player";
import screenfull from "screenfull";
import Modal from "react-modal";
import "./Brentcarousel.css";
export default function Slide({ imageSrc, videoSrc, textSrc, interviewSrc }) {
  //save video ref to play video onclick
  const videoref = useRef();
  const audioref = useRef();
  const [playState, setplayState] = useState(false);
  const [audioPlayState, setAudioPlayState] = useState(false);
  const fullScreenHandler = (evt) => {
    if (!screenfull.isFullscreen) {
      setplayState(false);
      screenfull.off("change", fullScreenHandler);
    }
  };
  return (
    <div>
      <div className="smallerImg">
      <img src={imageSrc}  />
      </div>
      <div className="legend">
        <button 
        className="buttonSmall"
          onClick={() => {
            //play video and then put it fullscreen and set play state to be true
            setplayState(true);
            screenfull.request(ReactDOM.findDOMNode(videoref.current));
            screenfull.on("change", fullScreenHandler);
          }}
        >
          Watch Interview clip
        </button>
        <button
        className="buttonSmall"
          onClick={() => {
            //play video and then put it fullscreen and set play state to be true
            setAudioPlayState(true);
          }}
        >
          Listen to Full Interview with transcript
        </button>
        <div className={playState ? "" : "is-hidden"}>
          <ReactPlayer
            playing={playState}
            controls
            ref={videoref}
            url={videoSrc}
          />
        </div>
        <Modal isOpen={audioPlayState}>
          <ReactAudioPlayer
            playing={audioPlayState}
            controls
            ref={audioref}
            src={interviewSrc}
          />
          <div className="pdf-wrapper">
            <iframe src={textSrc} width="100%" height="100%"></iframe>
          </div>
        </Modal>
      </div>
    </div>
  );
}
