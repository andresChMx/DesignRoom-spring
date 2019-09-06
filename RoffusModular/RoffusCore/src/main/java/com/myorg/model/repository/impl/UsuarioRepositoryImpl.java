package com.myorg.model.repository.impl;

import com.myorg.model.entity.Usuario;
import com.myorg.model.repository.UsuarioRepository;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

@Named
public class UsuarioRepositoryImpl implements UsuarioRepository,Serializable{
    
    private static final long serialVersionUID = 1L;
	
	@PersistenceContext(unitName = "visorPU")
	private EntityManager em;

	@Override
	public Integer insert(Usuario t) throws Exception {
		em.persist(t);
		return t.getCodUsuario();
	}

	@Override
	public Integer update(Usuario t) throws Exception {
		em.merge(t);
		return t.getCodUsuario();
	}

	@Override
	public Integer delete(Usuario t) throws Exception {
                Usuario tmpUsuario=(Usuario)em.find(Usuario.class,t.getCodUsuario());
                if(tmpUsuario!=null){
                    em.remove(tmpUsuario);    
                }
		return 1;
	}

	@Override
	public List<Usuario> list() throws Exception {
		List<Usuario> usuarios = new ArrayList<>();

		TypedQuery<Usuario> query = em.createQuery("SELECT p FROM Usuario p",Usuario.class);
		usuarios = (List<Usuario>) query.getResultList();
		return usuarios;
	}

	
	@Override
	public Usuario findById(Usuario t) throws Exception {

		List<Usuario> usuarios = new ArrayList<>();
		TypedQuery<Usuario> query = em.createQuery("SELECT p FROM Usuario p where p.codUsuario = ?1",Usuario.class);
		query.setParameter(1, t.getCodUsuario());

		usuarios = query.getResultList();

		return usuarios != null && !usuarios.isEmpty() ? usuarios.get(0) : new Usuario();
	}
        
        @Override
	public Usuario findByName(String t) throws Exception {

		List<Usuario> usuarios = new ArrayList<>();
		TypedQuery<Usuario> query = em.createQuery("SELECT p FROM Usuario p where p.nombre = ?1",Usuario.class);
		query.setParameter(1, t);

		usuarios = query.getResultList();

		return usuarios != null && !usuarios.isEmpty() ? usuarios.get(0) : new Usuario();
	}
        @Override
        public Usuario findByCorreo(String t) throws Exception{
            	List<Usuario> usuarios = new ArrayList<>();
		TypedQuery<Usuario> query = em.createQuery("SELECT p FROM Usuario p where p.correo = ?1",Usuario.class);
		query.setParameter(1, t);

		usuarios = query.getResultList();

		return usuarios != null && !usuarios.isEmpty() ? usuarios.get(0) : null;

        }
}
