package com.myorg.business.impl;

import java.io.Serializable;
import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;
import javax.transaction.Transactional;


import com.myorg.model.entity.Plantilla;
import com.myorg.business.PlantillaBusiness;
import com.myorg.model.repository.PlantillaRepository;

@Named
public class PlantillaBusinessImpl implements PlantillaBusiness,Serializable {
    
      private static final long serialVersionUID = 1L;

    @Inject
    private PlantillaRepository plantillaRepository;

    @Override
    @Transactional
    public Integer insert(Plantilla t) throws Exception {
       return plantillaRepository.insert(t);
    }

    @Override
    @Transactional
    public Integer update(Plantilla t) throws Exception {
        return plantillaRepository.update(t);
    }

    @Override
    @Transactional
    public Integer delete(Plantilla t) throws Exception {
        return plantillaRepository.delete(t);
    }

    @Override
    public List<Plantilla> list() throws Exception {
        return plantillaRepository.list();
    }

    @Override
    public Plantilla findById(Plantilla t) throws Exception {
        return plantillaRepository.findById(t);
    }
}
