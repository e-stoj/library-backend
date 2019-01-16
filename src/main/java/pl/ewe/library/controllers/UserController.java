package pl.ewe.library.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.ewe.library.model.BookOrder;
import pl.ewe.library.model.User;
import pl.ewe.library.model.UserDetails;
import pl.ewe.library.repositories.OrderRepository;
import pl.ewe.library.repositories.UserRepository;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", allowCredentials = "true", maxAge = 3600L)
@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody UserDetails userDetails) {
        User user = userRepository.findByUsername(userDetails.getUsername());
        if(user != null && user.getPassword().equals(userDetails.getPassword())) {
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(user);
        }
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body("such user doesn't exist");
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        Iterable<User> users = userRepository.findAll();
        return (List<User>) users;
    }

    @PostMapping("/users")
    public ResponseEntity addUser(@RequestBody User user) {
        userRepository.save(user);
        return new ResponseEntity(HttpStatus.OK);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity deleteUser(@PathVariable Integer id) {
        userRepository.deleteById(id);
        return  new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/users/{id}/orders")
    public List<BookOrder> getUserCurrentOrders(@PathVariable Integer id) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("no such user"));
        Iterable<BookOrder> orderIterable = orderRepository.findAll();
        List<BookOrder> orderList = (List<BookOrder>) orderIterable;
        return orderList.stream().filter(order -> order.getUser().getId().equals(id)).collect(Collectors.toList());
    }
}
