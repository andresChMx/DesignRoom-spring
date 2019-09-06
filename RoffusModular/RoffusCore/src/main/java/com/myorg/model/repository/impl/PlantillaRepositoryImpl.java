package com.myorg.model.repository.impl;

import com.myorg.model.entity.Plantilla;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import com.myorg.model.repository.PlantillaRepository;

@Named
public class PlantillaRepositoryImpl implements PlantillaRepository,Serializable {
    
    private static final long serialVersionUID = 1L;
	
	@PersistenceContext(unitName = "visorPU")
	private EntityManager em;

	@Override
	public Integer insert(Plantilla t) throws Exception {
		em.persist(t);
		return t.getCodPlantilla();
	}

	@Override
	public Integer update(Plantilla t) throws Exception {
		em.merge(t);
		return t.getCodPlantilla();
	}

	@Override
	public Integer delete(Plantilla t) throws Exception {
		em.remove(t);
		return 1;
	}

	@Override
	public List<Plantilla> list() throws Exception {
		List<Plantilla> plantilla = new ArrayList<>();

		TypedQuery<Plantilla> query = em.createQuery("SELECT p FROM Plantilla p",Plantilla.class);
		plantilla = (List<Plantilla>) query.getResultList();
		return plantilla;
	}

	
	@Override
	public Plantilla findById(Plantilla t) throws Exception {

		List<Plantilla> plantilla = new ArrayList<>();
		TypedQuery<Plantilla> query = em.createQuery("SELECT p FROM Plantilla p where p.codPlantilla = ?1",Plantilla.class);
		query.setParameter(1, t.getCodPlantilla());

		plantilla = query.getResultList();

		return plantilla != null && !plantilla.isEmpty() ? plantilla.get(0) : new Plantilla();
	}
}
