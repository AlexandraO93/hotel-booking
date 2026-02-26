package com.hotel.booking.mapper;

import org.springframework.stereotype.Component;

import com.hotel.booking.dto.RoomRequestDTO;
import com.hotel.booking.dto.RoomResponseDTO;
import com.hotel.booking.model.Room;

@Component
public class RoomMapper {

    public Room toRoom(RoomRequestDTO dto) {
        return new Room(
            dto.roomNumber(),
            dto.bedType(),
            dto.pricePerNight().doubleValue(),
            dto.capacity()
        );
    }

    public RoomResponseDTO toDto(Room room) {
        return new RoomResponseDTO(
            room.getRoomNumber(),
            room.getBedType(),
            room.getPricePerNight().doubleValue(),
            room.getCapacity()
        );
    }
    
}
