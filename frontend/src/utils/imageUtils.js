
export function preloadImage(setImage, setLoaded, largeImage) {
    const img = new Image();
    img.src = largeImage;
    img.onload = () => {
      setImage(largeImage);
      setLoaded(true);
    };
  }