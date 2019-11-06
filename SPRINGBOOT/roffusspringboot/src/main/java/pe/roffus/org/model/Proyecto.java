package pe.roffus.org.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Proyecto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer codProyecto;
    private String nombreProyecto;//design
    private String contenido;
    @ManyToOne
    @JoinColumn(name="codUsuario")
    private Usuario usuario;
}
