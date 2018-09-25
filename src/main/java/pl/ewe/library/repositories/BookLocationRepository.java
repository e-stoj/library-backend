package pl.ewe.library.repositories;

import org.springframework.data.repository.CrudRepository;
import pl.ewe.library.model.BookLocation;

public interface BookLocationRepository extends CrudRepository<BookLocation, Integer>{
}
