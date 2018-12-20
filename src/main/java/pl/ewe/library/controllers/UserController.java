package pl.ewe.library.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.ewe.library.model.User;
import pl.ewe.library.model.UserDetails;
import pl.ewe.library.repositories.UserRepository;

@CrossOrigin(origins = "*", allowCredentials = "true", maxAge = 3600L)
@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

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

    @PostMapping("/users")
    public ResponseEntity addAuthor(@RequestBody User user) {
        userRepository.save(user);
        return new ResponseEntity(HttpStatus.OK);
    }
}
