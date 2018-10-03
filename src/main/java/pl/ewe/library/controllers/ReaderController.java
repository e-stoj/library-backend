package pl.ewe.library.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.ewe.library.model.Reader;
import pl.ewe.library.repositories.ReaderRepository;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class ReaderController {

    @Autowired
    ReaderRepository readerRepository;

    @GetMapping("/readers")
    public List<Reader> getAllBooks() {
        Iterable<Reader> books = readerRepository.findAll();
        return (List<Reader>) books;
    }

    @PostMapping("/readers")
    public ResponseEntity addBook(@RequestBody Reader reader) {
        readerRepository.save(reader);
        return new ResponseEntity(HttpStatus.OK);
    }
}
