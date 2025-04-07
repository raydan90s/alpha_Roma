import React, { useState } from 'react';
import VideoCard from '../video/videoCard';
import './VideoGalery.css'; // Create this CSS file

export interface VideoItem {

    title: string;
    thumbnailUrl: string;
    embedUrl: string; // The URL to embed the video player (e.g., iframe src)
  
} 

interface VideoGalleryProps {
  videos: VideoItem[];
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const handleVideoClick = (video: VideoItem) => {
    setSelectedVideo(video);
  };

  return (
    <div className="video-gallery-container">
      <h2>Be part of the action</h2>
      <p>
        These customer-generated videos perfectly capture what's so great about
        <br className="desktop-break" />
        a secure home.
      </p>

      <div className="video-display">
        {selectedVideo ? (
          <div className="selected-video-player">
            <iframe
              title={selectedVideo.title}
              src={selectedVideo.embedUrl}
              width="640" /* Adjust as needed */
              height="360" /* Adjust as needed */
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <p className="placeholder-text">Click a video to play it here.</p>
        )}
      </div>

      <div className="video-list-wrapper">
        <div className="video-list">
          {videos.map((video) => (
            <VideoCard key={video.title} video={video} onClick={handleVideoClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;