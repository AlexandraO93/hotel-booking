package com.hotel.booking.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hotel.booking.model.Booking;
import com.hotel.booking.model.Room;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long>{

    Page<Booking> findByGuestId(Long guestId, Pageable pageable);

    Page<Booking> findByRoom(Room room, Pageable pageable);

    Page<Booking> findByCheckInDateBetween(LocalDate start, LocalDate end, Pageable pageable);

    List<Booking> findByRoom(Room room);

    List<Booking> findByCheckInDateBetween(LocalDate start, LocalDate end);

    @Query("""
        SELECT b FROM Booking b
        WHERE b.room = :room
        AND b.checkInDate <= :end
        AND b.checkOutDate >= :start
    """)
    List<Booking> findOverlappingBookings(Room room, LocalDate start, LocalDate end);

    @Query("""
        SELECT b FROM Booking b 
        WHERE b.room.roomNumber = :roomNumber
        AND b.id <> :bookingId
        AND b.checkOutDate > :start
        AND b.checkInDate < :end
    """)
    List<Booking> findConflictingBookings(Long roomNumber, LocalDate start, LocalDate end, Long bookingId);
}
