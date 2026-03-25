import { useState, useEffect } from "react";

export function useImagePreload(smallImage, largeImage) {
  const [image, setImage] = useState(smallImage);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = largeImage;

    img.onload = () => {
      setImage(largeImage);
      setLoaded(true);
    };
  }, [largeImage]);

  return { image, loaded };
}