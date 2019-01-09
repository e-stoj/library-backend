package pl.ewe.library.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.ewe.library.model.Book;
import pl.ewe.library.model.BookOrder;
import pl.ewe.library.model.User;
import pl.ewe.library.repositories.BookRepository;
import pl.ewe.library.repositories.OrderRepository;
import pl.ewe.library.repositories.UserRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", allowCredentials = "true", maxAge = 3600L)
@RestController
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private BookRepository bookRepository;
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/orders")
    public List<BookOrder> getAllOrders() {
        Iterable<BookOrder> orders = orderRepository.findAll();
        return (List<BookOrder>) orders;
    }

    @PostMapping("/books/{bookId}/order/{userId}")
    public ResponseEntity addOrder(@PathVariable Integer bookId, @PathVariable Integer userId, @RequestBody BookOrder bookOrder) {
        Book book = bookRepository.findById(bookId).orElseThrow(() -> new RuntimeException("book doesn't exist"));
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("user doesn't exist"));
        bookOrder.setUser(user);
        if(book.isAvailable()) {
            bookOrder.setBorrowedBook(book);
            book.setOrdersAmount(book.getOrdersAmount()+1);
            book.setAvailable(false);
            orderRepository.save(bookOrder);
            return new ResponseEntity(HttpStatus.OK);
        }
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body("At least one of books is not available");
    }

    @PutMapping("orders/{id}/return")
    public ResponseEntity returnOrder(@PathVariable int id) {
        BookOrder bookOrder = orderRepository.findById(id).orElseThrow(() -> new RuntimeException("BookOrder with such id doesn't exist"));
        bookOrder.setDateOfReturn(LocalDate.now());
        bookOrder.getBorrowedBook().setAvailable(true);
        orderRepository.deleteById(id);
        return new ResponseEntity((HttpStatus.OK));
    }
}

