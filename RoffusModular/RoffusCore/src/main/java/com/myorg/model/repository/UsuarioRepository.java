package com.myorg.model.repository;

import com.myorg.model.entity.Usuario;

public interface UsuarioRepository extends JPARepository<Usuario>{
    public Usuario findByName(String t) throws Exception;
    public Usuario findByCorreo(String t) throws Exception;
}
