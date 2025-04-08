import React from "react";
import { VideoItem } from "../../interface/videoProps";

interface Props {
  video: VideoItem;
  onClick: (video: VideoItem) => void;
  isPlaying: boolean; // Recibir si el video está en reproducción
}

const VideoCard: React.FC<Props> = ({ video, onClick, isPlaying }) => {
  return (
    <div
      className="cursor-pointer w-64 hover:scale-105 transform transition duration-300"
      onClick={() => onClick(video)} // Llamar la función onClick
    >
      {isPlaying ? (
        <video
          controls
          autoPlay
          className="w-full h-40 object-cover rounded-lg shadow-md"
        >
          <source src={video.embedUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={video.thumbnailUrl}
          alt="Video Thumbnail"
          className="w-full h-40 object-cover rounded-lg shadow-md"
        />
      )}
    </div>
  );
};

export default VideoCard;
