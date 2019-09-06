package pe.roffus.org.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.roffus.org.model.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria,Integer> {

}
