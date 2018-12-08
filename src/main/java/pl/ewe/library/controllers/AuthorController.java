package pl.ewe.library.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.ewe.library.model.Author;
import pl.ewe.library.model.Book;
import pl.ewe.library.repositories.AuthorRepository;

import java.util.List;

@CrossOrigin(origins = "*", allowCredentials = "true", maxAge = 3600L)
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
    public ResponseEntity addAuthor(@RequestBody Author author) {
        authorRepository.save(author);
        return new ResponseEntity(HttpStatus.OK);
    }
}
