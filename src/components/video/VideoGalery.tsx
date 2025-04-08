import React, { useState } from "react";
import { VideoItem } from "../../interface/videoProps";
import VideoCard from "./VideoCard";

interface VideoGalleryProps {
  videos: VideoItem[];
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videos }) => {
  const [playingVideo, setPlayingVideo] = useState<VideoItem | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoClick = (video: VideoItem) => {
    if (playingVideo?.embedUrl === video.embedUrl) {
      setPlayingVideo(null); // Detener video si ya está reproduciéndose
    } else {
      setPlayingVideo(video); // Reproducir el video seleccionado
    }
  };

  const handlePrevClick = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="p-4 flex justify-center items-center gap-6">
      {/* Contenedor de las flechas y videos */}
      <div className="flex items-center relative w-full">
        {/* Flecha anterior */}
        <button
          onClick={handlePrevClick}
          className="p-4 bg-gray-500 text-white rounded-full hover:bg-gray-700 focus:outline-none absolute left-0 z-20"
        >
          &lt;
        </button>

        {/* Contenedor de los videos */}
        <div className="flex items-center gap-8 justify-center w-full transition-all duration-500 ease-in-out">
          {videos.map((video, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 transform transition-all duration-300 ease-in-out ${
                currentVideoIndex === idx
                  ? "mx-10 scale-110" // Video principal más grande
                  : "mx-2 scale-95" // Videos no principales más pequeños
              }`}
            >
              <VideoCard
                video={video}
                onClick={handleVideoClick}
                isPlaying={playingVideo?.embedUrl === video.embedUrl}
                isMain={currentVideoIndex === idx} // Este video será el principal
              />
            </div>
          ))}
        </div>

        {/* Flecha siguiente */}
        <button
          onClick={handleNextClick}
          className="p-4 bg-gray-500 text-white rounded-full hover:bg-gray-700 focus:outline-none absolute right-0 z-20"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default VideoGallery;
