package pe.roffus.org.service;

import pe.roffus.org.model.Proyecto;

import java.util.List;

public interface ProyectoService  extends CRUDService<Proyecto> {
    List<Proyecto> findProyectosByUsuario(int id);
}
