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
@Table(name = "mueble")
public class Mueble implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer codMueble;

    @Column(name = "nombre", length = 80, nullable = false)
    private String nombre;

    @Column(name = "alto")
    private double alto;

    @Column(name = "ancho")
    private double ancho;

    @Column(name = "largo")
    private double largo;

    @Column(name = "tDescripcion", length = 80, nullable = false)
    private String tDescripcion;
    
    @Column(name = "imagen", length = 80, nullable = false)
    private String imagen;
    
    @Column(name = "icono", length = 80, nullable = false)
    private String icono;

    @ManyToOne
    @JoinColumn(name = "categoria_codCategoria")
    private Categoria categoria;

    @ManyToOne
    @JoinColumn(name = "tiendavirtual_codTiendaVirtual")
    private TiendaVirtual tiendavirtual;

    public Integer getCodMueble() {
        return codMueble;
    }

    public void setCodMueble(Integer codMueble) {
        this.codMueble = codMueble;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getAlto() {
        return alto;
    }

    public void setAlto(double alto) {
        this.alto = alto;
    }

    public double getAncho() {
        return ancho;
    }

    public void setAncho(double ancho) {
        this.ancho = ancho;
    }

    public double getLargo() {
        return largo;
    }

    public void setLargo(double largo) {
        this.largo = largo;
    }

    public String getTDescripcion() {
        return tDescripcion;
    }

    public void setTDescripcion(String tDescripcion) {
        this.tDescripcion = tDescripcion;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public TiendaVirtual getTiendaVirtual() {
        return tiendavirtual;
    }

    public void setTiendaVirtual(TiendaVirtual tiendavirtual) {
        this.tiendavirtual = tiendavirtual;
    }
    
    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }
    
    public String getIcono() {
        return icono;
    }

    public void setIcono(String icono) {
        this.icono = icono;
    }

}
