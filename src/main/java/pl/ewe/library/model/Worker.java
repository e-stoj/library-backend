package pl.ewe.library.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Worker {

    @Id
    @GeneratedValue
    private Integer workerId;
    private String name;
    private String surname;
    private int salary;

    public Worker(int workerId, String name, String surname, int salary) {
        this.workerId = workerId;
        this.name = name;
        this.surname = surname;
        this.salary = salary;
    }

    public Worker() {
    }

    public Integer getWorkerId() {
        return workerId;
    }

    public void setWorkerId(int workerId) {
        this.workerId = workerId;
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

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }
}
