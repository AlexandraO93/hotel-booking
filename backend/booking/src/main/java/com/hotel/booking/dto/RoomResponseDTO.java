package com.hotel.booking.dto;

public record RoomResponseDTO(
    Long roomNumber,
    String bedType,
    Double pricePerNight,
    int capacity
) {
    
}
