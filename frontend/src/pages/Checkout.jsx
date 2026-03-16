import "./Checkout.css";
import BookingForm from "../components/Bookingform";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import beerImageLarge from "../assets/beer.png";
import beerImageSmall from "../assets/beer-compressed.png";
import bubblesImageLarge from "../assets/bubbles.png";
import bubblesImageSmall from "../assets/bubbles-compressed.png";
import fruitChocolateImageLarge from "../assets/fruit-chocolate.png";
import fruitChocolateImageSmall from "../assets/fruit-chocolate-compressed.png";
import snacksbarImageLarge from "../assets/snacksbar.png";
import snacksbarImageSmall from "../assets/snacksbar-compressed.png";

export default function Checkout() {
  const selectedRoom = JSON.parse(localStorage.getItem("selectedRoom")) || {};
  const selectedAddons =
    JSON.parse(localStorage.getItem("selectedAddons")) || {};
  const savedSearch = JSON.parse(localStorage.getItem("savedSearch")) || {};
  const [beer, setBeer] = useState(false);
  const [bubble, setBubble] = useState(false);
  const [snacksBar, setSnacksBar] = useState(false);
  const [fruitChocolate, setFruitChocolate] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();

  const [beerImage, setBeerImage] = useState(beerImageSmall);
  const [beerLoaded, setBeerLoaded] = useState(false);
  const [bubblesImage, setBubblesImage] = useState(bubblesImageSmall);
  const [bubblesLoaded, setBubblesLoaded] = useState(false);
  const [fruitChocolateImage, setFruitChocolateImage] = useState(fruitChocolateImageSmall,);
  const [fruitChocolateLoaded, setFruitChocolateLoaded] = useState(false);
  const [snacksbarImage, setSnacksbarImage] = useState(snacksbarImageSmall);
  const [snacksbarLoaded, setSnacksbarLoaded] = useState(false);

 function preloadImage(setImage, setLoaded, largeImage) {
    const img = new Image();
    img.src = largeImage;
    img.onload = () => {
      setImage(largeImage);
      setLoaded(true);
    };
  }


  useEffect(() => {
    preloadImage(setBeerImage, setBeerLoaded, beerImageLarge)
    preloadImage(setBubblesImage, setBubblesLoaded, bubblesImageLarge)
    preloadImage(setFruitChocolateImage, setFruitChocolateLoaded, fruitChocolateImageLarge)
    preloadImage(setSnacksbarImage, setSnacksbarLoaded, snacksbarImageLarge)

  }, []);

  let nights = 0;

  if (savedSearch.checkInDate && savedSearch.checkOutDate) {
    const checkIn = new Date(savedSearch.checkInDate);
    const checkOut = new Date(savedSearch.checkOutDate);

    const diffInMs = checkOut - checkIn;
    nights = diffInMs / (1000 * 60 * 60 * 24);
  }

  const dinnerText = selectedAddons.dinnerIncluded
    ? "Middag inkluderad. (Betalas på plats)"
    : "";

  const rooms = [
    {
      id: 1,
      name: "Standardrum",
      pricePerNight: 1100,
    },
    {
      id: 2,
      name: "Superiorrum",
      pricePerNight: 1500,
    },
    {
      id: 3,
      name: "Svit",
      pricePerNight: 2200,
    },
    {
      id: 4,
      name: "Familjerum",
      pricePerNight: 1800,
    },
  ];

  let totalPriceRoom = 0;

  rooms.forEach((room) => {
    if (selectedRoom.id === room.id) {
      totalPriceRoom = room.pricePerNight * nights * savedSearch.rooms;
    }
  });

  let addonPrice = 0;

  if (fruitChocolate) {addonPrice = addonPrice + 295;}
  if (snacksBar) {addonPrice = addonPrice + 195;}
  if (beer) {addonPrice = addonPrice + 345;}
  if (bubble) {addonPrice = addonPrice + 895;}

  const bookingExtras = {
    fruitChocolate,
    snacksBar,
    beer,
    bubble,
    addonPrice
  };

  localStorage.setItem("bookingExtras", JSON.stringify(bookingExtras));

  let totalPriceWithAddons = totalPriceRoom + addonPrice;

  return (
    <>
      {!showForm && (
        <>
          <div className="checkout-page-container">
            <header className="checkout-header">
              <h2 className="checkout-headline">Bokningssammanfattning</h2>
            </header>

            <div className="checkout-layout">
              <div className="saved-search-bar">
                <p className="checkout-rooms">
                  {savedSearch.rooms}x: {selectedRoom.name}
                </p>
                <div className="checkout-search-info">
                  <p>Incheckning: </p>
                  <p className="checkout-search-content">
                    {savedSearch.checkInDate}
                  </p>
                </div>
                <div className="checkout-search-info">
                  <p>Utcheckning: </p>
                  <p className="checkout-search-content">
                    {savedSearch.checkOutDate}
                  </p>
                </div>
                <div className="checkout-search-info">
                  <p>Antal nätter: </p>
                  <p className="checkout-search-content">{nights}</p>
                </div>
                <div className="checkout-search-info">
                  <p>Gäster: </p>
                  <p className="checkout-search-content">
                    {savedSearch.guests} ({savedSearch.adults} vuxna &{" "}
                    {savedSearch.children} barn)
                  </p>
                </div>
                <div className="checkout-addons-info">
                  <p className="checkout-includes">Inkluderar: </p>
                  <p className="checkout-includes-content">Hotellfrukost</p>
                  <p className="checkout-includes-content">{dinnerText}</p>
                </div>

                <div className="checkout-prices">
                  <h6 className="checkout-prices-headline">Pris: </h6>
                  <div className="checkout-subtotal">
                    <p className="checkout-subtotal-title">Delsumma: </p>
                    <p className="checkout-subtotal-price">
                      {totalPriceRoom} kr
                    </p>
                  </div>

                  <div className="checkout-subtotal">
                    <p className="checkout-subtotal-title">Tillägg: </p>
                    <p className="checkout-subtotal-price">{addonPrice} kr</p>
                  </div>

                  <div className="checkout-total">
                    <p className="checkout-total-title">Total summa: </p>
                    <p className="checkout-total-price">
                      {totalPriceWithAddons} kr
                    </p>
                  </div>
                </div>
              </div>

              <div className="room-addons-layout">
                <p className="room-addons-headline">Tilltugg till rummet:</p>

                <label className="room-addon-fruit-chocolate">
                  <img
                    src={fruitChocolateImage}
                    alt="Frukt- och chokladfat"
                    className={`addon-card-image ${setFruitChocolateLoaded ? "loaded" : ""}`}
                  />{" "}
                  <br />
                  <input
                    type="checkbox"
                    name="snacks"
                    id="fruit-chocolate"
                    checked={fruitChocolate}
                    onChange={() => setFruitChocolate(!fruitChocolate)}
                  />
                  <p className="addon-desc">Frukt- och chokladfat </p>
                  <p className="addon-price"> 295 kr</p>
                </label>

                <label className="room-addon-snacks-bar">
                  <img
                    src={snacksbarImage}
                    alt="Snacksfat"
                    className={`addon-card-image ${setSnacksbarLoaded ? "loaded" : ""}`}
                  />{" "}
                  <br />
                  <input
                    type="checkbox"
                    name="snacks"
                    id="snacks-bar"
                    checked={snacksBar}
                    onChange={() => setSnacksBar(!snacksBar)}
                  />
                  <p className="addon-desc">Snacksbricka </p>
                  <p className="addon-price"> 195 kr</p>
                </label>

                <label className="room-addon-beer">
                  <img
                    src={beerImage}
                    alt="Ölkorg"
                    className={`addon-card-image ${setBeerLoaded ? "loaded" : ""}`}
                  />
                  <div>
                    <input
                      type="checkbox"
                      name="drinks"
                      id="beer"
                      checked={beer}
                      onChange={() => setBeer(!beer)}
                    />
                    <p className="addon-desc">Ölkorg </p>
                    <p className="addon-price">345 kr</p>
                  </div>
                </label>

                <label className="room-addon-bubble">
                  <img
                    src={bubblesImage}
                    alt="Champage"
                    className={`addon-card-image ${setBubblesLoaded ? "loaded" : ""}`}
                  />
                  <br />
                  <input
                    type="checkbox"
                    name="drinks"
                    id="bubbles"
                    checked={bubble}
                    onChange={() => setBubble(!bubble)}
                  />
                  <p className="addon-desc">En flaska champagne</p>
                  <p className="addon-price"> 895 kr</p>
                </label>
              </div>
            </div>

            <div className="checkout-btns">
              <button
                className="checkout-btn-abort"
                type="button"
                onClick={() => navigate("/hotel-booking")}
              >
                Avbryt och gå tillbaka till startsidan
              </button>
              <button
                className="checkout-btn"
                type="button"
                onClick={() => navigate("/booking")}
              >
                Ändra bokning
              </button>
              <button
                className="checkout-btn"
                type="button"
                onClick={() => setShowForm(true)}
              >
                Fortsätt
              </button>
            </div>
          </div>
        </>
      )}
      {showForm && <BookingForm />}
    </>
  );
}
