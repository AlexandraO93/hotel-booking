package com.hotel.booking.model;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "bookings")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int numberOfAdults;
    private int numberOfChildren;
    @ElementCollection
    private List<Integer> childrenAges;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private boolean breakfastIncluded;
    private boolean dinnerIncluded;
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "guest_id", referencedColumnName = "id")
    private Guest guest;
    @ManyToOne
    private Room room;

    public Booking() {
    }

    public Booking(Long id,int numberOfAdults, int numberOfChildren, List<Integer> childrenAges, LocalDate checkInDate, LocalDate checkOutDate, boolean breakfastIncluded, boolean dinnerIncluded, Guest guest, Room room) {
        this.id = id;
        this.numberOfAdults = numberOfAdults;
        this.numberOfChildren = numberOfChildren;
        this.childrenAges = childrenAges;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.breakfastIncluded = breakfastIncluded;
        this.dinnerIncluded = dinnerIncluded;
        this.guest = guest;
        this.room = room;
    }

    public Booking(int numberOfAdults, int numberOfChildren, List<Integer> childrenAges, LocalDate checkInDate, LocalDate checkOutDate, boolean breakfastIncluded, boolean dinnerIncluded, Guest guest, Room room) {
        this.numberOfAdults = numberOfAdults;
        this.numberOfChildren = numberOfChildren;
        this.childrenAges = childrenAges;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.breakfastIncluded = breakfastIncluded;
        this.dinnerIncluded = dinnerIncluded;
        this.guest = guest;
        this.room = room;
    }

    
    /**
     * @return LocalDate return the checkInDate
     */
    public LocalDate getCheckInDate() {
        return checkInDate;
    }

    /**
     * @param checkInDate the checkInDate to set
     */
    public void setCheckInDate(LocalDate checkInDate) {
        this.checkInDate = checkInDate;
    }

    /**
     * @return LocalDate return the checkOutDate
     */
    public LocalDate getCheckOutDate() {
        return checkOutDate;
    }

    /**
     * @param checkOutDate the checkOutDate to set
     */
    public void setCheckOutDate(LocalDate checkOutDate) {
        this.checkOutDate = checkOutDate;
    }

    /**
     * @return boolean return the breakfastIncluded
     */
    public boolean isBreakfastIncluded() {
        return breakfastIncluded;
    }

    /**
     * @param breakfastIncluded the breakfastIncluded to set
     */
    public void setBreakfastIncluded(boolean breakfastIncluded) {
        this.breakfastIncluded = breakfastIncluded;
    }

    /**
     * @return boolean return the dinnerIncluded
     */
    public boolean isDinnerIncluded() {
        return dinnerIncluded;
    }

    /**
     * @param dinnerIncluded the dinnerIncluded to set
     */
    public void setDinnerIncluded(boolean dinnerIncluded) {
        this.dinnerIncluded = dinnerIncluded;
    }

    /**
     * @return Guest return the guest
     */
    public Guest getGuest() {
        return guest;
    }

    /**
     * @param guest the guest to set
     */
    public void setGuest(Guest guest) {
        this.guest = guest;
    }

    /**
     * @return Room return the room
     */
    public Room getRoom() {
        return room;
    }

    /**
     * @param room the room to set
     */
    public void setRoom(Room room) {
        this.room = room;
    }


    /**
     * @return int return the numberOfAdults
     */
    public int getNumberOfAdults() {
        return numberOfAdults;
    }

    /**
     * @param numberOfAdults the numberOfAdults to set
     */
    public void setNumberOfAdults(int numberOfAdults) {
        this.numberOfAdults = numberOfAdults;
    }

    /**
     * @return int return the numberOfChildren
     */
    public int getNumberOfChildren() {
        return numberOfChildren;
    }

    /**
     * @param numberOfChildren the numberOfChildren to set
     */
    public void setNumberOfChildren(int numberOfChildren) {
        this.numberOfChildren = numberOfChildren;
    }

    /**
     * @return List<Integer> return the childrenAges
     */
    public List<Integer> getChildrenAges() {
        return childrenAges;
    }

    /**
     * @param childrenAges the childrenAges to set
     */
    public void setChildrenAges(List<Integer> childrenAges) {
        this.childrenAges = childrenAges;
    }


    /**
     * @return Long return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

}
