package com.myorg.model.repository;

import com.myorg.model.entity.ListaMuebles;
import java.util.List;

public interface ListaMueblesRepository extends JPARepository<ListaMuebles> {
    public List<ListaMuebles> listbyName(ListaMuebles t) throws Exception;
}
