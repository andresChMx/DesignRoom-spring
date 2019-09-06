package com.myorg.business.impl;

import java.io.Serializable;
import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;
import javax.transaction.Transactional;

import com.myorg.business.UsuarioBusiness;

import com.myorg.model.entity.Usuario;
import com.myorg.model.repository.UsuarioRepository;

@Named
public class UsuarioBusinesImpl implements UsuarioBusiness,Serializable {
    
      private static final long serialVersionUID = 1L;

    @Inject
    private UsuarioRepository usuarioRepository;

    @Override
    @Transactional
    public Integer insert(Usuario t) throws Exception {
       return usuarioRepository.insert(t);
    }

    @Override
    @Transactional
    public Integer update(Usuario t) throws Exception {
        return usuarioRepository.update(t);
    }

    @Override
    @Transactional
    public Integer delete(Usuario t) throws Exception {
        return usuarioRepository.delete(t);
    }

    @Override
    public List<Usuario> list() throws Exception {
        return usuarioRepository.list();
    }

    @Override
    public Usuario findById(Usuario t) throws Exception {
        return usuarioRepository.findById(t);
    }
    
    @Override
    public Usuario findByName(String t) throws Exception {
        return usuarioRepository.findByName(t);
    }
    @Override
    public Usuario findByCorreo(String t) throws Exception{
        return usuarioRepository.findByCorreo(t);
    }
}
