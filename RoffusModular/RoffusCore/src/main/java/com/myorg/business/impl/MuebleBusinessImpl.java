package com.myorg.business.impl;

import java.io.Serializable;
import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;
import javax.transaction.Transactional;

import com.myorg.business.MuebleBusiness;

import com.myorg.model.entity.Mueble;
import com.myorg.model.repository.MuebleRepository;

@Named
public class MuebleBusinessImpl implements MuebleBusiness,Serializable{
    
     private static final long serialVersionUID = 1L;

    @Inject
    private MuebleRepository muebleRepository;

    @Override
    @Transactional
    public Integer insert(Mueble t) throws Exception {
       return muebleRepository.insert(t);
    }

    @Override
    @Transactional
    public Integer update(Mueble t) throws Exception {
        return muebleRepository.update(t);
    }

    @Override
    @Transactional
    public Integer delete(Mueble t) throws Exception {
        return muebleRepository.delete(t);
    }

    @Override
    public List<Mueble> list() throws Exception {
        return muebleRepository.list();
    }

    @Override
    public Mueble findById(Mueble t) throws Exception {
        return muebleRepository.findById(t);
    }
    
}
