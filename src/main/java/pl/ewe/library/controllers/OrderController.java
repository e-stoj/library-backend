package pl.ewe.library.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.ewe.library.model.Book;
import pl.ewe.library.model.BookOrder;
import pl.ewe.library.repositories.OrderRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@RestController
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @GetMapping("/orders")
    public List<BookOrder> getAllOrders() {
        Iterable<BookOrder> orders = orderRepository.findAll();
        return (List<BookOrder>) orders;
    }

    @PostMapping("/orders")
    public ResponseEntity addOrder(@RequestBody BookOrder bookOrder) {
        List<Book> books = bookOrder.getBorrowedBooks().stream().filter(book -> !book.isAvailable()).collect(Collectors.toList());
        if(books.isEmpty()) {
            books.stream().forEach(book -> book.setAvailable(false));
            orderRepository.save(bookOrder);
            return new ResponseEntity(HttpStatus.OK);
        }
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body("At least one of books is not available");
    }

    @PutMapping("orders/id/return")
    public ResponseEntity returnOrder(@PathVariable int id) {
        BookOrder bookOrder = orderRepository.findById(id).orElseThrow(() -> new RuntimeException("BookOrder with such id doesn't exist"));
        bookOrder.setDateOfReturn(LocalDate.now());
        bookOrder.getBorrowedBooks().forEach(book -> book.setAvailable(true));
        return new ResponseEntity((HttpStatus.OK));
    }
}

