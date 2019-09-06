package com.myorg.business.impl;

import java.io.Serializable;
import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;
import javax.transaction.Transactional;

import com.myorg.business.PaqueteBusiness;

import com.myorg.model.entity.Paquete;
import com.myorg.model.entity.Usuario;
import com.myorg.model.repository.PaqueteRepository;


public class PaqueteBusinessImpl implements PaqueteBusiness, Serializable{
    
    
    private static final long serialVersionUID = 1L;

    @Inject
    private PaqueteRepository paqueteRepository;

    @Override
    @Transactional
    public Integer insert(Paquete t) throws Exception {
       return paqueteRepository.insert(t);
    }

    @Override
    @Transactional
    public Integer update(Paquete t) throws Exception {
        return paqueteRepository.update(t);
    }

    @Override
    @Transactional
    public Integer delete(Paquete t) throws Exception {
        return paqueteRepository.delete(t);
    }

    @Override
    public List<Paquete> list() throws Exception {
        return paqueteRepository.list();
    }

    @Override
    public List<Paquete> listbyUser(Usuario t) throws Exception {
        return paqueteRepository.listbyUser(t);
    }
    
    @Override
    public Paquete findById(Paquete t) throws Exception {
        return paqueteRepository.findById(t);
    }
}
