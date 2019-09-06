package com.myorg.business.impl;

import java.io.Serializable;
import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;
import javax.transaction.Transactional;


import com.myorg.model.entity.TiendaVirtual;
import com.myorg.business.TiendaVirtualBusiness;
import com.myorg.model.repository.TiendaVirtualRepository;

@Named
public class TiendaVirtualBusinessImpl implements TiendaVirtualBusiness, Serializable {

    private static final long serialVersionUID = 1L;

    @Inject
    private TiendaVirtualRepository distribuidorRepository;

    @Override
    @Transactional
    public Integer insert(TiendaVirtual t) throws Exception {
       return distribuidorRepository.insert(t);
    }

    @Override
    @Transactional
    public Integer update(TiendaVirtual t) throws Exception {
        return distribuidorRepository.update(t);
    }

    @Override
    @Transactional
    public Integer delete(TiendaVirtual t) throws Exception {
        return distribuidorRepository.delete(t);
    }

    @Override
    public List<TiendaVirtual> list() throws Exception {
        return distribuidorRepository.list();
    }

    @Override
    public TiendaVirtual findById(TiendaVirtual t) throws Exception {
        return distribuidorRepository.findById(t);
    }
}
