import contactImage from "../assets/contact.png";
import "./Contact.css";
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <div className="contact-page">

            <div
            className="contact-img"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${contactImage})`,
            }}
        ></div>

        <main>
            <div className="hero-section">
                <h2 className="contact-title">Kontakta oss</h2>
                <p className="contact-subtitle">
                    Innan du hör av dig, kolla igenom våra mest frågade Frågor & Svar för att få snabbare svar på dina frågor
                </p>
                <Link id="qa" to="/qa">Läs Frågor & Svar här</Link>
            </div>
        </main>
    
    
        <section className="contact-form">
            <form className="">
                <h4 className="form-title">Kontaktformulär</h4>
                <label htmlFor="nameInput">Namn *</label>
                <input type="text" placeholder="Skriv ditt namn" id="nameInput"/>
                
                <label htmlFor="bookingnumber">Bokningsnummer </label>
                <input type="text" placeholder="Lämna tomt om du ej har bok.nr" id="bookingnumber" />

                <label htmlFor="phonenumber">Telefonnummer </label>
                <input type="text" placeholder="+46-7x xxx xx xx" id="phonenumber" />

                <label htmlFor="email">Email *</label>
                <input type="email" placeholder="example@hotmail.com" id="email" />

                <label htmlFor="verifyEmail">Verifiera Email *</label>
                <input type="email" placeholder="example@hotmail.com" id="verifyEmail" />

                <label htmlFor="message">Meddelande *</label>
                <input type="text" placeholder="Skriv ditt meddelande här:" id="message" />
                <p className="forced-input">* Måste fyllas i</p>
                <button type="submit" id="contact-btn">Skicka</button>
                </form>
        </section>

        <div className="filler-space">
            <p className="ending-slogan">Roslagen Escape är ett kontantfritt hotell. Snabbt, säkert och enkelt.</p>
        </div>
    </div>
    );
}