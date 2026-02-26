package com.hotel.booking.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "rooms")
public class Room {
    @Id
    private Long roomNumber;
    private String bedType;
    private Double pricePerNight;
    private int capacity;

    public Room() {
    }

    public Room(Long roomNumber, String bedType, Double pricePerNight, int capacity) {
        this.roomNumber = roomNumber;
        this.bedType = bedType;
        this.pricePerNight = pricePerNight;
        this.capacity = capacity;
    }

    /**
     * @return Long return the roomNumber
     */
    public Long getRoomNumber() {
        return roomNumber;
    }

    /**
     * @param roomNumber the roomNumber to set
     */
    public void setRoomNumber(Long roomNumber) {
        this.roomNumber = roomNumber;
    }

    /**
     * @return String return the bedType
     */
    public String getBedType() {
        return bedType;
    }

    /**
     * @param bedType the bedType to set
     */
    public void setBedType(String bedType) {
        this.bedType = bedType;
    }
    
    /**
     * @return int return the capacity
     */
    public int getCapacity() {
        return capacity;
    }

    /**
     * @param capacity the capacity to set
     */
    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    /**
     * @return Double return the pricePerNight
     */
    public Double getPricePerNight() {
        return pricePerNight;
    }

    /**
     * @param pricePerNight the pricePerNight to set
     */
    public void setPricePerNight(Double pricePerNight) {
        this.pricePerNight = pricePerNight;
    }

}
