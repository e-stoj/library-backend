package pl.ewe.library.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;

import javax.persistence.*;
import java.util.LinkedList;
import java.util.List;

@Entity
public class User {
    @Id
    @GeneratedValue
    private Integer userId;
    private String name;
    private String surname;
    @Column(unique = true)
    private String username;
    private String password;
    @Column(unique = true)
    private String email;
    private String role;
    @OneToMany
    private List<BookOrder> currentOrders;

    public User(String name, String surname, String username, String password, String email, String role) {
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
        this.currentOrders = new LinkedList<>();
    }

    public User() {
        this.currentOrders = new LinkedList<>();
    }

    public Integer getId() {
        return userId;
    }

    public void setId(Integer userId) {
        this.userId = userId;
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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @JsonIgnore
    public String getPassword() {
        return password;
    }

    @JsonSetter("password")
    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public List<BookOrder> getCurrentOrders() {
        return currentOrders;
    }

    public void setCurrentOrders(List<BookOrder> currentOrders) {
        this.currentOrders = currentOrders;
    }
}
