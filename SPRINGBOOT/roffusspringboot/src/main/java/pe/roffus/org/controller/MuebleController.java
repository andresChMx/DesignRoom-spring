package pe.roffus.org.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import pe.roffus.org.model.Mueble;
import pe.roffus.org.service.MuebleService;

import java.util.List;

@RestController
@RequestMapping("/mueble")
public class MuebleController {
    MuebleService muebleService;

    @Autowired
    public MuebleController(MuebleService muebleService) {
        this.muebleService=muebleService;
    }
    @CrossOrigin
    @RequestMapping
    List<Mueble> listMuebles(){       return muebleService.listAll();    }
    @CrossOrigin
    @RequestMapping(path="/{id}",method = RequestMethod.GET)
    Mueble getMueble(@PathVariable int id){
        return muebleService.getById(id);
    }
    @CrossOrigin
    @PostMapping
    Mueble create(@RequestBody Mueble mueble){
        return (muebleService.insert(mueble));
    }
    @CrossOrigin
    @PutMapping
    Mueble update(@RequestBody Mueble mueble){ return muebleService.update(mueble); }
    @CrossOrigin
    @RequestMapping(path="/{id}",method = RequestMethod.DELETE)
    Boolean delete(@PathVariable int id){
        return muebleService.delete(id);
    }

    @CrossOrigin
    @RequestMapping(path="/subcategoria/{id}",method = RequestMethod.GET)
    public List<Mueble> findMuebleBySubCategoria(@PathVariable int id){
        return muebleService.findMuebleBySubCategoria(id);
    }

}
