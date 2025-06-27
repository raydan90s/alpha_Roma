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
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Mostrar solo el primer video
  const video = videos[0];

  if (!video) return null;

  return (
    <section
      ref={galleryRef}
      className="bg-secondary py-8 md:py-12 flex flex-col justify-center items-center"
      aria-label="Galería de Videos"
    >
      <div className="relative w-full flex justify-center items-center">
        <div className="w-full px-4 md:px-8 flex justify-center items-center">
          <div
            className={`
              transition-all duration-300
              ${isMobile ? "w-full max-w-md" : "w-full max-w-2xl lg:max-w-3xl"}
            `}
          >
            <VideoCard
              video={video}
              onClick={() => {}}
              isPlaying={true}
              isMain={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;  