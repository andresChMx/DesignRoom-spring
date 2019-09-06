package com.myorg.web.controller;

import java.io.Serializable;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.faces.view.ViewScoped;
import javax.inject.Inject;
import javax.inject.Named;

import org.primefaces.event.SelectEvent;

import com.myorg.model.entity.Plantilla;
import com.myorg.util.Message;
import com.myorg.business.PlantillaBusiness;

@Named
@ViewScoped
public class PlantillaController implements Serializable {

    private static final long serialVersionUID = 1L;

    @Inject
    private PlantillaBusiness plantillaBusiness;

    private Plantilla plantilla;
    private Plantilla plantillaSelec;
    private List<Plantilla> plantillas;

    @PostConstruct
    public void init() {
        plantilla = new Plantilla();
        plantillaSelec = new Plantilla();
        loadPlantillas();
    }

    public void loadPlantillas() {
        try {
            this.plantillas = plantillaBusiness.list();
        } catch (Exception e) {
            Message.messageError("Error Plantilla 2 :" + e.getMessage());
        }
    }

    public void savePlantilla() {
        try {
            if (plantilla.getCodPlantilla() != null) {

                Message.messageInfo("Registro actualizado exitosamente");
                plantillaBusiness.update(plantilla);
            } else {
                plantillaBusiness.insert(plantilla);
                Message.messageInfo("Registro guardado exitosamente");

            }
            loadPlantillas();
            clearForm();
        } catch (Exception e) {
            Message.messageError("Error Plantilla :" + e.getStackTrace());
        }
    }


    public void editPlantilla() {
        try {
            if (this.plantillaSelec != null) {
                this.plantilla = plantillaSelec;
            } else {
                Message.messageInfo("Debe seleccionar un Plantilla");
            }
        } catch (Exception e) {
            Message.messageError("Error Plantilla :" + e.getMessage());
        }

    }

    public void deletePlantilla() {
        try {
            if (this.plantillaSelec != null) {
                plantillaBusiness.delete(plantillaSelec);
                loadPlantillas();
                clearForm();

            } else {

            }
        } catch (Exception e) {

        }
    }

    public void selectPlantilla(SelectEvent e) {
        this.plantillaSelec = (Plantilla) e.getObject();
    }

    public void clearForm() {
        this.plantilla = new Plantilla();
        this.plantillaSelec = null;
    }

    public Plantilla getPlantilla() {
        return plantilla;
    }

    public void setPlantilla(Plantilla plantilla) {
        this.plantilla = plantilla;
    }

    public Plantilla getPlantillaSelec() {
        return plantillaSelec;
    }

    public void setPlantillaSelec(Plantilla plantillaSelec) {
        this.plantillaSelec = plantillaSelec;
    }

    public List<Plantilla> getPlantillas() {
        return plantillas;
    }

    public void setPlantillas(List<Plantilla> plantillas) {
        this.plantillas = plantillas;
    }
}
