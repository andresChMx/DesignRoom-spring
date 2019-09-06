package com.myorg.business;

import com.myorg.model.entity.Paquete;
import com.myorg.model.entity.Usuario;
import java.util.List;

public interface PaqueteBusiness extends CrudBusiness<Paquete> {
     public List<Paquete> listbyUser(Usuario t) throws Exception;
}
