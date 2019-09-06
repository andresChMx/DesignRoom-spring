package com.myorg.web.controller;

import java.io.Serializable;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.faces.view.ViewScoped;
import javax.inject.Inject;
import javax.inject.Named;

import org.primefaces.event.SelectEvent;

import com.myorg.business.PaqueteBusiness;
import com.myorg.model.entity.Paquete;
import com.myorg.model.entity.Plantilla;
import com.myorg.business.ListaMueblesBusiness;
import com.myorg.model.entity.ListaMuebles;
import com.myorg.business.UsuarioBusiness;
import com.myorg.model.entity.Usuario;

import com.myorg.web.controller.UserManager;

import com.myorg.util.Message;
import com.myorg.business.PlantillaBusiness;

@Named
@ViewScoped
public class PaqueteController implements Serializable{
    
     private static final long serialVersionUID = 1L;

    @Inject
    private PlantillaBusiness plantillaBusiness;

    @Inject
    private ListaMueblesBusiness listaMueblesBusiness;

    @Inject
    private PaqueteBusiness paqueteBusiness;
    
    @Inject
    private UsuarioBusiness usuarioBusiness;

    private Paquete paquete;
    private Paquete paqueteSelec;
    private List<Paquete> paquetes;

    private Paquete paqueteBuscador;
    private List<Paquete> paquetesBuscador;
    
    private Plantilla plantilla;
    private List<Plantilla> plantillas;

    private ListaMuebles listamueble;
    private List<ListaMuebles> listamuebles;
    
    private Usuario usuario;
    private List<Usuario> usuarios;

    @PostConstruct
    public void init() {
        paquete = new Paquete();
        paqueteSelec = new Paquete();
        
        BuscarPack();
        loadPaquetes();
        loadListaMuebles();
        loadPlantillas();
        loadUsuarios();
    }

    public void loadListaMuebles() {
        try {
            this.listamuebles = listaMueblesBusiness.list();
        } catch (Exception e) {
            Message.messageError("Error Mueble 2 :" + e.getMessage());
        }
    }

    public void loadPlantillas() {
        try {
            this.plantillas = plantillaBusiness.list();
        } catch (Exception e) {
            Message.messageError("Error Plantilla 2 :" + e.getMessage());
        }
    }
    
    public void loadUsuarios() {
        try {
            this.usuarios = usuarioBusiness.list();
        } catch (Exception e) {
            Message.messageError("Error Usuario 2 :" + e.getMessage());
        }
    }

    public void BuscarPack(){
        try {
            //No funciona aun. deberia recoger el usuario para buscar los paquetes
            //this.paquetesBuscador = paqueteBusiness.listbyUser(userManager.getCurrentUser());
        } catch (Exception e) {
            Message.messageError("No hay Pack :" + e.getMessage());
        }
    }
    
    public void loadPaquetes() {
        try {
            this.paquetes = paqueteBusiness.list();
        } catch (Exception e) {
            Message.messageError("Error Paquete 2 :" + e.getMessage());
        }
    }

    public void savePaquete() {
        try {
            if (paquete.getCodPaquete() != null) {

                Message.messageInfo("Registro actualizado exitosamente");
                paquete.setPlantilla(plantilla);
                paquete.setListaMueble(listamueble);
                paquete.setUsuario(usuario);
                paqueteBusiness.update(paquete);
            } else {
                paquete.setPlantilla(plantilla);
                paquete.setListaMueble(listamueble);
                paquete.setUsuario(usuario);
                paqueteBusiness.insert(paquete);
                Message.messageInfo("Registro guardado exitosamente");

            }
            loadPaquetes();
            clearForm();
        } catch (Exception e) {
            Message.messageError("Error Paquete :" + e.getStackTrace());
        }
    }

    public void editPaquete() {
        try {
            if (this.paqueteSelec != null) {
                this.paquete = paqueteSelec;
            } else {
                Message.messageInfo("Debe seleccionar un Paquete");
            }
        } catch (Exception e) {
            Message.messageError("Error Paquete :" + e.getMessage());
        }

    }

    public void deletePaquete() {
        try {
            if (this.paqueteSelec != null) {
                paqueteBusiness.delete(paqueteSelec);
                loadPaquetes();
                clearForm();

            } else {

            }
        } catch (Exception e) {

        }
    }

    public void selectPaquete(SelectEvent e) {
        this.paqueteSelec = (Paquete) e.getObject();
    }

    public void clearForm() {
        this.paquete = new Paquete();
        this.paqueteSelec = null;
    }

    public Paquete getPaquete() {
        return paquete;
    }

    public void setPaquete(Paquete paquete) {
        this.paquete = paquete;
    }
    
    public Paquete getPaqueteBuscador() {
        return paqueteBuscador;
    }

    public void setPaqueteBuscador(Paquete paquete) {
        this.paqueteBuscador = paquete;
    }

    public Paquete getPaqueteSelec() {
        return paqueteSelec;
    }

    public void setPaqueteSelec(Paquete paqueteSelec) {
        this.paqueteSelec = paqueteSelec;
    }

    public List<Paquete> getPaquetesBuscador() {
        return paquetesBuscador;
    }

    public void setPaquetesBuscador(List<Paquete> paquetes) {
        this.paquetesBuscador = paquetes;
    }   
    
    
    public List<Paquete> getPaquetes() {
        return paquetes;
    }

    public void setPaquetes(List<Paquete> paquetes) {
        this.paquetes = paquetes;
    }   

    public List<Plantilla> getPlantillas() {
        return plantillas;
    }

    public void setPlantillas(List<Plantilla> plantillas) {
        this.plantillas = plantillas;
    }

    public Plantilla getPlantilla() {
        return plantilla;
    }

    public void setPlantilla(Plantilla plantilla) {
        this.plantilla = plantilla;
    }
    
    public List<ListaMuebles> getListaMuebles() {
        return listamuebles;
    }

    public void setListaMuebles(List<ListaMuebles> listamuebles) {
        this.listamuebles = listamuebles;
    }

    public ListaMuebles getListaMueble() {
        return listamueble;
    }

    public void setListaMueble(ListaMuebles listamueble) {
        this.listamueble = listamueble;
    }
    
    public List<Usuario> getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(List<Usuario> usuarios) {
        this.usuarios = usuarios;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
    
}
