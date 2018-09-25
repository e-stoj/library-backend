package pl.ewe.library.repositories;

import org.springframework.data.repository.CrudRepository;
import pl.ewe.library.model.Author;

public interface AuthorRepository extends CrudRepository<Author, Integer> {
}
