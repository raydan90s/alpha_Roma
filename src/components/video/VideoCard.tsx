import React from 'react';
import './VideoCard.css'; // Create this CSS file


export interface VideoItem {

  title: string;
  thumbnailUrl: string;
  embedUrl: string; // The URL to embed the video player (e.g., iframe src)

} 

interface VideoCardProps {
  video: VideoItem;
  onClick: (video: VideoItem) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onClick }) => {
  return (
    <div
      data-testid="splashScreen"
      className="video-card"
      title={`Play ${video.title}`}
      aria-label={`Play ${video.title}`}
      role="button"
      tabIndex={0}
      style={{ backgroundColor: 'black' }}
      onClick={() => onClick(video)}
    >
      <div
        className="thumbnail-container"
        style={{ backgroundImage: `url(${video.thumbnailUrl})` }}
      ></div>
      <div role="presentation">
        <div data-testid="splashPlayButton" className="play-button">
          <div className="play-button-background"></div>
          <svg
            viewBox="0 0 32 32"
            className="play-icon"
            fill="#fff"
            focusable="false"
            role="img"
            aria-label="Play Video"
          >
            <title>Play Video</title>
            <path
              id="play"
              data-testid="play"
              d="M6.484 4.094l20.75 11.225c0.226 0.121 0.41 0.427 0.41 0.683s-0.184 0.563-0.41 0.683l-20.75 11.222c-0.095 0.051-0.26 0.093-0.367 0.093-0.427 0-0.774-0.346-0.774-0.773v-22.451c0-0.428 0.347-0.774 0.774-0.774 0.108 0 0.272 0.042 0.367 0.093z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;