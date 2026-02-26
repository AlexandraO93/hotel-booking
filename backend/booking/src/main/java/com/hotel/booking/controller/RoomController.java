package com.hotel.booking.controller;

import java.time.LocalDate;
import java.util.List;

import org.springdoc.core.annotations.ParameterObject;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.booking.dto.RoomAvailabilityDTO;
import com.hotel.booking.dto.RoomRequestDTO;
import com.hotel.booking.dto.RoomResponseDTO;
import com.hotel.booking.service.RoomService;

import jakarta.validation.Valid;




@RestController
@RequestMapping("/rooms")
public class RoomController {
    private final RoomService roomService;

    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @PostMapping
    public ResponseEntity<RoomResponseDTO> addRoom
        (@Valid @RequestBody RoomRequestDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(roomService.addRoom(dto));
    }

    @PutMapping("/{roomNumber}")
    public ResponseEntity<RoomResponseDTO> updateRoom
        (@PathVariable Long roomNumber, 
            @Valid @RequestBody RoomRequestDTO dto) {
        return ResponseEntity.ok().body(roomService.updateRoom(dto, roomNumber));
    }

    @GetMapping
    public ResponseEntity<Page<RoomResponseDTO>> getAllRooms
        (@ParameterObject @PageableDefault(
            size = 5,
            sort = "roomNumber",
            direction = Sort.Direction.ASC)
            Pageable pageable) {

        int size = pageable.getPageSize() <= 0 ? 5 : Math.min(pageable.getPageSize(), 5);
        Pageable fixed = PageRequest.of(pageable.getPageNumber(), size, pageable.getSort());
        
        return ResponseEntity.ok().body(roomService.getAllRooms(fixed));
    }

    @GetMapping("/{roomNumber}")
    public ResponseEntity<RoomResponseDTO> findRoomByNumber
        (@PathVariable Long roomNumber) {
        return ResponseEntity.ok().body(roomService.findRoomByNumber(roomNumber));
    }
    
    @GetMapping("/{roomNumber}/availability")
    public ResponseEntity<Boolean> checkRoomAvailability
        (@PathVariable Long roomNumber,
            @RequestParam LocalDate checkInDate,
            @RequestParam LocalDate checkOutDate) {
        boolean isAvailable = roomService.isRoomAvailable(roomNumber, checkInDate, checkOutDate);
        return ResponseEntity.ok().body(isAvailable);
    }

    @GetMapping("/available")
    public ResponseEntity<Page<RoomAvailabilityDTO>> getAvailableRooms
        (@RequestParam LocalDate startDate,
            @RequestParam LocalDate endDate,
            @ParameterObject @PageableDefault(
            size = 5,
            sort = "roomNumber",
            direction = Sort.Direction.ASC)
            Pageable pageable) {

        int size = pageable.getPageSize() <= 0 ? 5 : Math.min(pageable.getPageSize(), 5);
        Pageable fixed = PageRequest.of(pageable.getPageNumber(), size, pageable.getSort());
        
        Page<RoomAvailabilityDTO> availableRooms = roomService.getAvailableRooms(startDate, endDate, fixed);

        return ResponseEntity.ok().body(availableRooms);
    }

    @GetMapping("/booked")
    public ResponseEntity<List<RoomAvailabilityDTO>> getAllBookedRooms
        (@RequestParam LocalDate startDate,
            @RequestParam LocalDate endDate) {
        List<RoomAvailabilityDTO> bookedRooms = roomService.getAllBookedRooms(startDate, endDate);
        return ResponseEntity.ok().body(bookedRooms);
    }    

    @GetMapping("/search")
    public ResponseEntity<List<RoomResponseDTO>> getRoomsByType(
        @RequestParam String bedType,
            @RequestParam double maxPrice,
            @RequestParam double minPrice,
            @RequestParam int capacity) {

        List<RoomResponseDTO> rooms = roomService.findRoomByType(bedType, maxPrice, minPrice, capacity);
        return ResponseEntity.ok().body(rooms);
    }   
}
