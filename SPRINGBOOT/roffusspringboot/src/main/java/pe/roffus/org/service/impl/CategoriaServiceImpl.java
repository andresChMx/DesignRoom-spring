package pe.roffus.org.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.roffus.org.model.Categoria;
import pe.roffus.org.repository.CategoriaRepository;
import pe.roffus.org.service.CategoriaService;

import java.util.List;
import java.util.Optional;


@Service
public class CategoriaServiceImpl implements CategoriaService {

    CategoriaRepository categoriaRepository;

    @Autowired
    public CategoriaServiceImpl(CategoriaRepository categoriaRepository) {
        this.categoriaRepository=categoriaRepository;}

    @Override
    public Categoria insert(Categoria categoria){
        return categoriaRepository.save(categoria);
    }

    @Override
    public Categoria update(Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    @Override
    public Boolean delete(int id) {
        categoriaRepository.deleteById(id);
        return true;
    }

    @Override
    public Categoria getById(int id) {
        Optional<Categoria> cat = categoriaRepository.findById(id);
        return cat.orElse(null);
    }

    @Override
    public List<Categoria> listAll() {
        return categoriaRepository.findAll();
    }

}

















