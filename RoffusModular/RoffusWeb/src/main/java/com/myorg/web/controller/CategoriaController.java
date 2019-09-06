package com.myorg.web.controller;

import java.io.Serializable;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.faces.view.ViewScoped;
import javax.inject.Inject;
import javax.inject.Named;

import org.primefaces.event.SelectEvent;

import com.myorg.business.CategoriaBusiness;
import com.myorg.model.entity.Categoria;
import com.myorg.util.Message;

@Named
@ViewScoped
public class CategoriaController implements Serializable {
    
    private static final long serialVersionUID = 1L;

	@Inject
	private CategoriaBusiness categoriaBusiness;

	private Categoria categoria;
	private Categoria categoriaSelec;
	private List<Categoria> categorias;


	@PostConstruct
	public void init() {
		categoria = new Categoria();
		categoriaSelec = new Categoria();
		loadCategorias();
	}

	public void loadCategorias() {
		try {
			this.categorias = categoriaBusiness.list();
		} catch (Exception e) {
			Message.messageError("Error Categoria 2 :" + e.getMessage());
		}
	}

	public void saveCategoria() {
		try {
			if (categoria.getCodCategoria()!= null) {

				Message.messageInfo("Registro actualizado exitosamente");
				categoriaBusiness.update(categoria);
			} else {
				categoriaBusiness.insert(categoria);
				Message.messageInfo("Registro guardado exitosamente");

			}
			loadCategorias();
			clearForm();
		} catch (Exception e) {
			Message.messageError("Error Categoria :" + e.getStackTrace());
		}
	}

	public void editCategoria() {
		try {
			if (this.categoriaSelec!=null) {
				this.categoria = categoriaSelec;
			} else {
				Message.messageInfo("Debe seleccionar un Categoria");
			}
		} catch (Exception e) {
			Message.messageError("Error Categoria :" + e.getMessage());
		}

	}
	
	public void deleteCategoria() {
		try {
			if (this.categoriaSelec != null) {
                                Message.messageInfo("Registro fue eliminado exitosamente");
				categoriaBusiness.delete(categoriaSelec);
				loadCategorias();
				clearForm();

			} else {
                            Message.messageInfo("Debe seleccionar una Categoria");
			}
		} catch (Exception e) {

		}
	}

	public void selectCategoria(SelectEvent e) {
		this.categoriaSelec = (Categoria) e.getObject();
	}
	
	public void clearForm() {
		this.categoria = new Categoria();
		this.categoriaSelec=null;
	}

	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}

	public Categoria getCategoriaSelec() {
		return categoriaSelec;
	}

	public void setCategoriaSelec(Categoria categoriaSelec) {
		this.categoriaSelec = categoriaSelec;
	}

	public List<Categoria> getCategorias() {
		return categorias;
	}

	public void setCategorias(List<Categoria> categorias) {
		this.categorias = categorias;
	}
}
