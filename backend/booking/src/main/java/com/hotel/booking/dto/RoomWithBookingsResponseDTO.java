package com.hotel.booking.dto;

import org.springframework.data.domain.Page;

public record RoomWithBookingsResponseDTO(
    Long roomNumber,
    Page<BookingResponseDTO> bookings
) {

}
