import {LISTAR_CATEGORIAS,
        LISTAR_SUBCATEGORIAS_POR_CATEGORIA,
        LISTAR_MUEBLES_POR_SUBCATEGORIA,
        INSERTAR_PROYECTO,
        LISTAR_LISTAMUEBLES_POR_NOMBRE,
        BORRAR_LISTAMUEBLES_POR_NOMBRE} from './actionTypes';
import {LISTAR_PROYECTOS,
        BORRAR_PROYECTO_POR_ID,
        LISTAR_PLANTILLA_POR_ID} from './actionTypes';
import {INSERTAR_PLANTILLA,
        INSERTAR_LISTAMUEBLES} from './actionTypes';

export function fetchListaCategorias() {
    return function (dispatch, getState) {
        fetch("http://localhost:8081/api/categoria")//{method: 'GET',body: JSON.stringify(data),headers:{'Content-Type': 'application/json'}}
            .then(response => response.json())
            .then(jsonData => {
                dispatch({
                    type:LISTAR_CATEGORIAS,
                    respuesta:jsonData
                })
            })
    };
}
export function fetchListaSubcategoriasXcategoria(idCategoria) {
    return function (dispatch, getState) {
        fetch("http://localhost:8081/api/subcategoria/categoria/" + idCategoria)//{method: 'GET',body: JSON.stringify(data),headers:{'Content-Type': 'application/json'}}
            .then(response => response.json())
            .then(jsonData => {
                dispatch({
                    type:LISTAR_SUBCATEGORIAS_POR_CATEGORIA,
                    respuesta:jsonData
                })
            })
    };
}
export function fetchListaMueblesXsubcategoria(idSubCategoria) {
    return function (dispatch, getState) {
        fetch("http://localhost:8081/api/mueble/subcategoria/" + idSubCategoria)//{method: 'GET',body: JSON.stringify(data),headers:{'Content-Type': 'application/json'}}
            .then(response => response.json())
            .then(jsonData => {
                dispatch({
                    type:LISTAR_MUEBLES_POR_SUBCATEGORIA,
                    respuesta:jsonData
                })
            })
    };
}
//COMPONENTE PROYECTO
export function fetchListaProyectos() {
    return function (dispatch, getState) {
        fetch("http://localhost:8081/api/paquete")//{method: 'GET',body: JSON.stringify(data),headers:{'Content-Type': 'application/json'}}
            .then(response => response.json())
            .then(jsonData => {
                dispatch({
                    type:LISTAR_PROYECTOS,
                    respuesta:jsonData
                })
            })
    };
}

export function deleteProyectoXid(codProyecto){
    return function (dispatch, getState) {
        fetch("http://localhost:8081/api/paquete/" + codProyecto,{method: 'DELETE'})//{method: 'GET',body: JSON.stringify(data),headers:{'Content-Type': 'application/json'}}
            .then(response => response.json())
            .then(jsonData => {
                dispatch({
                    type:BORRAR_PROYECTO_POR_ID,
                    respuesta:jsonData
                })
            })
    };
}
export function fetchPlantillaXid(codPlantilla){
    return function (dispatch, getState) {
        fetch("http://localhost:8081/api/plantilla/" + codPlantilla,{method: 'GET'})//{method: 'GET',body: JSON.stringify(data),headers:{'Content-Type': 'application/json'}}
            .then(response => response.json())
            .then(jsonData => {
                dispatch({
                    type:LISTAR_PLANTILLA_POR_ID,
                    respuesta:jsonData
                })
            })
    };
}
//COMPONENTE INDEX (GUARDAR PROYECTO)
export function postPlantilla(plantilla){
    return function (dispatch, getState) {
        fetch("http://localhost:8081/api/plantilla",{
            method: 'POST', // or 'PUT'
            body: plantilla, // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          })//{method: 'GET',body: JSON.stringify(data),headers:{'Content-Type': 'application/json'}}
            .then(response => response.json())
            .then(jsonData => {
                dispatch({
                    type:INSERTAR_PLANTILLA,
                    respuesta:jsonData
                })
            })
    };
}
export function postListaMuebles(listamuebles){
    return function (dispatch, getState) {
        fetch("http://localhost:8081/api/listaMuebles",{
            method: 'POST', // or 'PUT'
            body: listamuebles, // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          })//{method: 'GET',body: JSON.stringify(data),headers:{'Content-Type': 'application/json'}}
            .then(response => response.json())
            .then(jsonData => {
                dispatch({
                    type:INSERTAR_LISTAMUEBLES,
                    respuesta:jsonData
                })
            })
    };
}
export function postProyecto(proyecto){
    console.log(proyecto);
    return function (dispatch, getState) {
        fetch("http://localhost:8081/api/paquete",{
            method: 'POST', // or 'PUT'
            body: proyecto, // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          })//{method: 'GET',body: JSON.stringify(data),headers:{'Content-Type': 'application/json'}}
            .then(response => response.json())
            .then(jsonData => {
                dispatch({
                    type:INSERTAR_PROYECTO,
                    respuesta:jsonData
                })
            })
    };
}
export function deleteListaMueblesXnombre(nombre){
    return function (dispatch, getState) {
        fetch("http://localhost:8081/api/listaMuebles/borrar?nombre=" + nombre ,{method: 'DELETE'})//{method: 'GET',body: JSON.stringify(data),headers:{'Content-Type': 'application/json'}}
        .then(response => response.json())
        .then(jsonData => {
            dispatch({
                type:BORRAR_LISTAMUEBLES_POR_NOMBRE,
                respuesta:jsonData
            })
        })
    };
}
//abrir
export function fetchListaMueblesXnombre(nombre){
    return function (dispatch, getState) {
        fetch("http://localhost:8081/api/listaMuebles/pornombre?nombre=" + nombre ,{method: 'GET'})//{method: 'GET',body: JSON.stringify(data),headers:{'Content-Type': 'application/json'}}
        .then(response => response.json())
        .then(jsonData => {
            dispatch({
                type:LISTAR_LISTAMUEBLES_POR_NOMBRE,
                respuesta:jsonData
            })
        })
    };
}