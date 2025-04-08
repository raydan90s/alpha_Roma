import React, { useState } from "react";
import { VideoItem } from "../../interface/videoProps";
import VideoCard from "./VideoCard";

interface VideoGalleryProps {
  videos: VideoItem[];
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videos }) => {
  const [playingVideo, setPlayingVideo] = useState<VideoItem | null>(null);

  const handleVideoClick = (video: VideoItem) => {
    // Alternar el video en reproducción
    if (playingVideo?.embedUrl === video.embedUrl) {
      setPlayingVideo(null); // Detener video si ya está reproduciéndose
    } else {
      setPlayingVideo(video); // Reproducir el video seleccionado
    }
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-center gap-6">
        {videos.map((video, idx) => (
          <div key={idx}>
            {/* Pasar la función de clic y el estado de reproducción al VideoCard */}
            <VideoCard
              video={video}
              onClick={handleVideoClick}
              isPlaying={playingVideo?.embedUrl === video.embedUrl} // Determina si el video está en reproducción
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
