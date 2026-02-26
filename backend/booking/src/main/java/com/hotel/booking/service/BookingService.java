package com.hotel.booking.service;

import java.time.LocalDate;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.hotel.booking.dto.BookingRequestDTO;
import com.hotel.booking.dto.BookingResponseDTO;
import com.hotel.booking.dto.RoomWithBookingsResponseDTO;
import com.hotel.booking.dto.UserWithBookingsResponseDTO;
import com.hotel.booking.mapper.BookingMapper;
import com.hotel.booking.model.Booking;
import com.hotel.booking.model.Guest;
import com.hotel.booking.model.Room;
import com.hotel.booking.repository.BookingRepository;

@Service
public class BookingService {
    private static final Logger logger = LoggerFactory.getLogger(BookingService.class);
    private RoomService roomService;
    private BookingRepository bookingRepository;
    private BookingMapper bookingMapper;

    public BookingService(RoomService roomService, BookingMapper bookingMapper, BookingRepository bookingRepository) {
        this.roomService = roomService;
        this.bookingMapper = bookingMapper;
        this.bookingRepository = bookingRepository;
    }

    public BookingResponseDTO createBooking (BookingRequestDTO bookingDto) {
        logger.info("Skapar bokning för gästen: {}", bookingDto.guest());

        if (bookingDto.checkInDate().isAfter(bookingDto.checkOutDate())) {
            throw new IllegalArgumentException("Check-in date must be before check-out date.");
        } 
        
        if (bookingDto.numberOfChildren() != bookingDto.childrenAges().size()) {
            throw new IllegalArgumentException("Number of children does not match children ages list.");
        }

        Room room = roomService.getRoomEntity(bookingDto.roomNumber());

        if (!roomService.isRoomAvailable(room.getRoomNumber(), bookingDto.checkInDate(), bookingDto.checkOutDate())) {
            throw new IllegalArgumentException("Room is not available for the selected dates.");
        }

        int totalGuests = bookingDto.numberOfAdults() + bookingDto.numberOfChildren();
        if (totalGuests > room.getCapacity()) {
            throw new IllegalArgumentException("Room capacity exceeded.");
        }

        Guest guest = bookingMapper.toGuest(bookingDto.guest());
        
            
        Booking booking = bookingMapper.toBooking(bookingDto, guest, room);

        Booking saved = bookingRepository.save(booking);

        return bookingMapper.toDto(saved);
    }

    public BookingResponseDTO updateBooking(BookingRequestDTO dto, Long id) {
    logger.info("Uppdaterar bokning med id: {}", id);

    Booking booking = bookingRepository.findById(id)
        .orElseThrow(() -> new NoSuchElementException("Ingen bokning i databasen med id: " + id));

    if (dto.checkInDate().isAfter(dto.checkOutDate())) {
        throw new IllegalArgumentException("Check-in date must be before check-out date.");
    }

    if (dto.numberOfChildren() != dto.childrenAges().size()) {
        throw new IllegalArgumentException("Number of children does not match children ages list.");
    }

    Room room = roomService.getRoomEntity(dto.roomNumber());

    if (!roomService.isRoomAvailableForUpdate(room.getRoomNumber(), dto.checkInDate(), dto.checkOutDate(), id)) {
        throw new IllegalArgumentException("Room is not available for the selected dates.");
    }

    int totalGuests = dto.numberOfAdults() + dto.numberOfChildren();
    if (totalGuests > room.getCapacity()) {
        throw new IllegalArgumentException("Room capacity exceeded.");
    }

    bookingMapper.updateBookingFromDto(booking, dto, room);

    Booking updated = bookingRepository.save(booking);

    logger.info("Bokning med id {} uppdaterad", id);
    return bookingMapper.toDto(updated);
}

    public void deleteBookingById(Long id) {
        logger.info("Tar bort bokning med id: {}", id);
        Booking booking = bookingRepository.findById(id)
            .orElseThrow(() -> new NoSuchElementException("Ingen bokning i databasen med id: " + id));

        bookingRepository.delete(booking);
        logger.info("Bokning med id {} borttagen", id);
    }

    public BookingResponseDTO findBookingById(Long id) {
        logger.info("Hämtar bokning med id: {}", id);
        Optional<Booking> optional = bookingRepository.findById(id);
        if (optional.isEmpty()) {
            logger.warn("Bokning med id {} hittades inte", id);
            throw new NoSuchElementException("Ingen bokning i databasen med id: " + id);
        }
        return bookingMapper.toDto(optional.get());
    }

    public Page<BookingResponseDTO> findAllBookings(Pageable pageable) {
        logger.info("Hämtar alla bokningar");

        Page<Booking> bookingPage = bookingRepository.findAll(pageable);

        if (bookingPage.isEmpty()) {
            logger.info("Inga bokningar hittades i databasen");
            return Page.empty();
        }

        Page<BookingResponseDTO> bookingDtos = bookingPage.map(
            b -> bookingMapper.toDto(b)
            );
            
        return bookingDtos;
    }

    public UserWithBookingsResponseDTO findBookingsByGuestId
        (Long guestId, Pageable pageable) {
        Page<Booking> bookings = bookingRepository.findByGuestId(guestId, pageable);

        if (bookings.isEmpty()) {
            logger.info("Inga bokningar hittades för gäst med id: {}", guestId);
            throw new NoSuchElementException("Ingen gäst i databasen med id: " + guestId);
        }

        Guest guest = bookings.getContent().get(0).getGuest();

         Page<BookingResponseDTO> bookingDtos = bookings.map(
            b -> bookingMapper.toDto(b)
            );

        return new UserWithBookingsResponseDTO(
                guest.getId(),
                guest.getName(),
                guest.getEmail(),
                bookingDtos
        );
    }

    public RoomWithBookingsResponseDTO findBookingsByRoomNumber
        (Long roomNumber, Pageable pageable) {
            Room room = roomService.getRoomEntity(roomNumber);

            Page<Booking> bookings = bookingRepository.findByRoom(room, pageable);

            if(bookings.isEmpty()) {
                logger.info("Inga bokningar hittades för rum med nummer: {}", roomNumber);
                throw new NoSuchElementException("Inget rum i databasen med nummer: " + roomNumber);
            }

             Page<BookingResponseDTO> bookingDtos = bookings.map(
                b -> bookingMapper.toDto(b)
                );

        return new RoomWithBookingsResponseDTO(
            room.getRoomNumber(),
            bookingDtos
        );
    }

    public Page<BookingResponseDTO> findBookingsBetween
        (LocalDate start, LocalDate end, Pageable pageable) {
        Page<Booking> bookings = bookingRepository.findByCheckInDateBetween(start, end, pageable);

        if(bookings.isEmpty()) {
            logger.info("Inga bokningar hittades mellan {} och {}", start, end);
            throw new NoSuchElementException("Inga bokningar i databasen mellan: " + start + " och " + end);
        }

        Page<BookingResponseDTO> bookingDtos = bookings.map(
            b -> bookingMapper.toDto(b)
            );
            
            return bookingDtos;   
    }
}
        
