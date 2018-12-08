package pl.ewe.library.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
public class BookOrder {

    @Id
    @GeneratedValue
    private Integer orderId;
    @ManyToMany
    private List<Book> borrowedBooks;
    @ManyToOne
    private User user;
    private LocalDate dateOfBorrow;
    private LocalDate dateToReturn;
    private LocalDate dateOfReturn;

    public BookOrder(List<Book> borrowedBooks, User user, LocalDate dateOfBorrow) {
        this.borrowedBooks = borrowedBooks;
        this.user = user;
        this.dateOfBorrow = dateOfBorrow;
        this.dateToReturn = dateOfBorrow.plusDays(21);
    }

    public BookOrder() {
    }

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public List<Book> getBorrowedBooks() {
        return borrowedBooks;
    }

    public void setBorrowedBooks(List<Book> borrowedBooks) {
        this.borrowedBooks = borrowedBooks;
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

