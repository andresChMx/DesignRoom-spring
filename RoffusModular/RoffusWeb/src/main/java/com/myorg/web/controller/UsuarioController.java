package com.myorg.web.controller;

import java.io.Serializable;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.faces.view.ViewScoped;
import javax.inject.Inject;
import javax.inject.Named;

import org.primefaces.event.SelectEvent;

import com.myorg.business.UsuarioBusiness;
import com.myorg.model.entity.Usuario;
import com.myorg.util.Message;

@Named
@ViewScoped
public class UsuarioController implements Serializable {

    private static final long serialVersionUID = 1L;

    @Inject
    private UsuarioBusiness usuarioBusiness;

    private Usuario usuario;
    private Usuario usuarioSelec;
    private List<Usuario> usuarios;

    @PostConstruct
    public void init() {
        usuario = new Usuario();
        usuarioSelec = new Usuario();
        loadUsuarios();
    }

    public void loadUsuarios() {
        try {
            this.usuarios = usuarioBusiness.list();
        } catch (Exception e) {
            Message.messageError("Error Usuario 2 :" + e.getMessage());
        }
    }

    public void saveUsuario() {
        try {
            if (usuario.getCodUsuario() != null) {
                if(usuarioBusiness.findByCorreo(usuario.getCorreo())==null){
                    Message.messageInfo("Registro actualizado exitosamente");
                    usuarioBusiness.update(usuario);
                    clearForm();
                }else{
                    Message.messageError("El correo ingresado ya existe");
                }

            } else {
                if(usuarioBusiness.findByCorreo(usuario.getCorreo())==null ){
                    usuarioBusiness.insert(usuario);
                    Message.messageInfo("Registro guardado exitosamente");
                    clearForm();
                }else{
                    Message.messageError("El correo ingresado ya existe");
                }

            }
            loadUsuarios();

        } catch (Exception e) {
            Message.messageError("Error Usuario :" + e.getStackTrace());
        }
    }

    public void editUsuario() {
        try {
            if (this.usuarioSelec != null) {
                this.usuario = usuarioSelec;
            } else {
                Message.messageInfo("Debe seleccionar un Usuario");
            }
        } catch (Exception e) {
            Message.messageError("Error Usuario :" + e.getMessage());
        }

    }

    public void deleteUsuario() {
        try {
            if (this.usuarioSelec != null) {
                usuarioBusiness.delete(usuarioSelec);
                loadUsuarios();
                clearForm();

            } else {

            }
        } catch (Exception e) {

        }
    }

    public void selectUsuario(SelectEvent e) {
        this.usuarioSelec = (Usuario) e.getObject();
    }

    public void clearForm() {
        this.usuario = new Usuario();
        this.usuarioSelec = null;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Usuario getUsuarioSelec() {
        return usuarioSelec;
    }

    public void setUsuarioSelec(Usuario usuarioSelec) {
        this.usuarioSelec = usuarioSelec;
    }

    public List<Usuario> getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(List<Usuario> usuarios) {
        this.usuarios = usuarios;
    }
}
