package pe.roffus.org.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.roffus.org.model.Usuario;

import java.util.List;

public interface UsuarioRepository extends JpaRepository<Usuario,Integer> {

}
