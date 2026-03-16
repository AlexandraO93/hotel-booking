import "./MenuStyles.css";
import breakfastImage from "../assets/breakfast.png";
import breakfastImageSmall from "../assets/breakfast-compressed.png";
import { useState, useEffect } from "react";

export default function Breakfast() {
  const [heroImage, setHeroImage] = useState(breakfastImageSmall);
  const [heroLoaded, setHeroLoaded] = useState(false);

function preloadImage(setImage, setLoaded, largeImage) {
    const img = new Image();
    img.src = largeImage;

    img.onload = () => {
      setImage(largeImage);
      setLoaded(true);
    };
  }

  useEffect (() => {
    preloadImage(setHeroImage, setHeroLoaded, breakfastImage)
  },[]);

  return (
    <div className="menu-page-container">
      <div
        className={`menu-hero-img ${heroLoaded ? "loaded" : ""}`}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${heroImage})`,
        }}
      ></div>

      <main className="menu-hero-content">
        <h2 className="menu-main-headline"> Frukost </h2>

        <section className="menu-divider-section">
          <div className="line"></div>
          <p className="menu-subtext"> En smakstart i naturens lugn</p>
          <div className="line"></div>
        </section>

        <article className="menu-description-article">
          <p className="description-body">
            Vakna till doften av nybakat bröd och nymalet kaffe. På Roslagen
            Escape börjar dagen precis som den ska. Med lugn, ro och en generös
            frukostbuffé fylld av lokala råvaror.
          </p>
          <p className="description-body">
            Njut av allt från våra frasiga tillbehör till ett brett utbud av
            laktos- och glutenfria alternativ, allt medan du blickar ut över
            skogens stillhet.
          </p>

          <div className="practical-info-box">
            <p className="practical-info-title">Frukosttider</p>
            <p className="practical-info-text">Måndag - Fredag 06:30 - 10:30</p>
            <p className="practical-info-text">Lördag - Söndag 07:30 - 10:30</p>
            <p className="practical-info-included">
              Frukost ingår i alla rumstyper
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
