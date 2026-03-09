import hotelImage from "../assets/hotel.png";
import "./Home.css";
import BookingBar from "../components/BookingBar";

export default function Home() {
        return (
            <div> 
                <div 
                    className="hero-section">
                        <div 
                        className="hero-bg-img"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${hotelImage})`,
                        }}
                    ></div>

                    <div className="hero-content">
                        <h1 className="hero-title">Välkommen till Roslagen Escape</h1>
                        <p className="hero-subtitle">Upplev stillheten vid vattnet där naturens lugn möter modern komfort och omtanke.</p>
                        
                        <div className="booking-wrapper">
                            <BookingBar />
                    </div>
                </div>
            </div>
        </div>
    );
}