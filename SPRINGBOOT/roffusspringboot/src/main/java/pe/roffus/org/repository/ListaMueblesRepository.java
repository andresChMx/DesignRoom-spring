package pe.roffus.org.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Modifying;
import pe.roffus.org.model.ListaMuebles;
import pe.roffus.org.model.SubCategoria;

import org.springframework.transaction.annotation.Transactional;
import java.util.List;

public interface ListaMueblesRepository extends JpaRepository<ListaMuebles,Integer> {

    @Query(value="select * from lista_muebles l where l.nombre_lista=?1",nativeQuery = true)
    List<ListaMuebles> findListaMueblesByNombre(String nombre);

    @Modifying
    @Transactional
    @Query(value="delete from lista_muebles  where nombre_lista=?1",nativeQuery = true)
    void deleteListaMueblesByNombre(String nombre);
}
