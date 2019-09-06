package com.myorg.business.impl;

import java.io.Serializable;
import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;
import javax.transaction.Transactional;

import com.myorg.business.CategoriaBusiness;

import com.myorg.model.entity.Categoria;
import com.myorg.model.repository.CategoriaRepository;

@Named
public class CategoriaBusinessImpl implements CategoriaBusiness,Serializable {
    
     private static final long serialVersionUID = 1L;

    @Inject
    private CategoriaRepository categoriaRepository;

    @Override
    @Transactional
    public Integer insert(Categoria t) throws Exception {
       return categoriaRepository.insert(t);
    }

    @Override
    @Transactional
    public Integer update(Categoria t) throws Exception {
        return categoriaRepository.update(t);
    }

    @Override
    @Transactional
    public Integer delete(Categoria t) throws Exception {
        return categoriaRepository.delete(t);
    }

    @Override
    public List<Categoria> list() throws Exception {
        return categoriaRepository.list();
    }

    @Override
    public Categoria findById(Categoria t) throws Exception {
        return categoriaRepository.findById(t);
    }
    
}
