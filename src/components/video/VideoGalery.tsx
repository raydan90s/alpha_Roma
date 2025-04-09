import React, { useState, useEffect, useRef } from "react";
import { VideoItem } from "../../interface/videoProps";
import VideoCard from "./VideoCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface VideoGalleryProps {
  videos: VideoItem[];
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

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
    if (isMobile) {
      return [currentIndex];
    }
    
    const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
    const nextIndex = (currentIndex + 1) % videos.length;
    return [prevIndex, currentIndex, nextIndex];
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    // If swiped more than 50px, change video
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNextClick(); // Swiped left
      } else {
        handlePrevClick(); // Swiped right
      }
    }
  };

  const visibleIndices = getIndices();

  return (
    <div 
      className="bg-secondary py-4 md:py-8 flex flex-col justify-center items-center"
      ref={galleryRef}
    >
      <div 
        className="relative w-full flex items-center justify-center"
        onTouchStart={handleTouchStart} 
        onTouchEnd={handleTouchEnd}
      >
      {/* Navigation arrows - hidden on mobile */}
{!isMobile && (
  <button
    onClick={handlePrevClick}
    className="absolute left-2 bg-primary md:left-4 top-1/2 transform -translate-y-1/2 p-2 md:p-3 rounded-full shadow-lg z-20 bg-primary-500 text-white transition-colors duration-200 hover:bg-acent"
    aria-label="Previous video"
  >
    <ArrowLeft color="#0a1626" className="hover:text-bold" />
  </button>
)}


        {/* Videos container */}
        <div className="flex gap-1 md:gap-4 justify-center items-center w-full px-2 md:px-0">
          {visibleIndices.map((index) => (
            <div
              key={index}
              className={`transition-transform duration-300 ${
                isMobile 
                  ? "w-full" 
                  : index === currentIndex 
                    ? "w-3/5 md:w-2/5 z-10" 
                    : "w-1/5 md:w-1/4 opacity-70"
              }`}
            >
              <VideoCard
                video={videos[index]}
                onClick={() => handleVideoClick(index)}
                isPlaying={index === currentIndex}
                isMain={index === currentIndex}
              />
            </div>
          ))}
        </div>

        {!isMobile && (
          <button
            onClick={handleNextClick}
            className="absolute right-2 bg-primary md:right-4 top-1/2 transform -translate-y-1/2 p-2 md:p-3 rounded-full shadow-lg z-20 hover:bg-acent"
            aria-label="Next video"
          >
            <ArrowRight color="#0a1626"/>
          </button>
        )}
      </div>
      
      {/* Video indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "w-4 bg-primary" : "w-2 bg-gray-300"
            }`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Mobile instruction text */}
      {isMobile && (
        <p className="text-sm text-gray-500 mt-2 text-center">
          Desliza para ver más videos
        </p>
      )}
    </div>
  );
};

export default VideoGallery;