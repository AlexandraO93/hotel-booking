package com.hotel.booking.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record GuestRequestDTO (
    @NotBlank(message = "Namn måste anges")
    String name,

    @Email(message = "Ogiltig e-postadress")
    String email,
    
    @NotBlank(message = "Telefonnummer måste anges")
    String phoneNumber,

    String address
){
}
