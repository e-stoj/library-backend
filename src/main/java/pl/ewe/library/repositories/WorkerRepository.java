package pl.ewe.library.repositories;

        import org.springframework.data.repository.CrudRepository;
        import pl.ewe.library.model.Worker;

public interface WorkerRepository extends CrudRepository<Worker, Integer> {
}
