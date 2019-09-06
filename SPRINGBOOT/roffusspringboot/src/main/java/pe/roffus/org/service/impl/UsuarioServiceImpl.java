package pe.roffus.org.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.roffus.org.model.Usuario;
import pe.roffus.org.repository.UsuarioRepository;
import pe.roffus.org.service.UsuarioService;

import java.util.List;
@Service
public class UsuarioServiceImpl implements UsuarioService {

    UsuarioRepository usuarioRepository;

    @Autowired
    public UsuarioServiceImpl(UsuarioRepository usuarioRepository){this.usuarioRepository=usuarioRepository;}

    @Override
    public Usuario insert(Usuario usuario){
        return usuarioRepository.save(usuario);
    }

    @Override
    public Usuario update(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    @Override
    public Boolean delete(int id) {
        usuarioRepository.deleteById(id);
        return true;
    }

    @Override
    public Usuario getById(int id) {
        return usuarioRepository.findById(id).orElse(null);
    }

    @Override
    public List<Usuario> listAll() {
        return usuarioRepository.findAll();
    }

}
