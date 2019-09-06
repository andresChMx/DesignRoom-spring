package pe.roffus.org.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Paquete {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer codPaquete;

    private String nombrePaquete;

    //@ManyToOne
    //@JoinColumn(name="codLista")
    private String listaMuebles;

    @ManyToOne
    @JoinColumn(name="codPlantilla")
    private Plantilla plantilla;

    @ManyToOne
    @JoinColumn(name="codUsuario")
    private Usuario usuario;
}
