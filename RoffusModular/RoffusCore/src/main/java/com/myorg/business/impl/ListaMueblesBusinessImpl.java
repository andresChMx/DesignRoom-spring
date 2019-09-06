package com.myorg.business.impl;

import java.io.Serializable;
import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;
import javax.transaction.Transactional;


import com.myorg.model.entity.ListaMuebles;
import com.myorg.model.repository.ListaMueblesRepository;
import com.myorg.business.ListaMueblesBusiness;

@Named
public class ListaMueblesBusinessImpl implements ListaMueblesBusiness,Serializable {
    
     private static final long serialVersionUID = 1L;

    @Inject
    private ListaMueblesRepository listaMueblesRepository;

    @Override
    @Transactional
    public Integer insert(ListaMuebles t) throws Exception {
       return listaMueblesRepository.insert(t);
    }

    @Override
    @Transactional
    public Integer update(ListaMuebles t) throws Exception {
        return listaMueblesRepository.update(t);
    }

    @Override
    @Transactional
    public Integer delete(ListaMuebles t) throws Exception {
        return listaMueblesRepository.delete(t);
    }

    @Override
    public List<ListaMuebles> list() throws Exception {
        return listaMueblesRepository.list();
    }
     
    @Override
    public List<ListaMuebles> listbyName(ListaMuebles t) throws Exception {
        return listaMueblesRepository.listbyName(t);
    }

    @Override
    public ListaMuebles findById(ListaMuebles t) throws Exception {
        return listaMueblesRepository.findById(t);
    }
     
}
