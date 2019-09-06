package pe.roffus.org.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import pe.roffus.org.model.Categoria;
import pe.roffus.org.service.CategoriaService;

import java.util.List;

@RestController
@RequestMapping("/categoria")
public class CategoriaController {
    CategoriaService categoriaService;

    @Autowired
    public CategoriaController(CategoriaService categoriaService) {
        this.categoriaService=categoriaService;
    }
    @CrossOrigin
    @RequestMapping
    List<Categoria> listCategorias(){       return categoriaService.listAll();    }
    @CrossOrigin
    @RequestMapping(path="/{id}",method = RequestMethod.GET)
    Categoria getCategoria(@PathVariable int id){
        return categoriaService.getById(id);
    }
    @CrossOrigin
    @PostMapping
    Categoria create(@RequestBody Categoria categoria){
        return (categoriaService.insert(categoria));
    }
    @CrossOrigin
    @PutMapping
    Categoria update(@RequestBody Categoria categoria){ return categoriaService.update(categoria); }
    @CrossOrigin
    @RequestMapping(path="/{id}",method = RequestMethod.DELETE)
    Boolean delete(@PathVariable int id){
        return categoriaService.delete(id);
    }

}
