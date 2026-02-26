package com.hotel.booking.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public record RoomRequestDTO(
    @NotNull(message = "Rumsnummer måste anges")
    Long roomNumber,
    
    String bedType,
    Double pricePerNight,
    
    @Min(value = 1, message = "Kapaciteten måste vara minst 1")
    int capacity
) {
    
}
