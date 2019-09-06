package pe.roffus.org.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import pe.roffus.org.model.Plantilla;
import pe.roffus.org.service.PlantillaService;

import java.util.List;

@RestController
@RequestMapping("/plantilla")
public class PlantillaController {
    PlantillaService plantillaService;

    @Autowired
    public PlantillaController(PlantillaService plantillaService) {
        this.plantillaService=plantillaService;
    }

    @RequestMapping
    List<Plantilla> listPlantillas(){       return plantillaService.listAll();    }
    @CrossOrigin
    @RequestMapping(path="/{id}",method = RequestMethod.GET)
    Plantilla getPlantilla(@PathVariable int id){
        return plantillaService.getById(id);
    }
    @CrossOrigin
    @PostMapping
    Plantilla create(@RequestBody Plantilla plantilla){
        return (plantillaService.insert(plantilla));
    }
    @CrossOrigin
    @PutMapping
    Plantilla update(@RequestBody Plantilla plantilla){ return plantillaService.update(plantilla); }
    @CrossOrigin
    @RequestMapping(path="/{id}",method = RequestMethod.DELETE)
    Boolean delete(@PathVariable int id){
        return plantillaService.delete(id);
    }

}
