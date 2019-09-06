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
@Table(name = "listamuebles")
public class ListaMuebles implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer codListaMueble;

    @ManyToOne
    @JoinColumn(name = "mueble_codMueble")
    private Mueble mueble;
    
    @Column(name = "nombreLista", length = 80, nullable = false)
    private String nombreLista;
    
    @Column(name = "coordX")
    private double coordX;

    @Column(name = "coordY")
    private double coordY;

    @Column(name = "rotacion")
    private double rotacion;
    
    
    public Integer getCodListaMueble() {
        return codListaMueble;
    }

    public void setCodListaMueble(Integer codListaMueble) {
        this.codListaMueble = codListaMueble;
    }

    public Mueble getMueble() {
        return mueble;
    }

    public void setMueble(Mueble mueble) {
        this.mueble = mueble;
    }
    
    public String getNombreLista() {
        return nombreLista;
    }

    public void setNombreLista(String nombreLista) {
        this.nombreLista = nombreLista;
    }
    
     public double getCoordY() {
        return coordY;
    }

    public void setCoordY(double coordY) {
        this.coordY = coordY;
    }
    
    public double getCoordX() {
        return coordX;
    }

    public void setCoordX(double coordX) {
        this.coordX = coordX;
    }
    
     public double getRotacion() {
        return rotacion;
    }

    public void setRotacion(double rotacion) {
        this.rotacion = rotacion;
    }

 
}
