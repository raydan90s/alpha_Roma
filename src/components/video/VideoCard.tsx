import React from "react";
import { VideoItem } from "../../interface/videoProps";

interface Props {
  video: VideoItem;
  onClick: () => void;
  isPlaying: boolean;
  isMain: boolean;
}

const VideoCard: React.FC<Props> = ({ video, onClick, isPlaying, isMain }) => {
  return (
    <div
      className={`relative cursor-pointer aspect-video w-full rounded-lg md:rounded-2xl overflow-hidden transition-all duration-300 shadow-md ${
        isMain ? "ring-2 md:ring-4 ring-hover z-10" : ""
      }`}
      onClick={onClick}
    >
      {isPlaying ? (
        <video 
          controls 
          autoPlay 
          className="w-full h-full object-cover"
          playsInline
          muted
          loop
          preload="none"
        >
          <source src={video.embedUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <>
          <img
            src={video.thumbnailUrl}
            alt="Video Thumbnail"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-12 md:w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-5.197-3.028A1 1 0 008 9v6a1 1 0 001.555.832l5.197-3.028a1 1 0 000-1.664z"
              />
            </svg>
          </div>
        </>
      )}
      
      {/* Removed title hover effect since there's no title property */}
    </div>
  );
};

export default VideoCard;