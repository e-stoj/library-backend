package pl.ewe.library.repositories;

import org.springframework.data.repository.CrudRepository;
import pl.ewe.library.model.User;

public interface UserRepository extends CrudRepository<User, Integer> {
}
