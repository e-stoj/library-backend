package pl.ewe.library.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.ewe.library.model.Author;
import pl.ewe.library.model.Book;
import pl.ewe.library.repositories.AuthorRepository;

import java.util.List;

@RestController
public class AuthorController {

    @Autowired
    AuthorRepository authorRepository;

    @GetMapping("/authors")
    public List<Author> getAllAuthors() {
        Iterable<Author> authors = authorRepository.findAll();
        return (List<Author>) authors;
    }

    @PostMapping("/authors")
    public ResponseEntity addBook(@RequestBody Author author) {
        authorRepository.save(author);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("author/id/books")
    public List<Book> getAuthorBooks(@RequestParam int id) {
        Author author = authorRepository.findById(id).orElseThrow(() -> new RuntimeException("Book with such id doesn't exist"));
        return author.getListOfBooks();
    }
}
