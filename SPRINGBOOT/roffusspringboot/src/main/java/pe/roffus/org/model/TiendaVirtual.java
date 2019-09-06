package pe.roffus.org.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class TiendaVirtual {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer codTienda;

    private String nombreTienda;
    private String link;
}
