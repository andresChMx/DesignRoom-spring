package com.myorg.model.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "usuario")
public class Usuario implements Serializable {
    
    private static final long serialVersionUID = 1L;
        @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer codUsuario;
        
        @Column(name = "nombre", length = 80, nullable = false)
	private String nombre;
        
        @Column(name = "correo", length = 80, nullable = false)
	private String correo;
        
        @Column(name = "contrase�a", length = 80, nullable = false)
	private String contrase�a;
        
        @Column(name = "foto", length = 80, nullable = true)
	private String foto;
        
        @Column(name = "nacimiento", length = 80, nullable = false)
	private String nacimiento;
        

	public Integer getCodUsuario() {
		return codUsuario;
	}

	public void setCodUsuario(Integer codUsuario) {
		this.codUsuario=codUsuario;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre=nombre;
	}
        
        public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo=correo;
	}
        
        public String getContrase�a() {
		return contrase�a;
	}

	public void setContrase�a(String contrase�a) {
		this.contrase�a=contrase�a;
	}
        
        public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto=foto;
	}
        
        public String getNacimiento() {
		return nacimiento;
	}

	public void setNacimiento(String nacimiento) {
		this.nacimiento=nacimiento;
	}
}
