package pe.roffus.org.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.roffus.org.model.TiendaVirtual;
import pe.roffus.org.repository.TiendaVirtualRepository;
import pe.roffus.org.service.TiendaVirtualService;

import java.util.List;
@Service
public class TiendaVirtualServiceImpl implements TiendaVirtualService {

    TiendaVirtualRepository tiendaVirtualRepository;

    @Autowired
    public TiendaVirtualServiceImpl(TiendaVirtualRepository tiendaVirtualRepository){this.tiendaVirtualRepository=tiendaVirtualRepository;}
    
    @Override
    public TiendaVirtual insert(TiendaVirtual tiendaVirtual){
        return tiendaVirtualRepository.save(tiendaVirtual);
    }

    @Override
    public TiendaVirtual update(TiendaVirtual tiendaVirtual) {
        return tiendaVirtualRepository.save(tiendaVirtual);
    }

    @Override
    public Boolean delete(int id) {
        tiendaVirtualRepository.deleteById(id);
        return true;
    }

    @Override
    public TiendaVirtual getById(int id) {
        return tiendaVirtualRepository.findById(id).orElse(null);
    }

    @Override
    public List<TiendaVirtual> listAll() {
        return tiendaVirtualRepository.findAll();
    }
}
