package pe.roffus.org.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class SubCategoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer codSubCategoria;

    @ManyToOne
    @JoinColumn(name="codCategoria")
    private Categoria categoria;

    private String nombreSubCategoria;
}
