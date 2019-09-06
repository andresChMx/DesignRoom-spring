package pe.roffus.org.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import pe.roffus.org.model.Usuario;
import pe.roffus.org.service.UsuarioService;

import java.util.List;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
    UsuarioService usuarioService;

    @Autowired
    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService=usuarioService;
    }
    @CrossOrigin
    @RequestMapping
    List<Usuario> listUsuarios(){       return usuarioService.listAll();    }
    @CrossOrigin
    @RequestMapping(path="/{id}",method = RequestMethod.GET)
    Usuario getUsuario(@PathVariable int id){
        return usuarioService.getById(id);
    }
    @CrossOrigin
    @PostMapping
    Usuario create(@RequestBody Usuario usuario){
        return (usuarioService.insert(usuario));
    }
    @CrossOrigin
    @PutMapping
    Usuario update(@RequestBody Usuario usuario){ return usuarioService.update(usuario); }
    @CrossOrigin
    @RequestMapping(path="/{id}",method = RequestMethod.DELETE)
    Boolean delete(@PathVariable int id){
        return usuarioService.delete(id);
    }

}
