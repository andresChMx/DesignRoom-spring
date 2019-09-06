package com.myorg.web.controller;

import java.io.Serializable;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.faces.view.ViewScoped;
import javax.inject.Inject;
import javax.inject.Named;

import org.primefaces.event.SelectEvent;

import com.myorg.model.entity.TiendaVirtual;
import com.myorg.util.Message;
import com.myorg.business.TiendaVirtualBusiness;

@Named
@ViewScoped
public class TiendaVirtualController implements Serializable {

    private static final long serialVersionUID = 1L;

    @Inject
    private TiendaVirtualBusiness tiendavirtualBusiness;

    private TiendaVirtual tiendavirtual;
    private TiendaVirtual tiendavirtualSelec;
    private List<TiendaVirtual> tiendasvirtuales;

    @PostConstruct
    public void init() {
        tiendavirtual = new TiendaVirtual();
        tiendavirtualSelec = new TiendaVirtual();
        loadTiendasVirtuales();
    }

    public void loadTiendasVirtuales() {
        try {
            this.tiendasvirtuales = tiendavirtualBusiness.list();
        } catch (Exception e) {
            Message.messageError("Error TiendaVirtual 2 :" + e.getMessage());
        }
    }

    public void saveTiendaVirtual() {
        try {
            if (tiendavirtual.getCodTiendaVirtual() != null) {

                Message.messageInfo("Registro actualizado exitosamente");
                tiendavirtualBusiness.update(tiendavirtual);
            } else {
                tiendavirtualBusiness.insert(tiendavirtual);
                Message.messageInfo("Registro guardado exitosamente");

            }
            loadTiendasVirtuales();
            clearForm();
        } catch (Exception e) {
            Message.messageError("Error TiendaVirtual :" + e.getStackTrace());
        }
    }

    public void editTiendaVirtual() {
        try {
            if (this.tiendavirtualSelec != null) {
                this.tiendavirtual = tiendavirtualSelec;
            } else {
                Message.messageInfo("Debe seleccionar un TiendaVirtual");
            }
        } catch (Exception e) {
            Message.messageError("Error TiendaVirtual :" + e.getMessage());
        }

    }

    public void deleteTiendaVirtual() {
        try {
            if (this.tiendavirtualSelec != null) {
                tiendavirtualBusiness.delete(tiendavirtualSelec);
                loadTiendasVirtuales();
                clearForm();

            } else {

            }
        } catch (Exception e) {

        }
    }

    public void selectTiendaVirtual(SelectEvent e) {
        this.tiendavirtualSelec = (TiendaVirtual) e.getObject();
    }

    public void clearForm() {
        this.tiendavirtual = new TiendaVirtual();
        this.tiendavirtualSelec = null;
    }

    public TiendaVirtual getTiendaVirtual() {
        return tiendavirtual;
    }

    public void setTiendaVirtual(TiendaVirtual tiendavirtual) {
        this.tiendavirtual = tiendavirtual;
    }

    public TiendaVirtual getTiendaVirtualSelec() {
        return tiendavirtualSelec;
    }

    public void setTiendaVirtualSelec(TiendaVirtual tiendavirtualSelec) {
        this.tiendavirtualSelec = tiendavirtualSelec;
    }

    public List<TiendaVirtual> getTiendasVirtuales() {
        return tiendasvirtuales;
    }

    public void setTiendasVirtuales(List<TiendaVirtual> tiendasvirtuales) {
        this.tiendasvirtuales = tiendasvirtuales;
    }

}
