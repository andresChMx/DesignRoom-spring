package com.myorg.model.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tiendavirtual")
public class TiendaVirtual implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer codTiendaVirtual;

    @Column(name = "nombre", length = 80, nullable = false)
    private String nombre;

    @Column(name = "link", length = 80, nullable = false)
    private String link;

    public Integer getCodTiendaVirtual() {
        return codTiendaVirtual;
    }

    public void setCodTiendaVirtual(Integer codTiendaVirtual) {
        this.codTiendaVirtual = codTiendaVirtual;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

}
