import {LISTAR_CATEGORIAS,LISTAR_SUBCATEGORIAS_POR_CATEGORIA,LISTAR_MUEBLES_POR_SUBCATEGORIA} from '../actions/actionTypes';

export function categoria(state = {}, action) {
    switch (action.type) {
        case LISTAR_CATEGORIAS:
            return Object.assign({}, state, {
                actionType: action.type,
                respuesta: action.respuesta,
                error: false
            });
        case LISTAR_SUBCATEGORIAS_POR_CATEGORIA:
            return Object.assign({}, state, {
                actionType: action.type,
                respuesta: action.respuesta,
                error: false
            });
        case LISTAR_MUEBLES_POR_SUBCATEGORIA:
            return Object.assign({}, state, {
                actionType: action.type,
                respuesta: action.respuesta,
                error: false
            });
        default:
            return state;
    }
}