
package com.myorg.model.repository;

import com.myorg.model.entity.Paquete;
import com.myorg.model.entity.Usuario;
import java.util.List;

public interface PaqueteRepository extends JPARepository<Paquete>{
    public List<Paquete> listbyUser(Usuario t) throws Exception;
}
