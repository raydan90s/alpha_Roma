import React from 'react';
import { useNavigate } from 'react-router-dom';
import { VideoHeroProps } from '../../interface/HerovideoProps';
import { generarEnlaceWhatsApp, mensajesWhatsApp } from '../../messages/messages';

const VideoHero: React.FC<VideoHeroProps> = ({
  title,
  subtitle,
  videoUrl,
  primaryButtonText,
  secondaryButtonText,
  secondaryButtonLink,
}) => {
  const navigate = useNavigate();

  const handleSecondaryButtonClick = () => {
    if (secondaryButtonLink) {
      navigate(secondaryButtonLink);
    }
  };

  return (
    <div className="relative bg-black overflow-hidden h-screen">
      <div className="absolute inset-0">
        <video autoPlay loop muted className="min-w-full min-h-full object-cover">
          <source src={videoUrl} type="video/mp4" /> {/* Added type attribute */}
        </video>
        <div className="absolute inset-0 bg-black opacity-50" aria-hidden="true" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-white text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 text-2xl font-bold text-indigo-200 mt-4 sm:mt-5 lg:mt-6">
          {subtitle}
        </p>

        {(primaryButtonText && mensajesWhatsApp?.general) || (secondaryButtonText && secondaryButtonLink) ? (
          <div className="mt-8 flex gap-4">
            {primaryButtonText && mensajesWhatsApp?.general && (
              <a
                href={generarEnlaceWhatsApp(mensajesWhatsApp.general)}
                className="inline-block px-6 py-3 text-secondary text-lg font-bold bg-primary hover:bg-acent rounded-lg shadow-md transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {primaryButtonText}
              </a>
            )}
            {secondaryButtonText && secondaryButtonLink && (
              <button
                onClick={handleSecondaryButtonClick}
                className="inline-block px-6 py-3 text-primary text-lg font-bold bg-white hover:bg-hover rounded-lg shadow-md transition duration-300 cursor-pointer" // Added cursor-pointer
              >
                {secondaryButtonText}
              </button>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default VideoHero;