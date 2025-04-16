// components/PreloaderWrapper.tsx
import { useEffect, useState } from "react";
import Loader from "./Loader";

interface PreloaderWrapperProps {
  imageUrls: string[];
  children: React.ReactNode;
}

const preloadImages = (imageUrls: string[]): Promise<void> => {
  return Promise.all(
    imageUrls.map(
      (src) =>
        new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = () => reject();
        })
    )
  ).then(() => undefined);
};

const PreloaderWrapper = ({ imageUrls, children }: PreloaderWrapperProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    preloadImages(imageUrls)
      .then(() => setLoading(false))
      .catch(() => setLoading(false)); // continuar igual si hay errores
  }, [imageUrls]);

  if (loading) return <Loader />;
  return <>{children}</>;
};

export default PreloaderWrapper;
