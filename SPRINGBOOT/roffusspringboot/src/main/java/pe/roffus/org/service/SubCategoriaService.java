package pe.roffus.org.service;

import  pe.roffus.org.model.SubCategoria;

import java.util.Collection;
import java.util.List;

public interface SubCategoriaService extends CRUDService<SubCategoria> {
    public List<SubCategoria> findSubCategoriaByCategoria(int id);
}
