import React, { useState, useEffect, useRef } from "react";
import { VideoItem } from "../../interface/videoProps";
import VideoCard from "./VideoCard";

interface VideoGalleryProps {
  videos: VideoItem[];
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videos }) => {
  const [isMobile, setIsMobile] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

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

  // Mostrar solo el primer video
  const video = videos[0];

  if (!video) return null;

  return (
    <div
      className="bg-secondary py-8 md:py-12 flex flex-col justify-center items-center"
      ref={galleryRef}
    >
      <div className="relative w-full flex justify-center items-center">
        {/* Video container - centered and larger */}
        <div className="flex justify-center items-center w-full px-4 md:px-8">
          <div className={`
            transition-all duration-300 
            ${isMobile 
              ? "w-full max-w-md" 
              : "w-full max-w-2xl lg:max-w-3xl"
            }
          `}>
            <VideoCard
              video={video}
              onClick={() => {}} // No necesita función onClick ya que es solo un video
              isPlaying={true} // Siempre está "activo"
              isMain={true} // Siempre es el principal
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;