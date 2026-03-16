import "./Booking.css";
import standardRoomImage from "../assets/standard-room.png";
import standardRoomImageSmall from "../assets/standard-room-compressed.png";
import superiorRoomImageSmall from "../assets/superior-room-compressed.png";
import superiorRoomImage from "../assets/superior-room.png";
import suiteRoomImageSmall from "../assets/suite-room-compressed.png";
import suiteRoomImage from "../assets/suite-room.png";
import familyRoomImageSmall from "../assets/family-room-compressed.png";
import familyRoomImage from "../assets/family-room.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Booking() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showAddons, setShowAddons] = useState(false);
  const [dinnerIncluded, setDinnerIncluded] = useState(false);
  const [standardImage, setStandardImage] = useState(standardRoomImageSmall);
  const [superiorImage, setSuperiorImage] = useState(superiorRoomImageSmall);
  const [suiteImage, setSuiteImage] = useState(suiteRoomImageSmall);
  const [familyImage, setFamilyImage] = useState(familyRoomImageSmall);
  const [standardLoaded, setStandardLoaded] = useState(false);
  const [superiorLoaded, setSuperiorLoaded] = useState(false);
  const [suiteLoaded, setSuiteLoaded] = useState(false);
  const [familyLoaded, setFamilyLoaded] = useState(false);

  const navigate = useNavigate();

  function preloadImage(setImage, setLoaded, largeImage) {
    const img = new Image();
    img.src = largeImage;
    img.onload = () => {
      setImage(largeImage);
      setLoaded(true);
    };
  }

  useEffect(() => {
    preloadImage(setStandardImage, setStandardLoaded, standardRoomImage);
    preloadImage(setSuperiorImage, setSuperiorLoaded, superiorRoomImage);
    preloadImage(setSuiteImage, setSuiteLoaded, suiteRoomImage);
    preloadImage(setFamilyImage, setFamilyLoaded, familyRoomImage);
  }, []);

  const rooms = [
    {
      id: 1,
      name: "Standardrum",
      maxGuests: 2,
      shortDescription:
        "Ett ljust och bekvämt rum med allt du behöver för en avkopplande vistelse.",
      image: standardImage,
      loaded: standardLoaded,
      price: 1100,
    },
    {
      id: 2,
      name: "Superiorrum",
      maxGuests: 2,
      shortDescription:
        "Ett rymligare rum med extra komfort och en lugn, harmonisk känsla.",
      image: superiorImage,
      loaded: superiorLoaded,
      price: 1500,
    },
    {
      id: 3,
      name: "Svit",
      maxGuests: 3,
      shortDescription:
        "En elegant svit med generösa ytor för dig som vill bo extra bekvämt.",
      image: suiteImage,
      loaded: suiteLoaded,
      price: 2200,
    },
    {
      id: 4,
      name: "Familjerum",
      maxGuests: 4,
      shortDescription:
        "Perfekt för familjen, med gott om plats och bekväma sovlösningar.",
      image: familyImage,
      loaded: familyLoaded,
      price: 1800,
    },
  ];

  const savedSearch = JSON.parse(localStorage.getItem("savedSearch")) || {};

  let nights = 0;

  if (savedSearch.checkInDate && savedSearch.checkOutDate) {
    const checkIn = new Date(savedSearch.checkInDate);
    const checkOut = new Date(savedSearch.checkOutDate);

    /*Ger skillnad i millisekunder som sen räknas om till dygn*/
    const diffInMs = checkOut - checkIn;
    nights = diffInMs / (1000 * 60 * 60 * 24);
  }

  const guests = savedSearch.guests ?? 1;

  const availableRooms = rooms.filter((room) => room.maxGuests >= guests);

  function handleUpdateSearch() {
    navigate("/hotel-booking");
  }

  function handleSelectRoom(room) {
    setSelectedRoom(room);
    setDinnerIncluded(false);
    setShowAddons(true);
  }

  function handleBackToRoomSelection() {
    setShowAddons(false);
  }

  function handleContinueToCheckout() {
    if (!selectedRoom) return;

    localStorage.setItem("selectedRoom", JSON.stringify(selectedRoom));
    localStorage.setItem("selectedAddons", JSON.stringify({ dinnerIncluded }));
    navigate("/checkout");
  }

  return (
    <div className="booking-page-container">
      <header className="booking-header">
        <h2 className="booking-headline">Välj en rumstyp</h2>
      </header>

      <div className="booking-layout">
        <aside className="search-info-bar">
          <h4 className="search-info-headline">Du har sökt:</h4>

          <div className="search-summary-layout">
            <div className="search-dates">
              <div className="search-info-content">
                <p className="search-info-title" id="checkin">
                  <strong>Incheckning</strong>
                </p>
                <p className="search-info-subtext">
                  {savedSearch.checkInDate
                    ? new Date(savedSearch.checkInDate).toLocaleDateString(
                        "sv-SE",
                      )
                    : ""}
                </p>
              </div>

              <div className="search-info-content">
                <p className="search-info-title" id="checkout">
                  <strong>Utcheckning</strong>
                </p>
                <p className="search-info-subtext">
                  {savedSearch.checkOutDate
                    ? new Date(savedSearch.checkOutDate).toLocaleDateString(
                        "sv-SE",
                      )
                    : ""}
                </p>
              </div>
              <button
                className="update-booking-btn"
                type="button"
                onClick={handleUpdateSearch}
              >
                Ändra sökning
              </button>
            </div>

            <div className="search-meta">
              <div className="search-info-content">
                <div className="info-row">
                  <p className="search-info-title" id="nights">
                    <strong>Antal nätter</strong>
                  </p>
                  <p className="search-info-subtext">{nights}</p>
                </div>
              </div>
              <div className="search-info-content">
                <div className="info-row">
                  <p className="search-info-title" id="rooms">
                    <strong>Antal rum</strong>
                  </p>
                  <p className="search-info-subtext">{savedSearch.rooms}</p>
                </div>
              </div>
              <div className="search-info-content">
                <div className="info-row">
                  <p className="search-info-title" id="guests">
                    <strong>Antal pers.</strong>
                  </p>
                  <p className="search-info-subtext">{savedSearch.guests}</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <section className="available-rooms">
          {availableRooms.length === 0 ? (
            <p>Tyvärr finns inga rum för detta antal gäster.</p>
          ) : (
            availableRooms
              .filter((room) => !showAddons || room.id === selectedRoom?.id)
              .map((room) => {
                const isSelectedCard =
                  showAddons && selectedRoom?.id === room.id;

                return (
                  <div className="booking-room-card" key={room.id}>
                    {isSelectedCard ? (
                      <div className="booking-room-content booking-addon-content">
                        <h3 className="booking-room-name">{room.name}</h3>
                        <p className="booking-room-desc">
                          Vill du lägga till middag?
                        </p>

                        <div className="addon-options">
                          <label className="addon-option">
                            <input
                              type="radio"
                              name="dinner"
                              checked={dinnerIncluded === true}
                              onChange={() => setDinnerIncluded(true)}
                            />
                            Ja
                          </label>

                          <label className="addon-option">
                            <input
                              type="radio"
                              name="dinner"
                              checked={dinnerIncluded === false}
                              onChange={() => setDinnerIncluded(false)}
                            />
                            Nej
                          </label>
                        </div>
                        <div className="room-btns">
                          <button
                            type="button"
                            className="continue-booking-btn"
                            onClick={handleContinueToCheckout}
                          >
                            Fortsätt till checkout
                          </button>
                          <button
                            type="button"
                            className="continue-booking-btn"
                            onClick={handleBackToRoomSelection}
                          >
                            Ändra rum
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <img
                          src={room.image}
                          alt={room.name}
                          className={`booking-room-image ${room.loaded ? "loaded" : ""}`}
                        />

                        <div className="booking-room-content">
                          <h3 className="booking-room-name">{room.name}</h3>
                          <p className="booking-room-desc">
                            {room.shortDescription}
                          </p>
                          <p className="booking-room-max">
                            Passar upp till {room.maxGuests} gäster
                          </p>
                          <button
                            className="booking-room-btn"
                            type="button"
                            onClick={() => handleSelectRoom(room)}
                          >
                            Välj rum
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                );
              })
          )}
        </section>
      </div>
    </div>
  );
}
