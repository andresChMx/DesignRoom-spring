package pe.roffus.org.repository;


import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import pe.roffus.org.model.SubCategoria;

import java.awt.*;
import java.awt.print.Pageable;
import java.util.Collection;
import java.util.List;

public interface SubCategoriaRepository extends JpaRepository<SubCategoria,Integer> {

    @Query(value="select s.cod_sub_categoria, s.nombre_sub_categoria, s.cod_categoria from sub_categoria s where s.cod_categoria=?1",nativeQuery = true)
    List<SubCategoria> findSubCategoriaByCategoria(int id);
}
