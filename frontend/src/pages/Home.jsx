import hotelImage from "../assets/hotel.png";
import hotelImageSmall from "../assets/hotel-compressed.png";
import "./Home.css";
import BookingBar from "../components/BookingBar";
import { useState, useEffect } from "react";

export default function Home() {
  const [heroImage, setHeroImage] = useState(hotelImageSmall);

  useEffect(() => {
    const img = new Image();
    img.src = hotelImage;

    img.onload = () => {
      setHeroImage(hotelImage);
    };
  }, []);

  return (
    <div>
      <div className="hero-section">
        <div
          className="hero-bg-img"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImage})`,
          }}
        ></div>

        <div className="hero-content">
          <h1 className="hero-title">Välkommen till Roslagen Escape</h1>
          <p className="hero-subtitle">
            Upplev stillheten vid vattnet där naturens lugn möter modern komfort
            och omtanke.
          </p>

          <div className="booking-wrapper">
            <BookingBar />
          </div>
        </div>
      </div>
    </div>
  );
}
