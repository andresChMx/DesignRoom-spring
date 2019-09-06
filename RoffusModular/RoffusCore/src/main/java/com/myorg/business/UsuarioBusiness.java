package com.myorg.business;

import com.myorg.model.entity.Usuario;

public interface UsuarioBusiness extends CrudBusiness<Usuario> {
     public Usuario findByName(String t) throws Exception ;
     public Usuario findByCorreo(String t) throws Exception;
}
