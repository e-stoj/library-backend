package pl.ewe.library.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.ewe.library.model.BookLocation;
import pl.ewe.library.repositories.BookLocationRepository;
import pl.ewe.library.repositories.BookRepository;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", allowCredentials = "true", maxAge = 3600L)
@RestController
public class BookLocationController {

    @Autowired
    BookLocationRepository bookLocationRepository;

    @Autowired
    BookRepository bookRepository;

    @GetMapping("/books-locations")
    public List<BookLocation> getAllLocations() {
        Iterable<BookLocation> bookLocations = bookLocationRepository.findAll();
        return (List<BookLocation>) bookLocations;
    }

    @PostMapping("/book-location")
    public ResponseEntity addLocation(@RequestBody BookLocation bookLocation) {
        Iterable<BookLocation> bookLocations = bookLocationRepository.findAll();
        List<BookLocation> existingLocations = (List<BookLocation>) bookLocations;

        if (bookLocation.getLocationId() == null) {
            List<BookLocation> theSameLocation = existingLocations.stream()
                    .filter(bookLocation1 -> bookLocation1.getBookcaseNumber() == bookLocation.getBookcaseNumber()
                            && bookLocation1.getShelfNumber() == bookLocation.getShelfNumber()
                            && bookLocation1.getLocationOnShelf() == bookLocation.getLocationOnShelf())
                    .collect(Collectors.toList());
            if (theSameLocation.isEmpty()) {
                try {
                    bookLocationRepository.save(bookLocation);
                    return new ResponseEntity(HttpStatus.OK);
                } catch (DataIntegrityViolationException e) {
                    //empty intentionally
                }
            }
        }
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body("Location already exists");
    }

    @GetMapping("/books-locations/free")
        public List<BookLocation> getFreeLocations() {
            Iterable<BookLocation> bookLocations = bookLocationRepository.findAll();
            List<BookLocation> list = (List<BookLocation>) bookLocations;

        return list.stream()
                .filter(location -> location.isFree())
                .collect(Collectors.toList());
    }

}






