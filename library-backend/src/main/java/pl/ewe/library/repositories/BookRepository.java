package pl.ewe.library.repositories;

        import org.springframework.data.repository.CrudRepository;
        import pl.ewe.library.model.Book;

public interface BookRepository extends CrudRepository<Book, Integer> {
}
