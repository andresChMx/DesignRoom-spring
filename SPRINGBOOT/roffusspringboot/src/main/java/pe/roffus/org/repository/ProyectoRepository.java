package pe.roffus.org.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import pe.roffus.org.model.Proyecto;

import java.util.List;

public interface ProyectoRepository extends JpaRepository<Proyecto,Integer> {
    @Query(value="select * from proyecto p where p.cod_usuario=?1",nativeQuery = true)
    List<Proyecto> findProyectosByUsuario(int id);
}

