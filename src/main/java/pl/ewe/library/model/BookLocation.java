package pl.ewe.library.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class BookLocation {

    @Id
    @GeneratedValue
    private Integer locationId;
    private int bookcaseNumber;
    private int shelfNumber;
    private int locationOnShelf;
    private boolean isFree;

    public BookLocation(int bookcaseNumber, int shelfNumber, int locationOnShelf) {
        this.bookcaseNumber = bookcaseNumber;
        this.shelfNumber = shelfNumber;
        this.locationOnShelf = locationOnShelf;
        this.isFree = true;
    }

    public BookLocation() {
        this.isFree = true;
    }

    public Integer getLocationId() {
        return locationId;
    }

    public void setLocationId(Integer locationId) {
        this.locationId = locationId;
    }

    public int getBookcaseNumber() {
        return bookcaseNumber;
    }

    public void setBookcaseNumber(int bookcaseNumber) {
        this.bookcaseNumber = bookcaseNumber;
    }

    public int getShelfNumber() {
        return shelfNumber;
    }

    public void setShelfNumber(int shelfNumber) {
        this.shelfNumber = shelfNumber;
    }

    public int getLocationOnShelf() {
        return locationOnShelf;
    }

    public void setLocationOnShelf(int locationOnShelf) {
        this.locationOnShelf = locationOnShelf;
    }

    public boolean isFree() {
        return isFree;
    }

    public void setFree(boolean free) {
        isFree = free;
    }
}
