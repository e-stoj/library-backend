package pl.ewe.library.model;

import javax.persistence.*;

@Entity
public class Reader {

    @Id
    @GeneratedValue
    private Integer readerId;
    private String name;
    private String surname;

    public Reader(String name, String surname) {
        this.name = name;
        this.surname = surname;
    }

    public Reader() {
    }

    public Integer getReaderId() {
        return readerId;
    }

    public void setReaderId(Integer readerId) {
        this.readerId = readerId;
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

}
