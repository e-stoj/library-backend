package pl.ewe.library.repositories;

import org.springframework.data.repository.CrudRepository;
import pl.ewe.library.model.Reader;

public interface ReaderRepository extends CrudRepository<Reader, Integer> {
}
