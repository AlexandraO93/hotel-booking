package com.hotel.booking.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hotel.booking.model.Room;

@Repository
public interface RoomRepository extends JpaRepository<Room,Long>{

    Optional<Room> findByRoomNumber(Long roomNumber);

    List<Room> findByBedTypeAndPricePerNightBetweenAndCapacityGreaterThanEqual
    (String bedType, double minPrice, double maxPrice, int capacity);
    
}
