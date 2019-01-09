package pl.ewe.library.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Book {

    @Id
    @GeneratedValue
    private Integer bookId;
    @OneToOne
    private BookLocation location;
    private String author;
    private String title;
    private String publishingHouse;
    private Integer yearOfPublish;
    private String type;
    private boolean isAvailable;
    private Integer ordersAmount;
    private String descryption;

    public Book(BookLocation location, String author, String title, String publishingHouse, Integer yearOfPublish, String type, String descryption) {
        this.location = location;
        this.author = author;
        this.title = title;
        this.publishingHouse = publishingHouse;
        this.yearOfPublish = yearOfPublish;
        this.type = type;
        this.isAvailable = true;
        this.descryption = descryption;
    }

    public Book() {
        this.isAvailable = true;
    }

    public Integer getBookId() {
        return bookId;
    }

    public void setBookId(Integer bookId) {
        this.bookId = bookId;
    }

    public BookLocation getLocation() {
        return location;
    }

    public void setLocation(BookLocation location) {
        this.location = location;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPublishingHouse() {
        return publishingHouse;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setPublishingHouse(String publishingHouse) {
        this.publishingHouse = publishingHouse;
    }

    public Integer getYearOfPublish() {
        return yearOfPublish;
    }

    public void setYearOfPublish(Integer yearOfPublish) {
        this.yearOfPublish = yearOfPublish;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    public void setAvailable(boolean available) {
        isAvailable = available;
    }

    public Integer getOrdersAmount() {
        return ordersAmount;
    }

    public void setOrdersAmount(Integer ordersAmount) {
        this.ordersAmount = ordersAmount;
    }

    public String getDescryption() {
        return descryption;
    }

    public void setDescryption(String descryption) {
        this.descryption = descryption;
    }
}
