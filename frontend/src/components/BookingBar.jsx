import "./BookingBar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const BookingBar = () => {
  const navigate = useNavigate();

  const savedSearch = JSON.parse(localStorage.getItem("savedSearch")) || {};

  const today = new Date().toISOString().split("T")[0];

  const [rooms, setRooms] = useState(savedSearch.rooms || 1);
  const [adults, setAdults] = useState(savedSearch.adults || 2);
  const [children, setChildren] = useState(savedSearch.children || 0);
  const [childAges, setChildAges] = useState(savedSearch.childAges || []);
  const [checkInDate, setCheckInDate] = useState(savedSearch.checkInDate || today);
  const [checkOutDate, setCheckOutDate] = useState(savedSearch.checkOutDate || today);

  const handleChildrenChange = (newCount) => {
    const count = Math.max(0, newCount);
    setChildren(count);
    const newAges = [...childAges];
    if (count > childAges.length) {
      for (let i = childAges.length; i < count; i++) newAges.push("");
    } else {
      newAges.splice(count);
    }
    setChildAges(newAges);
  };

  const updateChildAge = (index, age) => {
    const newAges = [...childAges];
    newAges[index] = age;
    setChildAges(newAges);
  };

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);
  maxDate.setMonth(maxDate.getMonth() + 6);
  const maxBookingDate = maxDate.toISOString().split("T")[0];

  function handleSearch() {
    if (checkOutDate < checkInDate || checkInDate === checkOutDate) {
      alert(
        "Check-out datum kan inte vara före/eller samma som check-in datum",
      );
      return;
    }

    if (adults <= 0) {
      alert("Antalet vuxna får ej vara 0");
      return;
    }

    if (children > 0 && childAges.some((age) => age === "")) {
      alert("Ålder på barn måste väljas");
      return;
    }

    const searchData = {
      checkInDate,
      checkOutDate,
      rooms,
      guests: adults + children,
      adults,
      children,
      childAges,
    };

    localStorage.setItem("savedSearch", JSON.stringify(searchData));

    navigate("/booking");
  }

  return (
    <section className="booking-container">
      <div className="booking-grid">
        {/* RAD 1 */}
        <article className="booking-field-date">
          <label>CHECKA IN</label>
          <input
            type="date"
            min={today}
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
          />
        </article>
        <article className="booking-field-date">
          <label>CHECKA UT</label>
          <input
            type="date"
            min={today}
            max={maxBookingDate}
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </article>

        {/* RAD 2 */}
        <article className="booking-field-room">
          <label>RUM</label>
          <div className="counter-controls">
            <button
              onClick={() => setRooms(Math.max(1, rooms - 1))}
              type="button"
            >
              −
            </button>
            <span className="count-display">{rooms}</span>
            <button onClick={() => setRooms(rooms + 1)} type="button">
              +
            </button>
          </div>
        </article>

        {/* RAD 3 */}
        <article className="booking-field-adults">
          <label>VUXNA</label>
          <div className="counter-controls">
            <button
              onClick={() => setAdults(Math.max(1, adults - 1))}
              type="button"
            >
              −
            </button>
            <span className="count-display">{adults}</span>
            <button onClick={() => setAdults(adults + 1)} type="button">
              +
            </button>
          </div>
        </article>
        <article className="booking-field-children">
          <label>BARN</label>
          <div className="counter-controls">
            <button
              onClick={() => handleChildrenChange(children - 1)}
              type="button"
            >
              −
            </button>
            <span className="count-display">{children}</span>
            <button
              onClick={() => handleChildrenChange(children + 1)}
              type="button"
            >
              +
            </button>
          </div>
        </article>

        {/* RAD 4 */}
        <footer className="button-row">
          <button
            onClick={handleSearch}
            type="button"
            className="booking-submit"
          >
            BOKA HOTELLRUM
          </button>
        </footer>

        {/* RAD 5 */}
        {children > 0 && (
          <article className="child-ages-section">
            <p className="child-ages-text">
              Ange ålder på barnen vid incheckning:
            </p>
            <div className="age-inputs-grid">
              {Array.from({ length: children }).map((_, index) => (
                <div className="age-input-field" key={index}>
                  <label>Barn {index + 1}</label>
                  <select
                    value={childAges[index] || ""}
                    onChange={(e) => updateChildAge(index, e.target.value)}
                  >
                    <option value="">Välj ålder</option>
                    {Array.from({ length: 13 }).map((_, age) => (
                      <option key={age} value={age}>
                        {age} år
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </article>
        )}
      </div>
    </section>
  );
};

export default BookingBar;
