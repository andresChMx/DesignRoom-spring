package com.myorg.web.controller;

import java.io.Serializable;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.faces.view.ViewScoped;
import javax.inject.Inject;
import javax.inject.Named;

import org.primefaces.event.SelectEvent;

import com.myorg.business.CategoriaBusiness;
import com.myorg.business.MuebleBusiness;
import com.myorg.model.entity.Categoria;
import com.myorg.model.entity.TiendaVirtual;
import com.myorg.model.entity.Mueble;
import com.myorg.util.Message;
import com.myorg.business.TiendaVirtualBusiness;

@Named
@ViewScoped
public class MuebleController implements Serializable {

    private static final long serialVersionUID = 1L;

    @Inject
    private CategoriaBusiness categoriaBusiness;

    @Inject
    private TiendaVirtualBusiness tiendavirtualBusiness;

    @Inject
    private MuebleBusiness muebleBusiness;

    private Mueble mueble;
    private Mueble muebleSelec;
    private List<Mueble> muebles;

    private Categoria categoria;
    private List<Categoria> categorias;

    private TiendaVirtual tiendavirtual;
    private List<TiendaVirtual> tiendasvirtuales;

    @PostConstruct
    public void init() {
        mueble = new Mueble();
        muebleSelec = new Mueble();

        loadMuebles();
        loadTiendasVirtuales();
        loadCategorias();
    }

    public void loadTiendasVirtuales() {
        try {
            this.tiendasvirtuales = tiendavirtualBusiness.list();
        } catch (Exception e) {
            Message.messageError("Error TiendaVirtual 2 :" + e.getMessage());
        }
    }

    public void loadCategorias() {
        try {
            this.categorias = categoriaBusiness.list();
        } catch (Exception e) {
            Message.messageError("Error Categoria 2 :" + e.getMessage());
        }
    }

    public void loadMuebles() {
        try {
            this.muebles = muebleBusiness.list();
        } catch (Exception e) {
            Message.messageError("Error Mueble 2 :" + e.getMessage());
        }
    }

    public void saveMueble() {
        try {
            if (mueble.getCodMueble() != null) {

                Message.messageInfo("Registro actualizado exitosamente");
                mueble.setCategoria(categoria);
                mueble.setTiendaVirtual(tiendavirtual);
                muebleBusiness.update(mueble);
            } else {
                mueble.setCategoria(categoria);
                mueble.setTiendaVirtual(tiendavirtual);
                muebleBusiness.insert(mueble);
                Message.messageInfo("Registro guardado exitosamente");

            }
            loadMuebles();
            clearForm();
        } catch (Exception e) {
            Message.messageError("Error Mueble :" + e.getStackTrace());
        }
    }

    public void editMueble() {
        try {
            if (this.muebleSelec != null) {
                this.mueble = muebleSelec;
            } else {
                Message.messageInfo("Debe seleccionar un Mueble");
            }
        } catch (Exception e) {
            Message.messageError("Error Mueble :" + e.getMessage());
        }

    }

    public void deleteMueble() {
		try {
			if (this.muebleSelec != null) {
                                Message.messageInfo("Registro fue eliminado exitosamente");
				muebleBusiness.delete(muebleSelec);
				loadMuebles();
				clearForm();

			} else {
                            Message.messageInfo("Debe seleccionar un registro");
			}
		} catch (Exception e) {

		}
    }

    public void selectMueble(SelectEvent e) {
        this.muebleSelec = (Mueble) e.getObject();
    }

    public void clearForm() {
        this.mueble = new Mueble();
        this.muebleSelec = null;
    }

    public Mueble getMueble() {
        return mueble;
    }

    public void setMueble(Mueble mueble) {
        this.mueble = mueble;
    }

    public Mueble getMuebleSelec() {
        return muebleSelec;
    }

    public void setMuebleSelec(Mueble muebleSelec) {
        this.muebleSelec = muebleSelec;
    }

    public List<Mueble> getMuebles() {
        return muebles;
    }

    public void setMuebles(List<Mueble> muebles) {
        this.muebles = muebles;
    }

    public List<Categoria> getCategorias() {
        return categorias;
    }

    public void setCategorias(List<Categoria> categorias) {
        this.categorias = categorias;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public List<TiendaVirtual> getTiendasVirtuales() {
        return tiendasvirtuales;
    }

    public void setTiendasVirtuales(List<TiendaVirtual> tiendasvirtuales) {
        this.tiendasvirtuales = tiendasvirtuales;
    }

    public TiendaVirtual getTiendaVirtual() {
        return tiendavirtual;
    }

    public void setTiendaVirtual(TiendaVirtual tiendavirtual) {
        this.tiendavirtual = tiendavirtual;
    }

}
