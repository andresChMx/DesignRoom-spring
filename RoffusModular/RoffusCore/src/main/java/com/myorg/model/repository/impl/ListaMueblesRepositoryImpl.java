package com.myorg.model.repository.impl;

import com.myorg.model.entity.ListaMuebles;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import com.myorg.model.repository.ListaMueblesRepository;

@Named
public class ListaMueblesRepositoryImpl implements ListaMueblesRepository,Serializable {
    
    private static final long serialVersionUID = 1L;
	
	@PersistenceContext(unitName = "visorPU")
	private EntityManager em;

	@Override
	public Integer insert(ListaMuebles t) throws Exception {
		em.persist(t);
		return t.getCodListaMueble();
	}

	@Override
	public Integer update(ListaMuebles t) throws Exception {
		em.merge(t);
		return t.getCodListaMueble();
	}

	@Override
	public Integer delete(ListaMuebles t) throws Exception {
		em.remove(t);
		return 1;
	}

	@Override
	public List<ListaMuebles> list() throws Exception {
		List<ListaMuebles> listamuebles = new ArrayList<>();

		TypedQuery<ListaMuebles> query = em.createQuery("SELECT p FROM ListaMuebles p",ListaMuebles.class);
		listamuebles = (List<ListaMuebles>) query.getResultList();
		return listamuebles;
	}
        
        @Override
	public List<ListaMuebles> listbyName(ListaMuebles t) throws Exception {
		List<ListaMuebles> listamuebles = new ArrayList<>();

		TypedQuery<ListaMuebles> query = em.createQuery("SELECT p FROM ListaMuebles p where p.nombreLista=?1",ListaMuebles.class);
                query.setParameter(1, t.getNombreLista());
		listamuebles = (List<ListaMuebles>) query.getResultList();
		return listamuebles;
	}

	
	@Override
	public ListaMuebles findById(ListaMuebles t) throws Exception {

		List<ListaMuebles> listamuebles = new ArrayList<>();
		TypedQuery<ListaMuebles> query = em.createQuery("SELECT p FROM ListaMuebles p where p.codListaMueble = ?1",ListaMuebles.class);
		query.setParameter(1, t.getCodListaMueble());

		listamuebles = query.getResultList();

		return listamuebles != null && !listamuebles.isEmpty() ? listamuebles.get(0) : new ListaMuebles();
	}
}
