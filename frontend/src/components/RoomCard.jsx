import { useImagePreload } from "../hooks/useImagePreload";

export default function RoomCard({ room }) {
  const { image } = useImagePreload(
    room.imageSmall,
    room.imageLarge,
  );

  return (
    <article className="room-card">
      <img src={image} alt={room.alt} className="room-card-image" />

      <div className="room-card-content">
        <h3 className="description-title-room">{room.title}</h3>

        <p className="description-body-room">
          {room.intro}
          <br />
          <br />
          {room.highlight}
        </p>

        <div className="amenities-list">
          <p className="practical-info-title">I RUMMET INGÅR:</p>

          <ul className="practical-info-text">
            {room.amenities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="size-info">Storlek: {room.size}</p>
        </div>
      </div>
    </article>
  );
}
