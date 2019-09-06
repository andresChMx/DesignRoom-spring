package pe.roffus.org.service;

import java.util.List;

public interface CRUDService<T> {
    T insert(T t);
    T update(T t);
    Boolean delete(int id);
    T getById(int id);
    List<T> listAll();
}
