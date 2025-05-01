import React, { useEffect, useState, useRef } from "react";
import Loader from "./Loader";

interface PreloaderWrapperProps {
  imageUrls: string[]; // Puede contener también URLs de video
  children: React.ReactNode;
  delayMs?: number; // Delay opcional
}

const preloadImages = (imageUrls: string[]): Promise<void> => {
  return Promise.all(
    imageUrls.map((src) => {
      const isVideo = /\.(mp4|webm|ogg)$/i.test(src);

      return new Promise<void>((resolve, reject) => {
        if (isVideo) {
          const video = document.createElement("video");
          video.src = src;
          video.preload = "auto";
          // Important: Add these attributes for better iOS compatibility
          video.setAttribute("playsinline", "true"); // Para evitar pantalla completa en iOS
          video.muted = true; // Algunos navegadores requieren que el video esté silenciado para la precarga automática
          video.onloadeddata = () => {
            // console.log(`Video loaded: ${src}`); // Para debug
            resolve();
          };
          video.onerror = (err) => {
            console.error(`Error loading video: ${src}`, err);
            reject();
          };
        } else {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            // console.log(`Image loaded: ${src}`);  // Para debug
            resolve();
          };
          img.onerror = (err) => {
             console.error(`Error loading image: ${src}`, err);
            reject();
          };
        }
      });
    })
  ).then(() => undefined);
};

const PreloaderWrapper = ({ imageUrls, children, delayMs = 500 }: PreloaderWrapperProps) => {
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(true); // Para evitar establecer el estado en un componente desmontado

  useEffect(() => {
    isMounted.current = true;

    preloadImages(imageUrls)
      .then(() => {
        if (isMounted.current) {
          setTimeout(() => {
            setLoading(false);
          }, delayMs);
        }
      })
      .catch((error) => {
        console.error("Preload failed", error);
        if (isMounted.current) {
          setTimeout(() => {
            setLoading(false);
          }, delayMs); // Asegúrate de que la carga finalice incluso en caso de error
        }
      });

    return () => {
      isMounted.current = false;
    };
  }, [imageUrls, delayMs]);

  if (loading) return <Loader />;
  return <>{children}</>;
};

export default PreloaderWrapper;
