import "./BookingForm.css";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import confirmationImage from "../assets/confirmation.png";
import confirmationImageSmall from "../assets/confirmation-compressed.png";

export default function BookingForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmedEmail, setConfirmedEmail] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [requests, setRequests] = useState("");

  const navigate = useNavigate();

  const [heroImage, setHeroImage] = useState(confirmationImageSmall);

  useEffect(() => {
      const img = new Image();
      img.src = confirmationImage;
  
      img.onload = () => {
        setHeroImage(confirmationImage);
      };
    }, []);

  function randomBookingNumber() {
    let random = Math.floor(100000 + Math.random() * 900000);
    return `RE-2026-${random}`;
  }

  function handleCompleteBooking() {
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      confirmedEmail.trim() === "" ||
      phonenumber.trim() === ""
    ) {
      alert("Alla värden med * måste fyllas i");
      return;
    }

    if (email.trim() !== confirmedEmail.trim()) {
      alert("Email matchar inte");
      return;
    }

    const bookingReference = randomBookingNumber();

    const bookingFormData = {
      bookingReference,
      firstName,
      lastName,
      email,
      street,
      postalCode,
      city,
      phonenumber,
      requests,
    };
    localStorage.setItem("bookingFormData", JSON.stringify(bookingFormData));

    navigate("/confirmation");
  }

  return (
    <div className="booking-form-page-container">
        <div
          className="confirmation-hero-img"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${heroImage})`,
          }}
        ></div>
      

      <div className="booking-form-layout">
        <header>
        <h4 className="booking-form-headline">Ansvarig för bokningen</h4>
      </header>
        <form className="booking-form-input">
          <div className="form-name">
            <input
              className="booking-form-input-content"
              type="text"
              placeholder="Förnamn *"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="booking-form-input-content"
              type="text"
              placeholder="Efternamn *"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="form-email">
            <input
              className="booking-form-input-content"
              type="email"
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="booking-form-input-content"
              type="email"
              placeholder="Bekräfta email *"
              value={confirmedEmail}
              onChange={(e) => setConfirmedEmail(e.target.value)}
            />
          </div>

          <div className="form-adress">
            <input
              className="booking-form-input-content"
              type="text"
              placeholder="Gatuadress"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <input
              className="booking-form-input-content"
              type="text"
              placeholder="Postnummer"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
            <input
              className="booking-form-input-content"
              type="text"
              placeholder="Stad"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="form-phonenumber">
            <input
              className="booking-form-input-content"
              type="text"
              placeholder="Telefonnummer *"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
            />
          </div>

          <div className="form-requests">
            <div className="form-divider-section">
              <div className="simple-line"></div>
              <p>Speciella önskemål</p>
              <div className="simple-line"></div>
            </div>

            <div className="form-request-content">
              <textarea
                className="form-request-input"
                placeholder="Skriv in ditt önskemål"
                value={requests}
                onChange={(e) => setRequests(e.target.value)}
              ></textarea>
            </div>
          </div>

          <p className="form-info">Bokningen betalas på plats på hotellet</p>

          <div className="form-btns">
            <button
              className="form-btn-abort"
              type="button"
              onClick={() => navigate("/hotel-booking")}
            >
              Avbryt bokning
            </button>

            <button
              className="form-btn"
              type="button"
              onClick={handleCompleteBooking}
            >
              Bekräfta bokning
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
