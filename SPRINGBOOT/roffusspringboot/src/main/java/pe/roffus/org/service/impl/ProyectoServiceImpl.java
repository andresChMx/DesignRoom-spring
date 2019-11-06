package pe.roffus.org.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.roffus.org.model.Proyecto;
import pe.roffus.org.repository.ProyectoRepository;
import pe.roffus.org.service.ProyectoService;

import java.util.List;

@Service
public class ProyectoServiceImpl implements ProyectoService {
    ProyectoRepository proyectoRepository;
    @Autowired
    ProyectoServiceImpl(ProyectoRepository proyectoRepository){
        this.proyectoRepository=proyectoRepository;
    }
    @Override
    public Proyecto insert(Proyecto proyecto) {
        return null;
    }

    @Override
    public Proyecto update(Proyecto proyecto) {
        return null;
    }

    @Override
    public Boolean delete(int id) {
        return null;
    }

    @Override
    public Proyecto getById(int id) {
        return null;
    }

    @Override
    public List<Proyecto> listAll() {
        return null;
    }
}
