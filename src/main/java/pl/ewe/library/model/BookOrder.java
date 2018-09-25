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
    private Worker worker;

    @ManyToOne
    private Reader reader;
    private LocalDate dateOfBorrow;
    private LocalDate dateToReturn;
    private LocalDate dateOfReturn;

    public BookOrder(List<Book> borrowedBooks, Worker worker, Reader reader, LocalDate dateOfBorrow, LocalDate dateToReturn, LocalDate dateOfReturn) {
        this.borrowedBooks = borrowedBooks;
        this.worker = worker;
        this.reader = reader;
        this.dateOfBorrow = dateOfBorrow;
        this.dateToReturn = dateToReturn;
        this.dateOfReturn = dateOfReturn;
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

    public Worker getWorker() {
        return worker;
    }

    public void setWorker(Worker worker) {
        this.worker = worker;
    }

    public Reader getReader() {
        return reader;
    }

    public void setReader(Reader reader) {
        this.reader = reader;
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

