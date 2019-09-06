package pe.roffus.org.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.roffus.org.model.ListaMuebles;
import pe.roffus.org.repository.ListaMueblesRepository;
import pe.roffus.org.service.ListaMueblesService;

import java.util.List;

@Service
public class ListaMueblesServiceImpl implements ListaMueblesService {

    ListaMueblesRepository listaMueblesRepository;

    @Autowired
    public ListaMueblesServiceImpl(ListaMueblesRepository listaMueblesRepository)
    {this.listaMueblesRepository=listaMueblesRepository;}

    @Override
    public ListaMuebles insert(ListaMuebles listaMuebles){
        return listaMueblesRepository.save(listaMuebles);
    }

    @Override
    public ListaMuebles update(ListaMuebles listaMuebles) {
        return listaMueblesRepository.save(listaMuebles);
    }

    @Override
    public Boolean delete(int id) {
        listaMueblesRepository.deleteById(id);
        return true;
    }

    @Override
    public ListaMuebles getById(int id) {
        return listaMueblesRepository.findById(id).orElse(null);
    }

    @Override
    public List<ListaMuebles> listAll() {
        return listaMueblesRepository.findAll();
    }
    @Override
    public List<ListaMuebles> findListaMueblesByNombre(String nombre){
        return listaMueblesRepository.findListaMueblesByNombre(nombre);
    }
    @Override
    public void deleteListaMueblesByNombre(String nombre){
        listaMueblesRepository.deleteListaMueblesByNombre(nombre);
    }
}
