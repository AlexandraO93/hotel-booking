package com.hotel.booking.dto;

import java.time.LocalDate;

public record RoomAvailabilityDTO(
    Long roomNumber,
    boolean available,
    LocalDate start,
    LocalDate end
) {
    
}