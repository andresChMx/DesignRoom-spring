package pe.roffus.org.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import pe.roffus.org.model.SubCategoria;
import pe.roffus.org.service.SubCategoriaService;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/subcategoria")
public class SubCategoriaController {
    SubCategoriaService categoriaService;

    @Autowired
    public SubCategoriaController(SubCategoriaService categoriaService) {
        this.categoriaService=categoriaService;
    }
    @CrossOrigin
    @RequestMapping
    List<SubCategoria> listSubCategorias(){       return categoriaService.listAll();    }
    @CrossOrigin
    @RequestMapping(path="/{id}",method = RequestMethod.GET)
    SubCategoria getSubCategoria(@PathVariable int id){
        return categoriaService.getById(id);
    }
    @CrossOrigin
    @PostMapping
    SubCategoria create(@RequestBody SubCategoria categoria){
        return (categoriaService.insert(categoria));
    }
    @CrossOrigin
    @PutMapping
    SubCategoria update(@RequestBody SubCategoria categoria){ return categoriaService.update(categoria); }
    @CrossOrigin
    @RequestMapping(path="/{id}",method = RequestMethod.DELETE)
    Boolean delete(@PathVariable int id){
        return categoriaService.delete(id);
    }
    @CrossOrigin
    @RequestMapping(path="/categoria/{id}",method = RequestMethod.GET)
    List<SubCategoria> findSubCategoriaByCategoria(@PathVariable int id){
        return categoriaService.findSubCategoriaByCategoria(id);
    }
}
