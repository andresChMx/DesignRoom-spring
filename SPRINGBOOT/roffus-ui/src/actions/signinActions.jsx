import {GRABAR_USUARIO, LISTAR_USUARIOS} from './actionTypes'


export function grabarUsuario(usuario) {
    return function (dispatch, getState) {
        fetch('http://localhost:8080/usuario', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })
            .then(response => response.json())
            .then(jsonData => {
                dispatch(setGrabarUsuario(jsonData))
            })
    };
}

export function setGrabarUsuario(respuesta) {
    return {
        type: GRABAR_USUARIO,
        respuesta
    }
}

export function fetchUsuarios() {
    return function (dispatch, getState) {

        fetch("http://localhost:8080/usuario")
            .then(response => response.json())
            .then(jsonData => {
                dispatch(setUsuarios(jsonData._embedded.user))
            })
    };
}

function setUsuarios(usuarios) {
    return {
        type: LISTAR_USUARIOS,
        usuarios
    }
}
