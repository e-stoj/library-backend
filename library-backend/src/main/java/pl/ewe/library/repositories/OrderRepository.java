package pl.ewe.library.repositories;

        import org.springframework.data.repository.CrudRepository;
        import pl.ewe.library.model.BookOrder;

public interface OrderRepository extends CrudRepository<BookOrder, Integer> {
}
