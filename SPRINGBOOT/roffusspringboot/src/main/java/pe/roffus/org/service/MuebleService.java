package pe.roffus.org.service;

import pe.roffus.org.model.Mueble;

import java.util.List;

public interface MuebleService extends CRUDService<Mueble> {
    List<Mueble> findMuebleBySubCategoria(int id);
}
