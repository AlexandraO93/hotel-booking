package com.hotel.booking.dto;

import java.time.LocalDate;
import java.util.List;


import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public record BookingRequestDTO (

    @Min(value = 1, message = "Minst 1 vuxen måste anges")
    int numberOfAdults,

    @Min(value = 0, message = "Antalet barn kan inte vara negativt")
    int numberOfChildren,

    @NotNull(message = "Check-in datum måste anges")
    LocalDate checkInDate,

    @NotNull(message = "Check-out datum måste anges")
    LocalDate checkOutDate,

    @NotNull(message = "Rumsnummer måste anges")
    Long roomNumber,

    @NotNull(message = "Gästinformation måste anges")
    GuestRequestDTO guest,

    boolean breakfastIncluded,
    boolean dinnerIncluded,
    List<Integer> childrenAges

) {
    @AssertTrue(message = "Check-out måste vara efter check-in")
    public boolean isNotSameDate() {
        return checkOutDate != null && checkInDate != null && checkOutDate.isAfter(checkInDate);
    }
}
