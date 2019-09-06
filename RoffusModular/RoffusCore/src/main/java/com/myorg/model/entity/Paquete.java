package com.myorg.model.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


@Entity
@Table(name = "paquete")
public class Paquete implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer codPaquete;

    @ManyToOne
    @JoinColumn(name = "listaMuebles_nombreLista")
    private ListaMuebles listaMuebles;

    @ManyToOne
    @JoinColumn(name = "plantilla_codPlantilla")
    private Plantilla plantilla;
    
    @ManyToOne
    @JoinColumn(name = "usuario_codUsuario")
    private Usuario usuario;
    
    
    public Integer getCodPaquete() {
        return codPaquete;
    }

    public void setCodPaquete(Integer codPaquete) {
        this.codPaquete = codPaquete;
    }

    public Plantilla getPlantilla() {
        return plantilla;
    }

    public void setPlantilla(Plantilla plantilla) {
        this.plantilla = plantilla;
    }

    public ListaMuebles getListaMueble() {
        return listaMuebles;
    }

    public void setListaMueble(ListaMuebles listaMuebles) {
        this.listaMuebles = listaMuebles;
    }
    
    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}
