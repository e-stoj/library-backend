package pl.ewe.library.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.List;

@Entity
public class Author {

    @Id
    @GeneratedValue
    private Integer authorId;
    private String name;
    private String surname;

    @ManyToMany
    private List<Book> listOfBooks;

    private int yearOfBirth;

    public Author(String name, String surname, List<Book> listOfBooks, int yearOfBirth) {
        this.name = name;
        this.surname = surname;
        this.listOfBooks = listOfBooks;
        this.yearOfBirth = yearOfBirth;
    }

    public Author() {
    }

    public Integer getAuthorId() {
        return authorId;
    }

    public void setAuthorId(Integer authorId) {
        this.authorId = authorId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public List<Book> getListOfBooks() {
        return listOfBooks;
    }

    public void setListOfBooks(List<Book> listOfBooks) {
        this.listOfBooks = listOfBooks;
    }

    public int getYearOfBirth() {
        return yearOfBirth;
    }

    public void setYearOfBirth(int yearOfBirth) {
        this.yearOfBirth = yearOfBirth;
    }
}
