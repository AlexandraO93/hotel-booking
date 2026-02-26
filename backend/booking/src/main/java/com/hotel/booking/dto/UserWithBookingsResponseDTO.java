package com.hotel.booking.dto;

import org.springframework.data.domain.Page;

public record UserWithBookingsResponseDTO(
    Long id,
    String name,
    String email,
    Page<BookingResponseDTO> bookings
) {
    
}