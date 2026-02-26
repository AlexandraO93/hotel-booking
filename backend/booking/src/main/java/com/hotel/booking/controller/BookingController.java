package com.hotel.booking.controller;

import java.time.LocalDate;

import org.springdoc.core.annotations.ParameterObject;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.data.domain.Sort;

import com.hotel.booking.dto.BookingRequestDTO;
import com.hotel.booking.dto.BookingResponseDTO;
import com.hotel.booking.dto.RoomWithBookingsResponseDTO;
import com.hotel.booking.dto.UserWithBookingsResponseDTO;
import com.hotel.booking.service.BookingService;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/bookings")
public class BookingController {
    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping
    public ResponseEntity<BookingResponseDTO> createBooking 
        (@Valid @RequestBody BookingRequestDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(bookingService.createBooking(dto));
    }   

    @PutMapping("/{id}")
    public ResponseEntity<BookingResponseDTO> updateBooking
        (@PathVariable Long id, 
        @Valid @RequestBody BookingRequestDTO dto) {
            return ResponseEntity.ok().body(bookingService.updateBooking(dto, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBooking 
        (@PathVariable Long id) {
        bookingService.deleteBookingById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<BookingResponseDTO> findBookingById
        (@PathVariable Long id) {
        return ResponseEntity.ok().body(bookingService.findBookingById(id));
    }

    @GetMapping
    public ResponseEntity<Page<BookingResponseDTO>> findAllBookings(
        @ParameterObject @PageableDefault(
            size = 5,
            sort = "checkInDate",
            direction = Sort.Direction.DESC)
            Pageable pageable
    ) {
        int size = pageable.getPageSize() <= 0 ? 5 : Math.min(pageable.getPageSize(), 5);
        Pageable fixed = PageRequest.of(pageable.getPageNumber(), size, pageable.getSort());

        return ResponseEntity.ok().body(bookingService.findAllBookings(fixed));
    }

    @GetMapping ("/{id}/with-bookings")
    public ResponseEntity<UserWithBookingsResponseDTO> findBookingsByGuestId
        (@PathVariable Long id,
            @ParameterObject @PageableDefault(
                size = 5,
                sort = "checkInDate",
                direction = Sort.Direction.DESC)
                Pageable pageable
                ) {

                int size = pageable.getPageSize() <= 0 ? 5 : Math.min(pageable.getPageSize(), 5);
                Pageable fixed = PageRequest.of(pageable.getPageNumber(), size, pageable.getSort());

        return ResponseEntity.ok().body(bookingService.findBookingsByGuestId(id, fixed));
    }

    @GetMapping("/{roomNumber}/bookings")
    public ResponseEntity<RoomWithBookingsResponseDTO> findBookingsByRoomNumber
        (@PathVariable Long roomNumber,
            @ParameterObject @PageableDefault(
                size = 5,
                sort = "checkInDate",
                direction = Sort.Direction.DESC)
                Pageable pageable
        ) {
                int size = pageable.getPageSize() <= 0 ? 5 : Math.min(pageable.getPageSize(), 5);
                Pageable fixed = PageRequest.of(pageable.getPageNumber(), size, pageable.getSort());

        return ResponseEntity.ok().body(bookingService.findBookingsByRoomNumber(roomNumber, fixed));
    }
    
    @GetMapping("/between/{start}/{end}")
    public ResponseEntity<Page<BookingResponseDTO>> findBookingsBetween
        (@PathVariable LocalDate start, @PathVariable LocalDate end,
            @ParameterObject @PageableDefault(
                size = 5,
                sort = "checkInDate",
                direction = Sort.Direction.DESC)
                Pageable pageable
        ) {
                int size = pageable.getPageSize() <= 0 ? 5 : Math.min(pageable.getPageSize(), 5);
                Pageable fixed = PageRequest.of(pageable.getPageNumber(), size, pageable.getSort());

        return ResponseEntity.ok().body(bookingService.findBookingsBetween(start, end, fixed));
    }   
}

