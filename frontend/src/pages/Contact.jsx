import RoslagenNavBar from "../components/Navbar";
import hotelImage from "../assets/hotel.png";
import BookingBar from "../components/BookingBar";

export default function Contact() {
    return (
        <>
    
        <main>
            <h2>Kontakta oss</h2>
            <p>Innan du hör av dig, kolla igenom våra mest frågade Frågor & Svar för att få snabbare svar på dina frågor</p>
            <a href="qa">Läs Frågor & Svar här</a>
        </main>
        
        
        <section>
            <div>
                <form>
                    <label for="nameInput">Namn *</label>
                    <input type="text" placeholder="Skriv ditt namn" id="nameInput"/>
                    <br />
                    <label for="bookingnumber">Bokningsnummer </label>
                    <input type="text" placeholder="Ditt bokningsnummer" id="bookingnumber" />
                    <br />
                    <label for="phonenumber">Telefonnummer </label>
                    <input type="text" placeholder="+467X XXX XX XX" id="phonenumber" />
                    <br />
                    <label for="email">Email *</label>
                    <input type="email" placeholder="example@hotmail.com" id="email" />
                    <br />
                    <label for="verifyEmail">Verifiera Email *</label>
                    <input type="email" placeholder="example@hotmail.com" id="verifyEmail" />
                    <br />
                    <label for="message">Meddelande *</label>
                    <input type="text" placeholder="Skriv ditt meddelande här:" id="message" />
                    <br />
                    <button type="submit">Skicka</button>
                </form>
            </div>
        </section>
        </>

    );
}