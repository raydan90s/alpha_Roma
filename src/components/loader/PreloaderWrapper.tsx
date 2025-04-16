// components/PreloaderWrapper.tsx
import { useEffect, useState } from "react";
import Logo from "../../assets/img/novaFenix.png";
import Loader from "./Loader";

interface PreloaderWrapperProps {
  imageUrls: string[]; // puede contener también URLs de video
  children: React.ReactNode;
  delayMs?: number; // delay opcional
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
          video.onloadeddata = () => resolve();
          video.onerror = () => reject();
        } else {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = () => reject();
        }
      });
    })
  ).then(() => undefined);
};

const PreloaderWrapper = ({ imageUrls, children, delayMs = 500 }: PreloaderWrapperProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    preloadImages(imageUrls)
      .then(() => {
        setTimeout(() => setLoading(false), delayMs);
      })
      .catch(() => {
        setTimeout(() => setLoading(false), delayMs);
      });
  }, [imageUrls, delayMs]);

  if (loading) return <Loader />;
  return <>{children}</>;
};

export default PreloaderWrapper;
