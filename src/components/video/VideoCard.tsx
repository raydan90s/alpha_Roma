import React from "react";
import { VideoItem } from "../../interface/videoProps";

interface Props {
  video: VideoItem;
  onClick: (video: VideoItem) => void;
  isPlaying: boolean;
  isMain: boolean;
}

const VideoCard: React.FC<Props> = ({ video, onClick, isPlaying, isMain }) => {
  return (
    <div
      className={`cursor-pointer w-[700.222px] h-[350.906px] hover:scale-105 transform transition duration-300 ${
        isMain ? "scale-110 z-10" : "scale-95"
      }`} // Usamos el tamaño exacto y solo escalamos el video principal
      onClick={() => onClick(video)}
    >
      {isPlaying ? (
        <video
          controls
          autoPlay
          className="w-full h-full object-cover rounded-lg shadow-md"
        >
          <source src={video.embedUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={video.thumbnailUrl}
          alt="Video Thumbnail"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      )}
    </div>
  );
};

export default VideoCard;
