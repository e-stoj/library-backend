package pl.ewe.library.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.ewe.library.model.Book;
import pl.ewe.library.model.BookLocation;
import pl.ewe.library.repositories.BookRepository;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@RestController
public class BookController {

    @Autowired
    BookRepository bookRepository;

    @GetMapping("/books")
    public List<Book> getAllBooks() {
        Iterable<Book> books = bookRepository.findAll();
        return (List<Book>) books;
    }

    @PostMapping("/books")
    public ResponseEntity addBook(@RequestBody Book book) {
        bookRepository.save(book);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PutMapping("/books/{id}")
    public ResponseEntity changeBookLocation(@PathVariable Integer id, @RequestBody BookLocation bookLocation) {
        Book currentBook = bookRepository.findById(id).orElseThrow(() -> new RuntimeException("Book with such id doesn't exist"));
        currentBook.setLocation(bookLocation);
        return new ResponseEntity((HttpStatus.OK));
    }

    @GetMapping("/books/available")
    public List<Book> getAvailableBooks() {
        Iterable<Book> books = bookRepository.findAll();
        List<Book> bookList = (List<Book>) books;
        return bookList.stream().filter(book -> book.isAvailable()).collect(Collectors.toList());
     }
}
