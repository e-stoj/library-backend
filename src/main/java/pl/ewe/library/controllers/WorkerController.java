package pl.ewe.library.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pl.ewe.library.model.Worker;
import pl.ewe.library.repositories.WorkerRepository;

import java.util.List;

@RestController
public class WorkerController {

    @Autowired
    WorkerRepository workerRepository;

    @GetMapping("/workers")
    public List<Worker> getAllBooks() {
        Iterable<Worker> workers = workerRepository.findAll();
        return (List<Worker>) workers;
    }

    @PostMapping("/workers")
    public ResponseEntity addBook(@RequestBody Worker worker) {
        workerRepository.save(worker);
        return new ResponseEntity(HttpStatus.OK);
    }
}
