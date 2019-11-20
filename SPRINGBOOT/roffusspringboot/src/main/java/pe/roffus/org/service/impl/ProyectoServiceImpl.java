package pe.roffus.org.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.roffus.org.model.Categoria;
import pe.roffus.org.model.Proyecto;
import pe.roffus.org.repository.ProyectoRepository;
import pe.roffus.org.service.ProyectoService;

import java.util.List;
import java.util.Optional;

@Service
public class ProyectoServiceImpl implements ProyectoService {
    ProyectoRepository proyectoRepository;
    @Autowired
    ProyectoServiceImpl(ProyectoRepository proyectoRepository){
        this.proyectoRepository=proyectoRepository;
    }
    @Override
    public Proyecto insert(Proyecto proyecto) {
        return proyectoRepository.save(proyecto);
    }

    @Override
    public Proyecto update(Proyecto proyecto) {
        return proyectoRepository.save(proyecto);
    }

    @Override
    public Boolean delete(int id) {
         proyectoRepository.deleteById(id);
         return true;
    }

    @Override
    public Proyecto getById(int id) {
        Optional<Proyecto> cat = proyectoRepository.findById(id);
        return cat.orElse(null);
    }

    @Override
    public List<Proyecto> listAll() {
        return proyectoRepository.findAll();
    }

    @Override
    public List<Proyecto> findProyectosByUsuario(int id) {
        return proyectoRepository.findProyectosByUsuario(id);
    }
}
