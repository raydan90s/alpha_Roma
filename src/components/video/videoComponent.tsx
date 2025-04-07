import React, { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';
import './VideoComponent.css';
import { VideoComponentProps } from '../../interface/videoProps';

const VideoComponent: React.FC<VideoComponentProps> = ({ videos }) => {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video && isPlaying && selectedVideoUrl) {
      video.src = selectedVideoUrl;
      video.play().catch(error => console.error("Error playing video:", error));
      video.controls = true;
    } else if (video) {
      video.pause();
      video.currentTime = 0;
      video.controls = false;
    }
  }, [isPlaying, selectedVideoUrl]);

  const handleCardClick = (url: string) => {
    setSelectedVideoUrl(url);
    setIsPlaying(true);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video, index) => (
        <div
          key={index}
          className="relative rounded-lg overflow-hidden shadow-md cursor-pointer group video-card"
          onClick={() => handleCardClick(video.url)}
        >
          {!selectedVideoUrl || selectedVideoUrl !== video.url ? (
            <>
              <img
                src={video.thumbnailGif}
                alt={`Video ${index + 1} Thumbnail`}
                className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-75"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play className="h-6 w-6" />
              </div>
            </>
          ) : (
            <video
              ref={videoRef}
              className="object-cover w-full h-full absolute top-0 left-0 z-0"
              loop={false}
              muted={false}
              playsInline
              controls={true}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default VideoComponent;