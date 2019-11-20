package pe.roffus.org.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.roffus.org.model.Mueble;
import pe.roffus.org.model.Proyecto;
import pe.roffus.org.model.Proyecto;
import pe.roffus.org.service.ProyectoService;

import java.util.List;

@RestController
@RequestMapping("/proyecto")
public class ProyectoController {
    ProyectoService proyectoService;
    @Autowired
    ProyectoController(ProyectoService proyectoService){
        this.proyectoService=proyectoService;
    }

    @CrossOrigin
    @RequestMapping
    List<Proyecto> listProyectos(){
        return proyectoService.listAll();
    }
    @CrossOrigin
    @RequestMapping(path="/{id}",method = RequestMethod.GET)
    Proyecto getProyecto(@PathVariable int id){
        return proyectoService.getById(id);
    }
    @CrossOrigin
    @PostMapping
    Proyecto create(@RequestBody Proyecto proyecto){
        return (proyectoService.insert(proyecto));
    }
    @CrossOrigin
    @PutMapping
    Proyecto update(@RequestBody Proyecto proyecto){ return proyectoService.update(proyecto); }
    @CrossOrigin
    @RequestMapping(path="/{id}",method = RequestMethod.DELETE)
    Boolean delete(@PathVariable int id){
        return proyectoService.delete(id);
    }

    @CrossOrigin
    @RequestMapping(path="/usuario/{id}",method = RequestMethod.GET)
    public List<Proyecto> findMuebleBySubCategoria(@PathVariable int id){
        return proyectoService.findProyectosByUsuario(id);
    }
}
