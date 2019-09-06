package com.myorg.model.repository.impl;

import com.myorg.model.entity.Categoria;
import com.myorg.model.repository.CategoriaRepository;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

@Named
public class CategoriaRepositoryImpl implements CategoriaRepository,Serializable{
    
    private static final long serialVersionUID = 1L;
	
	@PersistenceContext(unitName = "visorPU")
	private EntityManager em;

	@Override
	public Integer insert(Categoria t) throws Exception {
		em.persist(t);
		return t.getCodCategoria();
	}

	@Override
	public Integer update(Categoria t) throws Exception {
		em.merge(t);
		return t.getCodCategoria();
	}

	@Override
	public Integer delete(Categoria t) throws Exception {
                Categoria tmpCategoria=(Categoria)em.find(Categoria.class,t.getCodCategoria());
                if(tmpCategoria!=null){
                    em.remove(tmpCategoria);    
                }

                return 1;
	}

	@Override
	public List<Categoria> list() throws Exception {
		List<Categoria> categorias = new ArrayList<>();

		TypedQuery<Categoria> query = em.createQuery("SELECT p FROM Categoria p",Categoria.class);
		categorias = (List<Categoria>) query.getResultList();
		return categorias;
	}

	
	@Override
	public Categoria findById(Categoria t) throws Exception {

		List<Categoria> categorias = new ArrayList<>();
		TypedQuery<Categoria> query = em.createQuery("SELECT p FROM Categoria p where p.codCategoria = ?1",Categoria.class);
		query.setParameter(1, t.getCodCategoria());

		categorias = query.getResultList();

		return categorias != null && !categorias.isEmpty() ? categorias.get(0) : new Categoria();
	}
}
