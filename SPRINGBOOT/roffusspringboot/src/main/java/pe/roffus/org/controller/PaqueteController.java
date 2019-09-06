package pe.roffus.org.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import pe.roffus.org.model.Paquete;
import pe.roffus.org.service.PaqueteService;

import java.util.List;

@RestController
@RequestMapping("/paquete")
public class PaqueteController {
    PaqueteService paqueteService;

    @Autowired
    public PaqueteController(PaqueteService paqueteService) {
        this.paqueteService=paqueteService;
    }
    @CrossOrigin
    @RequestMapping
    List<Paquete> listPaquetes(){return paqueteService.listAll();    }
    @CrossOrigin
    @RequestMapping(path="/{id}",method = RequestMethod.GET)
    Paquete getPaquete(@PathVariable int id){
        return paqueteService.getById(id);
    }

    @CrossOrigin
    @PostMapping
    Paquete create(@RequestBody Paquete paquete){
        return (paqueteService.insert(paquete));
    }
    @CrossOrigin
    @PutMapping
    Paquete update(@RequestBody Paquete paquete){ return paqueteService.update(paquete); }
    @CrossOrigin
    @RequestMapping(path="/{id}",method = RequestMethod.DELETE)
    Boolean delete(@PathVariable int id){
        return paqueteService.delete(id);
    }

}
