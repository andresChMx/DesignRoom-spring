package pe.roffus.org.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.roffus.org.model.Plantilla;
import pe.roffus.org.repository.PlantillaRepository;
import pe.roffus.org.service.PlantillaService;

import java.util.List;
@Service
public class PlantillaServiceImpl implements PlantillaService {

    PlantillaRepository plantillaRepository;

    @Autowired
    public PlantillaServiceImpl(PlantillaRepository plantillaRepository){this.plantillaRepository=plantillaRepository;}
    
    @Override
    public Plantilla insert(Plantilla plantilla){
        return plantillaRepository.save(plantilla);
    }

    @Override
    public Plantilla update(Plantilla plantilla) {
        return plantillaRepository.save(plantilla);
    }

    @Override
    public Boolean delete(int id) {
        plantillaRepository.deleteById(id);
        return true;
    }

    @Override
    public Plantilla getById(int id) {
        return plantillaRepository.findById(id).orElse(null);
    }

    @Override
    public List<Plantilla> listAll() {
        return plantillaRepository.findAll();
    }
}
