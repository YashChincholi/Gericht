import React, { useState, useRef } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

import "./Intro.css";

const Intro = () => {
  const videoRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handelVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <div
      className="app__video"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <video
        src={meal}
        ref={videoRef}
        type="video/mp4"
        controls={false}
        muted
        loop
      />
      <div
        className={`app__video-overlay flex__center ${
          playVideo ? "app__video-overlay_play" : ""
        }`}
      >
        <div
          className={`app__video-overlay_circle flex__center ${
            !isHovering ? "hide-icons" : ""
          }`}
          onClick={handelVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
