package com.hotel.booking.mapper;

import org.springframework.stereotype.Component;

import com.hotel.booking.dto.BookingRequestDTO;
import com.hotel.booking.dto.BookingResponseDTO;
import com.hotel.booking.dto.GuestRequestDTO;
import com.hotel.booking.model.Booking;
import com.hotel.booking.model.Guest;
import com.hotel.booking.model.Room;

@Component
public class BookingMapper {

    public Guest toGuest (GuestRequestDTO dto) {
        return new Guest(
            dto.name(),
            dto.email(),
            dto.address(),
            dto.phoneNumber()
        );
    }

    public Booking toBooking(BookingRequestDTO dto, Guest guest, Room room) {
        return new Booking(
            dto.numberOfAdults(),
            dto.numberOfChildren(),
            dto.childrenAges(),
            dto.checkInDate(),
            dto.checkOutDate(),
            dto.breakfastIncluded(),
            dto.dinnerIncluded(),
            guest,
            room
        );
    }

    public BookingResponseDTO toDto (Booking booking) {
        return new BookingResponseDTO(
            booking.getId(),
            booking.getGuest().getName(),
            booking.getRoom().getRoomNumber(),
            booking.getCheckInDate(),
            booking.getCheckOutDate(),
            booking.isBreakfastIncluded(),
            booking.isDinnerIncluded(),
            booking.getNumberOfAdults(),
            booking.getNumberOfChildren(),
            0,
            "Bokning sparad"
        );
    }

    public void updateBookingFromDto(Booking booking, BookingRequestDTO dto, Room room) {
        booking.setNumberOfAdults(dto.numberOfAdults());
        booking.setNumberOfChildren(dto.numberOfChildren());
        booking.setChildrenAges(dto.childrenAges());
        booking.setCheckInDate(dto.checkInDate());
        booking.setCheckOutDate(dto.checkOutDate());
        booking.setBreakfastIncluded(dto.breakfastIncluded());
        booking.setDinnerIncluded(dto.dinnerIncluded());
        booking.setRoom(room);

        // Uppdatera guest
        booking.getGuest().setName(dto.guest().name());
        booking.getGuest().setEmail(dto.guest().email());
        booking.getGuest().setPhonenumber(dto.guest().phoneNumber());
        booking.getGuest().setAddress(dto.guest().address());
    }
}
