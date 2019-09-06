package pe.roffus.org.service;

import org.springframework.context.annotation.Bean;
import pe.roffus.org.model.ListaMuebles;

import java.util.List;


public interface ListaMueblesService extends CRUDService<ListaMuebles> {
    List<ListaMuebles> findListaMueblesByNombre(String nombre);
    void deleteListaMueblesByNombre(String nombre);
}
