"use client";
import React from "react";
import ReactPlayer from "react-player";



const CustomVideoPlayer: React.FC = () => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url="https://player.vimeo.com/video/40112127?h=bcac6db117"
        className="react-player"
        playing={true}
        width="100%"
        height="500px"
        controls={true} // Enable default video controls
      />
     
    </div>
  );
};

export default CustomVideoPlayer;
