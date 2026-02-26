package com.hotel.booking.dto;

import java.time.LocalDate;

public record BookingResponseDTO (
    Long bookingId,
    String guestName,
    Long roomNumber,
    LocalDate checkInDate,
    LocalDate checkOutDate,
    boolean breakfastIncluded,
    boolean dinnerIncluded,
    int numberOfAdults,
    int numberOfChildren,
    int totalPrice,
    String message
) {
    
}
