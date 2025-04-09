import React from 'react';
import { VideoHeroProps } from '../../interface/HerovideoProps';

const VideoHero: React.FC<VideoHeroProps> = ({
  title,
  subtitle,
  videoUrl,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) => {
  return (
    <div className="relative bg-black overflow-hidden h-screen">
      <div className="absolute inset-0">
        <video autoPlay loop muted className="min-w-full min-h-full object-cover">
          <source src={videoUrl} />
        </video>
        <div className="absolute inset-0 bg-black opacity-50" aria-hidden="true" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-white text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          {subtitle}
        </p>

        {(primaryButtonText && primaryButtonLink) || (secondaryButtonText && secondaryButtonLink) ? (
          <div className="mt-8 flex gap-4">
            {primaryButtonText && primaryButtonLink && (
              <a
                href={primaryButtonLink}
                className="inline-block px-6 py-3 text-secondary text-lg font-bold bg-primary hover:bg-acent rounded-lg shadow-md transition duration-300"
              >
                {primaryButtonText
                
                }
              </a>
            )}
            {secondaryButtonText && secondaryButtonLink && (
              <a
                href={secondaryButtonLink}
                className="inline-block px-6 py-3 text-primary text-lg font-bold bg-white hover:bg-hover rounded-lg shadow-md transition duration-300"
              >
                {secondaryButtonText}
              </a>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default VideoHero;
