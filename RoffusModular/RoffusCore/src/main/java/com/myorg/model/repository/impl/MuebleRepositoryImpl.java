package com.myorg.model.repository.impl;

import com.myorg.model.entity.Mueble;
import com.myorg.model.repository.MuebleRepository;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

@Named
public class MuebleRepositoryImpl implements MuebleRepository,Serializable {
    
    private static final long serialVersionUID = 1L;
	
	@PersistenceContext(unitName = "visorPU")
	private EntityManager em;

	@Override
	public Integer insert(Mueble t) throws Exception {
		em.persist(t);
		return t.getCodMueble();
	}

	@Override
	public Integer update(Mueble t) throws Exception {
		em.merge(t);
		return t.getCodMueble();
	}

	@Override
	public Integer delete(Mueble t) throws Exception {
                Mueble tmpMueble=(Mueble)em.find(Mueble.class,t.getCodMueble());
                if(tmpMueble!=null){
                    em.remove(tmpMueble);    
                }

		return 1;
	}

	@Override
	public List<Mueble> list() throws Exception {
		List<Mueble> muebles = new ArrayList<>();

		TypedQuery<Mueble> query = em.createQuery("SELECT p FROM Mueble p",Mueble.class);
		muebles = (List<Mueble>) query.getResultList();
		return muebles;
	}

	
	@Override
	public Mueble findById(Mueble t) throws Exception {

		List<Mueble> muebles = new ArrayList<>();
		TypedQuery<Mueble> query = em.createQuery("SELECT p FROM Mueble p where p.codMueble = ?1",Mueble.class);
		query.setParameter(1, t.getCodMueble());

		muebles = query.getResultList();

		return muebles != null && !muebles.isEmpty() ? muebles.get(0) : new Mueble();
	}
}
