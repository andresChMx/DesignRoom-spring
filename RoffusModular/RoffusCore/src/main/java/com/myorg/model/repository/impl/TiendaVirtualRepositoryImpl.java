
package com.myorg.model.repository.impl;

import com.myorg.model.entity.TiendaVirtual;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import com.myorg.model.repository.TiendaVirtualRepository;


@Named
public class TiendaVirtualRepositoryImpl implements TiendaVirtualRepository,Serializable {
	

	private static final long serialVersionUID = 1L;
	
	@PersistenceContext(unitName = "visorPU")
	private EntityManager em;

	@Override
	public Integer insert(TiendaVirtual t) throws Exception {
		em.persist(t);
		return t.getCodTiendaVirtual();
	}

	@Override
	public Integer update(TiendaVirtual t) throws Exception {
		em.merge(t);
		return t.getCodTiendaVirtual();
	}

	@Override
	public Integer delete(TiendaVirtual t) throws Exception {
		em.remove(t);
		return 1;
	}

	@Override
	public List<TiendaVirtual> list() throws Exception {
		List<TiendaVirtual> tiendasvirtuales = new ArrayList<>();

		TypedQuery<TiendaVirtual> query = em.createQuery("SELECT p FROM TiendaVirtual p",TiendaVirtual.class);
		tiendasvirtuales = (List<TiendaVirtual>) query.getResultList();
		return tiendasvirtuales;
	}

	
	@Override
	public TiendaVirtual findById(TiendaVirtual t) throws Exception {

		List<TiendaVirtual> tiendasvirtuales = new ArrayList<>();
		TypedQuery<TiendaVirtual> query = em.createQuery("SELECT p FROM TiendaVirtual p where p.codTiendaVirtual = ?1",TiendaVirtual.class);
		query.setParameter(1, t.getCodTiendaVirtual());

		tiendasvirtuales = query.getResultList();

		return tiendasvirtuales != null && !tiendasvirtuales.isEmpty() ? tiendasvirtuales.get(0) : new TiendaVirtual();
	}

}
