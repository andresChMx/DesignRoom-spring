package pe.roffus.org.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import pe.roffus.org.model.Mueble;

import java.util.List;

public interface MuebleRepository extends JpaRepository<Mueble,Integer> {

    @Query(value="select * from mueble s where s.cod_sub_categoria=?1",nativeQuery = true)
    List<Mueble> findMuebleBySubCategoria(int id);
}
