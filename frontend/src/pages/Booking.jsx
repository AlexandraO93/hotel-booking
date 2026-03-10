import React, { useState } from "react";
import "./Booking.css";


export default function Booking() {
  const [available, setAvailable] = useState(true);
  const rooms = [
  {id: 1, name: "Standardrum", maxGuests: 2},
  {id: 2, name: "Superiorrum", maxGuests: 2},
  {id: 3, name: "Svit", maxGuests: 3},
  {id: 4, name: "Familjerum", maxGuests: 4}
  ];
  const savedSearch = JSON.parse(localStorage.getItem('savedSearch')) || {};
   
  let nights = 0;
   
  if (savedSearch.checkInDate && savedSearch.checkOutDate) {
    const checkIn = new Date(savedSearch.checkInDate);
    const checkOut = new Date(savedSearch.checkOutDate);
    
    /*Ger skillnad i millisekunder som sen räknas om till dygn*/
    const diffInMs = checkOut - checkIn;
    nights = diffInMs / (1000 * 60 * 60 * 24);
   }
    return (
        
        <div className="booking-page-container">
            <header className="booking-header">
                <h2 className="booking-headline">Välj en rumstyp</h2>
            </header>

            <aside className="search-info-bar">
                <h4 className="search-info-headline">Du har sökt:</h4>
                
                <div className="search-summary-layout">
                    <div className="search-dates">
                        <div className="search-info-content">
                            <p className="search-info-title" id="checkin"><strong>Incheckning</strong></p>
                            <p className="search-info-subtext">{savedSearch.checkInDate}</p>
                        </div>
                    
                        <div className="search-info-content">
                            <p className="search-info-title" id="checkout"><strong>Utcheckning</strong></p>
                            <p className="search-info-subtext">{savedSearch.checkOutDate}</p>
                        </div>
                        <button className="update-booking-btn" type="button">Ändra sökning</button>
                    </div>

                    <div className="search-meta">
                        <div className="search-info-content">
                            <div className="info-row">
                                <p className="search-info-title" id="nights"><strong>Antal nätter</strong></p>
                                <p className="search-info-subtext">{nights}</p>
                            </div>
                        </div>
                        <div className="search-info-content">
                            <div className="info-row">
                                <p className="search-info-title" id="rooms"><strong>Antal rum</strong></p>
                                <p className="search-info-subtext">{savedSearch.rooms}</p>
                            </div>
                        </div>
                        <div className="search-info-content">
                            <div className="info-row">
                                <p className="search-info-title" id="guests"><strong>Antal personer</strong></p>
                                <p className="search-info-subtext">{savedSearch.guests}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </aside>
        
            <section className="available-rooms">
                <div className="room-card">
                </div>
            </section>
        </div>
        
    );
}