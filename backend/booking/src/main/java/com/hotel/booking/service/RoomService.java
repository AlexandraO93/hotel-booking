package com.hotel.booking.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.PageImpl;

import com.hotel.booking.repository.BookingRepository;
import com.hotel.booking.repository.RoomRepository;
import com.hotel.booking.dto.RoomAvailabilityDTO;
import com.hotel.booking.dto.RoomRequestDTO;
import com.hotel.booking.dto.RoomResponseDTO;
import com.hotel.booking.mapper.RoomMapper;
import com.hotel.booking.model.Booking;
import com.hotel.booking.model.Room;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class RoomService {
    private static final Logger logger = LoggerFactory.getLogger(RoomService.class);
    private RoomRepository roomRepository;
    private BookingRepository bookingRepository;
    private RoomMapper roomMapper;

    public RoomService (RoomRepository roomRepository, BookingRepository bookingRepository, RoomMapper roomMapper) {
        this.roomRepository = roomRepository;
        this.bookingRepository = bookingRepository;
        this.roomMapper = roomMapper;
    }

    public RoomResponseDTO addRoom (RoomRequestDTO dto) {
        logger.info("Lägger till rum med nummer: {}", dto.roomNumber());

        if (roomRepository.findByRoomNumber(dto.roomNumber()).isPresent()) {
        throw new IllegalArgumentException("Room number " + dto.roomNumber() + " already exists.");
        }

        Room room = roomMapper.toRoom(dto);
        Room saved = roomRepository.save(room);
        
        return roomMapper.toDto(saved);
    }

    public RoomResponseDTO updateRoom (RoomRequestDTO dto, Long roomNumber) {
        logger.info("Uppdaterar rum med nummer: {}", roomNumber);

        Optional<Room> optional = roomRepository.findByRoomNumber(roomNumber);

        if(optional.isEmpty()) {
            logger.warn("Kunde inte uppdatera. Rum med nummer {} hittades inte", roomNumber);
            throw new RuntimeException("Rum med nummer " + roomNumber + " hittades inte");
        }

        Room room = optional.get();

        room.setBedType(dto.bedType());
        room.setPricePerNight(dto.pricePerNight());
        room.setCapacity(dto.capacity());

        Room updated = roomRepository.save(room);

        return roomMapper.toDto(updated);
    }

    public Page<RoomResponseDTO> getAllRooms(Pageable pageable) {
        logger.info("Hämtar alla rum");

        Page<Room> rooms = roomRepository.findAll(pageable);

        if(rooms.isEmpty()) {
            logger.warn("Inga rum hittades i databasen");
            return Page.empty();
        }

        Page<RoomResponseDTO> roomDtos = rooms.map(roomMapper::toDto);
        
        return roomDtos;
    }

    public RoomResponseDTO findRoomByNumber (Long roomNumber) {
        logger.info("Hämtar rum med id; {}", roomNumber);

        Optional<Room> room = roomRepository.findByRoomNumber(roomNumber);
       
        if (room.isEmpty()) {
            logger.warn("Rum med nummer {} hittades inte", roomNumber);
            throw new RuntimeException ("Rum med nummer " + roomNumber + " hittades inte");
        } else {
            return roomMapper.toDto(room.get());
        }
    }

    public boolean isRoomAvailable(Long roomNumber, LocalDate checkIn, LocalDate checkOut) {
        logger.info("Kollar tillgänglighet för rum med nummer: {}", roomNumber);

        Room room = getRoomEntity(roomNumber);
        List<Booking> overlappingBookings = bookingRepository.findOverlappingBookings(room, checkIn, checkOut);

        return overlappingBookings.isEmpty();
    }

    public Page<RoomAvailabilityDTO> getAvailableRooms(LocalDate startDate, LocalDate endDate, Pageable pageable) {
        logger.info("Hämtar tillgängliga rum mellan {} och {}", startDate, endDate);

        List<RoomAvailabilityDTO> availableRooms = roomRepository.findAll().stream()
                .filter(room -> isRoomAvailable(room.getRoomNumber(), startDate, endDate))
                .map(room -> new RoomAvailabilityDTO(
                    room.getRoomNumber(),
                    true,
                    startDate,
                    endDate
                ))
                .toList();
        int start = (int) pageable.getOffset();
        int end = Math.min((start + pageable.getPageSize()), availableRooms.size());

        List<RoomAvailabilityDTO> pageContent =
                start > availableRooms.size() ? List.of() : availableRooms.subList(start, end);
        return new PageImpl<>(pageContent, pageable, availableRooms.size());
    }

    public List<RoomAvailabilityDTO> getAllBookedRooms(LocalDate startDate, LocalDate endDate) {
        logger.info("Hämtar alla bokade rum mellan {} och {}", startDate, endDate);

        List<Room> allRooms = roomRepository.findAll();

        return allRooms.stream()
            .filter(room -> !isRoomAvailable(room.getRoomNumber(), startDate, endDate))
            .map(room -> new RoomAvailabilityDTO(
                room.getRoomNumber(),
                false,
                startDate,
                endDate
            ))
            .toList();
    }

    public List<RoomResponseDTO> findRoomByType (String bedType, double maxPrice, double minPrice, int capacity) {
        logger.info("Hämtar rum med bedType: {}, maxPrice: {}, minPrice: {}, capacity: {}", bedType, maxPrice, minPrice, capacity);

        List<Room> rooms = roomRepository.findByBedTypeAndPricePerNightBetweenAndCapacityGreaterThanEqual(bedType, minPrice, maxPrice, capacity);

        if(rooms.isEmpty()) {
            logger.warn("Inga rum hittades med bedType: {}, maxPrice: {}, minPrice: {}, capacity: {}", bedType, maxPrice, minPrice, capacity);
            return List.of();
        } 

        return rooms.stream()
            .map(roomMapper::toDto)
            .toList();
    }
    

    public Room getRoomEntity(Long roomNumber) {
        return roomRepository.findByRoomNumber(roomNumber)
            .orElseThrow(() -> new RuntimeException("Rum med nummer " + roomNumber + " hittades inte"));
    }

    public boolean isRoomAvailableForUpdate(Long roomNumber, LocalDate start, LocalDate end, Long bookingId) {
        return bookingRepository.findConflictingBookings(roomNumber, start, end, bookingId).isEmpty();
    }
}
