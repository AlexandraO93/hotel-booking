import "./Confirmation.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import confirmationImage from "../assets/confirmation.png";
import confirmationImageSmall from "../assets/confirmation-compressed.png";

export default function Confirmation() {
  const savedSearch = JSON.parse(localStorage.getItem("savedSearch")) || {};
  const selectedRoom = JSON.parse(localStorage.getItem("selectedRoom")) || {};
  const selectedAddons =
    JSON.parse(localStorage.getItem("selectedAddons")) || {};
  const bookingFormData =
    JSON.parse(localStorage.getItem("bookingFormData")) || {};
  const bookingExtras = JSON.parse(localStorage.getItem("bookingExtras")) || {};
  const navigate = useNavigate();

  const [heroImage, setHeroImage] = useState(confirmationImageSmall);

  useEffect(() => {
    const img = new Image();
    img.src = confirmationImage;

    img.onload = () => {
      setHeroImage(confirmationImage);
    };
  }, []);

  let nights = 0;

  if (savedSearch.checkInDate && savedSearch.checkOutDate) {
    const checkIn = new Date(savedSearch.checkInDate);
    const checkOut = new Date(savedSearch.checkOutDate);

    const diffInMs = checkOut - checkIn;
    nights = diffInMs / (1000 * 60 * 60 * 24);
  }

  const addonPrice = bookingExtras.addonPrice || 0;
  const roomTotal = (selectedRoom.price || 0) * nights;
  const totalPrice = roomTotal + addonPrice;

  function handleAbortBooking() {
    localStorage.clear();

    navigate("/hotel-booking");
  }

  return (
    <>
      <div className="confirmation-page-container">
        <div
          className="confirmation-hero-img"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${heroImage})`,
          }}
        ></div>

        <main className="confirmation-hero-content">
          <section className="confirmation-container">
            <header className="confirmation-header">
              <h2 className="confirmation-headline"> Bokningsbekräftelse</h2>
            </header>
            <div className="confirmation-layout">
              <div className="confirmation-contact">
                <p className="confirmation-title">Bokningsinformation</p>
                <p className="confirmation-content"><strong>Bokningsnummer: </strong>{bookingFormData.bookingReference}</p>
                <p className="confirmation-content">
                  <strong>Namn: </strong>{" "}
                  {bookingFormData.firstName + " " + bookingFormData.lastName}
                </p>
                <p className="confirmation-content"><strong>Email: </strong>{bookingFormData.email}</p>
                <p className="confirmation-content"><strong>Telefonnummer: </strong>{bookingFormData.phonenumber}</p>
              </div>

              <div className="confirmation-stay">
                <p className="confirmation-title">Vistelse</p>
                <p className="confirmation-content">
                  {savedSearch.rooms}x {selectedRoom.name}, {nights} nätter
                </p>
                <p className="confirmation-content">{savedSearch.guests} gäster</p>
                <p className="confirmation-content">Incheckning: {savedSearch.checkInDate}</p>
                <p className="confirmation-content">Utcheckning: {savedSearch.checkOutDate}</p>
              </div>

              <div className="confirmation-booking-extras">
                <p className="confirmation-title">Tillval</p>
                {selectedAddons.dinnerIncluded ||
                bookingExtras.fruitChocolate ||
                bookingExtras.snacksBar ||
                bookingExtras.beer ||
                bookingExtras.bubble ? (
                  <ul className="confirmation-content">
                    {selectedAddons.dinnerIncluded && <li>Middag bokad</li>}
                    {bookingExtras.fruitChocolate && (
                      <li>Frukt- och Chokladfat</li>
                    )}
                    {bookingExtras.snacksBar && <li>Snacksbricka</li>}
                    {bookingExtras.beer && <li>Ölkorg</li>}
                    {bookingExtras.bubble && <li>Champagne</li>}
                  </ul>
                ) : (
                  <p className="confirmation-content">Inga tillval valda</p>
                )}
              </div>

              <div className="confirmation-requests">
                <p className="confirmation-content"><strong>Önskemål: </strong>{bookingFormData.requests || "Inga önskemål"}</p>
              </div>

              <div className="confirmation-price-layout">
                <p className="confirmation-title-price">Summa</p>
                <p className="confirmation-content">Pris för rummet: {roomTotal} kr</p>
                <p className="confirmation-content">Tillval totalt: {addonPrice} kr</p>
                <p className="confirmation-price">Totalpris: {totalPrice} kr</p>
              </div>
            </div>
          </section>
          <button
            className="confirmation-btn"
            type="button"
            onClick={handleAbortBooking}
          >
            Tillbaka till startsidan
          </button>
        </main>
      </div>
    </>
  );
}
