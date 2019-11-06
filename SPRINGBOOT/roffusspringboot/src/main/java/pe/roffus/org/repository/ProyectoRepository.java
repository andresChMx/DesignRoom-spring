package pe.roffus.org.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.roffus.org.model.Proyecto;

public interface ProyectoRepository extends JpaRepository<Proyecto,Integer> {
}

