package pl.ewe.library.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.ewe.library.authentication.UserContext;
import pl.ewe.library.authentication.UserSessionContext;
import pl.ewe.library.model.User;

@CrossOrigin(origins = "*", allowCredentials = "true", maxAge = 3600L)
@RestController
public class UserController {

    @Autowired
    private UserContext userContext;
    @Autowired
    private UserSessionContext userSessionContext;

    @GetMapping("/me")
    public ResponseEntity<User> me() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(userContext.getCurrentUser());
    }


}
