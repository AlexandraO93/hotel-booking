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
    <div className="booking-container">
  <div className="booking-grid">
    {/* RAD 1 */}
    <div className="booking-field">
      <label>CHECKA IN</label>
      <input type="date" defaultValue="2026-02-28" />
    </div>
    <div className="booking-field">
      <label>CHECKA UT</label>
      <input type="date" defaultValue="2026-03-01" />
    </div>

    {/* RAD 2 */}
    <div className="booking-field">
      <label>RUM</label>
      <div className="counter-controls">
        <button onClick={() => setRooms(Math.max(1, rooms - 1))}>−</button>
        <span className="count-display">{rooms}</span>
        <button onClick={() => setRooms(rooms + 1)}>+</button>
      </div>
    </div>

    {/* RAD 3 */}
    <div className="booking-field">
      <label>VUXNA</label>
      <div className="counter-controls">
        <button onClick={() => setAdults(Math.max(1, adults - 1))}>−</button>
        <span className="count-display">{adults}</span>
        <button onClick={() => setAdults(adults + 1)}>+</button>
      </div>
    </div>
    <div className="booking-field">
      <label>BARN</label>
      <div className="counter-controls">
        <button onClick={() => handleChildrenChange(children - 1)}>−</button>
        <span className="count-display">{children}</span>
        <button onClick={() => handleChildrenChange(children + 1)}>+</button>
      </div>
    </div>

    {/* RAD 4 */}
    <div className="button-row">
      <button type="submit" className="booking-submit">BOKA HOTELLRUM</button>
    </div>

    {/* RAD 5 */}
    {children > 0 && (
      <div className="child-ages-section">
        <p>Ange ålder på barnen vid incheckning:</p>
        <div className="age-inputs-grid">
           {/* Din befintliga ålders-loop här */}
        </div>
      </div>
      )}
    </div>
    </div>
  );
};

export default BookingBar;