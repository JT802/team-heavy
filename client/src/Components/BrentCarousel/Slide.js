import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import ReactPlayer from "react-player";
import ReactAudioPlayer from "react-audio-player";
import screenfull from "screenfull";
import Modal from "react-modal";
import "./Brentcarousel.css";
import MediaQuery from "react-responsive";
export default function Slide({ imageSrc, videoSrc, textSrc, interviewSrc }) {
  //save video ref to play video onclick
  const videoref = useRef();
  const audioref = useRef();
  //tracking the video and audio playstates
  const [playState, setplayState] = useState(false);
  const [audioPlayState, setAudioPlayState] = useState(false);
  //using screenfull.js when we exit fullscreen mode stop video playback
  const fullScreenHandler = (evt) => {
    if (!screenfull.isFullscreen) {
      setplayState(false);
      screenfull.off("change", fullScreenHandler);
    }
  };
  return (
    <div>
      <div className="smallerImg">
        <img src={imageSrc} alt="interview subject" />
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
          Watch Interview Clip
        </button>
        <button
          className="buttonSmall"
          onClick={() => {
            //play audio
            setAudioPlayState(true);
          }}
        >
          <MediaQuery maxDeviceWidth={600}>Listen To Full Interview</MediaQuery>
          <MediaQuery minDeviceWidth={600}>
            Listen To Full Interview With Transcript
          </MediaQuery>
        </button>
        {/* only show react player when video is playing */}
        <div className={playState ? "" : "is-hidden"}>
          <ReactPlayer
            playing={playState}
            controls
            ref={videoref}
            url={videoSrc}
          />
        </div>
        {/* only show modal when audio is playing */}
        <Modal isOpen={audioPlayState}>
          <ReactAudioPlayer
            playing={audioPlayState}
            controls
            ref={audioref}
            src={interviewSrc}
          />
          <div className="pdf-wrapper">
            {/* show audio transcript in iframe because transcript is a PDF file */}
            <iframe src={textSrc} width="100%" height="100%"></iframe>
          </div>
        </Modal>
      </div>
    </div>
  );
}
