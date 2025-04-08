import React, { useState } from "react";
import { VideoItem } from "../../interface/videoProps";
import VideoCard from "./VideoCard";

interface VideoGalleryProps {
  videos: VideoItem[];
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleVideoClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    const newIndex = (currentIndex - 1 + videos.length) % videos.length;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (currentIndex + 1) % videos.length;
    setCurrentIndex(newIndex);
  };

  const getIndices = () => {
    const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
    const nextIndex = (currentIndex + 1) % videos.length;
    return [prevIndex, currentIndex, nextIndex];
  };

  const [prevIndex, mainIndex, nextIndex] = getIndices();

  return (
    <div className="bg-[#f4f4f4] py-8 min-h-screen flex justify-center items-center">
      <div className="relative max-w-7xl w-full px-6 flex items-center justify-center">
        {/* Flecha izquierda */}
        <button
          onClick={handlePrevClick}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-20 hover:bg-gray-200"
        >
          &#8592;
        </button>

        {/* Videos visibles */}
        <div className="flex gap-6 justify-center items-center w-full max-w-[2100px]">
          {[prevIndex, mainIndex, nextIndex].map((index, pos) => (
            <div
              key={index}
              className={`transition-transform duration-300 ${index === mainIndex ? "scale-125 z-10" : "scale-90"
                } w-[900px]`} // Aumenté el tamaño aquí
            >
              <VideoCard
                video={videos[index]}
                onClick={() => handleVideoClick(index)}
                isPlaying={index === mainIndex}
                isMain={index === mainIndex}
              />
            </div>
          ))}
        </div>

        {/* Flecha derecha */}
        <button
          onClick={handleNextClick}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-20 hover:bg-gray-200"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default VideoGallery;
