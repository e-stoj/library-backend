package pl.ewe.library.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
public class BookOrder {

    @Id
    @GeneratedValue
    private Integer orderId;
    @ManyToOne
    private Book borrowedBook;
    @ManyToOne
    private User user;
    private LocalDate dateOfBorrow;
    private LocalDate dateToReturn;
    private LocalDate dateOfReturn;

    public BookOrder(Book borrowedBook, User user) {
        this.borrowedBook = borrowedBook;
        this.user = user;
        this.dateOfBorrow = LocalDate.now();
        this.dateToReturn = dateOfBorrow.plusDays(21);
    }

    public BookOrder() {
        this.dateOfBorrow = LocalDate.now();
        this.dateToReturn = dateOfBorrow.plusDays(21);
    }

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public Book getBorrowedBook() {
        return borrowedBook;
    }

    public void setBorrowedBook(Book borrowedBook) {
        this.borrowedBook = borrowedBook;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public LocalDate getDateOfBorrow() {
        return dateOfBorrow;
    }

    public void setDateOfBorrow(LocalDate dateOfBorrow) {
        this.dateOfBorrow = dateOfBorrow;
    }

    public LocalDate getDateToReturn() {
        return dateToReturn;
    }

    public void setDateToReturn(LocalDate dateToReturn) {
        this.dateToReturn = dateToReturn;
    }

    public LocalDate getDateOfReturn() {
        return dateOfReturn;
    }

    public void setDateOfReturn(LocalDate dateOfReturn) {
        this.dateOfReturn = dateOfReturn;
    }
}

