"use client";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

interface VideoInterface {
  videoUrl?: string;
}

const Video = ({ videoUrl }: VideoInterface) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <>
      {hasWindow && (
        <ReactPlayer
          url={videoUrl}
          className="w-full video_banner"
          controls={false}
          loop
          playing
          playsinline={true}
          muted={true}
        />
      )}
    </>
  );
};
export default Video;
