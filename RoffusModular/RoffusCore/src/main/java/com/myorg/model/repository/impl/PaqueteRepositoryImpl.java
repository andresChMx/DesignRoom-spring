package com.myorg.model.repository.impl;

import com.myorg.model.entity.Paquete;
import com.myorg.model.entity.Usuario;
import com.myorg.model.repository.PaqueteRepository;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

@Named
public class PaqueteRepositoryImpl implements PaqueteRepository,Serializable{
    
    private static final long serialVersionUID = 1L;
	
	@PersistenceContext(unitName = "visorPU")
	private EntityManager em;

	@Override
	public Integer insert(Paquete t) throws Exception {
		em.persist(t);
		return t.getCodPaquete();
	}

	@Override
	public Integer update(Paquete t) throws Exception {
		em.merge(t);
		return t.getCodPaquete();
	}

	@Override
	public Integer delete(Paquete t) throws Exception {
		em.remove(t);
		return 1;
	}

	@Override
	public List<Paquete> list() throws Exception {
		List<Paquete> paquetes = new ArrayList<>();

		TypedQuery<Paquete> query = em.createQuery("SELECT p FROM Paquete p",Paquete.class);
		paquetes = (List<Paquete>) query.getResultList();
		return paquetes;
	}
        
        
	public List<Paquete> listbyUser(Usuario t) throws Exception {
		List<Paquete> paquetes = new ArrayList<>();

		TypedQuery<Paquete> query = em.createQuery("SELECT p FROM Paquete p where p.usuario.codUsuario = ?1",Paquete.class);
                query.setParameter(1,t.getCodUsuario());
                
		paquetes = (List<Paquete>) query.getResultList();
		return paquetes;
	}
	
	@Override
	public Paquete findById(Paquete t) throws Exception {

		List<Paquete> paquetes = new ArrayList<>();
		TypedQuery<Paquete> query = em.createQuery("SELECT p FROM Paquete p where p.codPaquete = ?1",Paquete.class);
		query.setParameter(1, t.getCodPaquete());

		paquetes = query.getResultList();

		return paquetes != null && !paquetes.isEmpty() ? paquetes.get(0) : new Paquete();
	}
    
}
