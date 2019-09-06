package com.myorg.business;

import com.myorg.model.entity.ListaMuebles;
import java.util.List;

public interface ListaMueblesBusiness extends CrudBusiness<ListaMuebles> {
    
    public List<ListaMuebles> listbyName(ListaMuebles t) throws Exception;
}
