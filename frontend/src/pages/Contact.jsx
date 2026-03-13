import contactImage from "../assets/contact.png";
import contactImageSmall from "../assets/contact-compressed.png";
import { useState, useEffect } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [heroImage, setHeroImage] = useState(contactImageSmall);
  const [name, setName] = useState("");
  const [bookingReference, setBookingReference] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [confirmedEmail, setConfirmedEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const img = new Image();
    img.src = contactImage;

    img.onload = () => {
      setHeroImage(contactImage);
    };
  }, []);

  function handleSendContactForm() {
    const contactFormData = {
      name,
      bookingReference,
      phonenumber,
      email,
      confirmedEmail,
      message,
    };
    localStorage.setItem("contactFormData", JSON.stringify(contactFormData));
    alert("Meddelande skickat");
  }

  return (
    <div className="contact-page">
      <div
        className="contact-img"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})`,
        }}
      ></div>

      <main>
        <div className="hero-section">
          <h2 className="contact-title">Kontakta oss</h2>
          <p className="contact-subtitle">
            Innan du hör av dig, kolla igenom våra mest frågade Frågor & Svar
            för att få snabbare svar på dina frågor
          </p>
          <Link id="qa" to="/qa">
            Läs Frågor & Svar här
          </Link>
        </div>
      </main>

      <section className="contact-form-section">
        <form className="">
          <h4 className="form-title">Kontaktformulär</h4>
          <label htmlFor="nameInput">Namn *</label>
          <input
            type="text"
            required
            placeholder="Skriv ditt namn"
            id="nameInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="bookingnumber">Bokningsnummer </label>
          <input
            type="text"
            placeholder="Lämna tomt om du ej har bok.nr"
            id="bookingnumber"
            value={bookingReference}
            onChange={(e) => setBookingReference(e.target.value)}
          />

          <label htmlFor="phonenumber">Telefonnummer </label>
          <input
            type="text"
            placeholder="+46-7x xxx xx xx"
            id="phonenumber"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          />

          <label htmlFor="email">Email *</label>
          <input
            type="email"
            required
            placeholder="example@hotmail.com"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="verifyEmail">Verifiera Email *</label>
          <input
            type="email"
            required
            placeholder="example@hotmail.com"
            id="verifyEmail"
            value={confirmedEmail}
            onChange={(e) => setConfirmedEmail(e.target.value)}
          />

          <label htmlFor="message">Meddelande *</label>
          <textarea
            id="message"
            required
            placeholder="Skriv ditt meddelande här.."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <p className="forced-input">* Måste fyllas i</p>
          <button
            type="button"
            id="contact-btn"
            onClick={handleSendContactForm}
          >
            Skicka
          </button>
        </form>
      </section>

      <div className="filler-space">
        <p className="ending-slogan">
          Roslagen Escape är ett kontantfritt hotell. Snabbt, säkert och enkelt.
        </p>
      </div>
    </div>
  );
}
