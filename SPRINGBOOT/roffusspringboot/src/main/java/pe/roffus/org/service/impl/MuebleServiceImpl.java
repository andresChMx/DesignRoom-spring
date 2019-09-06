package pe.roffus.org.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.roffus.org.model.Mueble;
import pe.roffus.org.repository.MuebleRepository;
import pe.roffus.org.service.MuebleService;

import java.util.List;

@Service
public class MuebleServiceImpl implements MuebleService {

    MuebleRepository muebleRepository;

    @Autowired
    public MuebleServiceImpl(MuebleRepository muebleRepository){this.muebleRepository=muebleRepository;}


    @Override
    public Mueble insert(Mueble mueble){
        return muebleRepository.save(mueble);
    }

    @Override
    public Mueble update(Mueble mueble) {
        return muebleRepository.save(mueble);
    }

    @Override
    public Boolean delete(int id) {
        muebleRepository.deleteById(id);
        return true;
    }

    @Override
    public Mueble getById(int id) {
        return muebleRepository.findById(id).orElse(null);
    }

    @Override
    public List<Mueble> listAll() {
        return muebleRepository.findAll();
    }

    @Override
    public List<Mueble> findMuebleBySubCategoria(int id){
       return muebleRepository.findMuebleBySubCategoria(id);
    }
}
