package pe.roffus.org.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.roffus.org.model.Paquete;
import pe.roffus.org.repository.PaqueteRepository;
import pe.roffus.org.service.PaqueteService;

import java.util.List;
@Service
public class PaqueteServiceImpl implements PaqueteService {

    PaqueteRepository paqueteRepository;

    @Autowired
    public PaqueteServiceImpl(PaqueteRepository paqueteRepository){this.paqueteRepository=paqueteRepository;}

    @Override
    public Paquete insert(Paquete paquete){
        return paqueteRepository.save(paquete);
    }

    @Override
    public Paquete update(Paquete paquete) {
        return paqueteRepository.save(paquete);
    }

    @Override
    public Boolean delete(int id) {
        paqueteRepository.deleteById(id);
        return true;
    }

    @Override
    public Paquete getById(int id) {
        return paqueteRepository.findById(id).orElse(null);
    }

    @Override
    public List<Paquete> listAll() {
        return paqueteRepository.findAll();
    }

}

