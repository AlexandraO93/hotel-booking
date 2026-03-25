import "./Room.css";
import RoomCard from "../components/RoomCard";
import { roomsData } from "../data/roomsData";

export default function Room() {
  return (
    <div className="room-page-container">
      <header className="room-header">
        <h2 className="room-headline">Våra Rum</h2>
        <p className="room-subtext">
          Där modern arkitektur möter Roslagens orörda natur
        </p>
      </header>

      <section className="room-grid">
        {roomsData.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </section>
    </div>
  );
}