package pl.ewe.library;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import pl.ewe.library.model.User;
import pl.ewe.library.repositories.UserRepository;

@Component
public class AppInitializer implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

        @Override
        public void run(String... args) throws Exception {
            User admin = new User("admin" , "admin" , "admin" , "admin" , "admin@admin");
            User worker1 = new User("Jan", "Kowalski", "jkowalski", "kowalskij", "jan@kowalski");

            userRepository.save(admin);
            userRepository.save(worker1);
        }
    }


