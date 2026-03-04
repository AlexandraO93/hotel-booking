import React, { useState } from "react";
import "./BookingBar.css";

const BookingBar = () => {
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [childAges, setChildAges] = useState([]);

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

  return (
    <section className="booking-container">
      <div className="booking-grid">
        {/* RAD 1 */}
        <article className="booking-field-date">
          <label>CHECKA IN</label>
          <input type="date" defaultValue="2026-02-28" />
        </article>
        <article className="booking-field-date">
          <label>CHECKA UT</label>
          <input type="date" defaultValue="2026-03-01" />
        </article>

        {/* RAD 2 */}
        <article className="booking-field-room">
          <label>RUM</label>
          <div className="counter-controls">
            <button onClick={() => setRooms(Math.max(1, rooms - 1))}>−</button>
            <span className="count-display">{rooms}</span>
            <button onClick={() => setRooms(rooms + 1)}>+</button>
          </div>
        </article>

        {/* RAD 3 */}
        <article className="booking-field-adults">
          <label>VUXNA</label>
          <div className="counter-controls">
            <button onClick={() => setAdults(Math.max(1, adults - 1))}>−</button>
            <span className="count-display">{adults}</span>
            <button onClick={() => setAdults(adults + 1)}>+</button>
          </div>
        </article>
        <article className="booking-field-children">
          <label>BARN</label>
          <div className="counter-controls">
            <button onClick={() => handleChildrenChange(children - 1)}>−</button>
            <span className="count-display">{children}</span>
            <button onClick={() => handleChildrenChange(children + 1)}>+</button>
          </div>
        </article>

        {/* RAD 4 */}
        <footer className="button-row">
          <button type="submit" className="booking-submit">BOKA HOTELLRUM</button>
        </footer>

        {/* RAD 5 */}
        {children > 0 && (
          <article className="child-ages-section">
            <p className="child-ages-text">Ange ålder på barnen vid incheckning:</p>
            <div className="age-inputs-grid">
              {Array.from({ length: Number(children) }).map((_, index) => (
                <div className="age-input-field" key={index}>
                  <label>Barn {index + 1}</label>
                  <select>
                    <option value="">Välj ålder</option>
                    {Array.from({ length: 13 }).map((_, age) => (
                      <option key={age} value={age + 1}>
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