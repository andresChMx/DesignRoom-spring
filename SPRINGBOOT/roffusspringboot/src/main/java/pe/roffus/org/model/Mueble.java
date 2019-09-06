package pe.roffus.org.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Mueble {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer codMueble;

    private String nombreMueble;
    private double alto;
    private double ancho;
    private double largo;
    private String descripcion;
    private String imagen;
    private String icono;

    @ManyToOne
    @JoinColumn(name="codSubCategoria")
    private SubCategoria subcategoria;

    @ManyToOne
    @JoinColumn(name="codTienda")
    private TiendaVirtual tiendaVirtual;
}
