import {INSERTAR_PLANTILLA,INSERTAR_LISTAMUEBLES,INSERTAR_PROYECTO,BORRAR_LISTAMUEBLES_POR_NOMBRE} from '../actions/actionTypes';
export function root(state = {}, action) {
    switch (action.type) {
        case INSERTAR_PLANTILLA:
            return Object.assign({}, state, {
                actionType: action.type,
                respuesta: action.respuesta,
                error: false
            });
        case INSERTAR_LISTAMUEBLES:
            return Object.assign({}, state, {
                actionType: action.type,
                respuesta: action.respuesta,
                error: false
            });   
        case INSERTAR_PROYECTO:
            return Object.assign({}, state, {
                actionType: action.type,
                respuesta: action.respuesta,
                error: false
            });    
        case BORRAR_LISTAMUEBLES_POR_NOMBRE:
            return Object.assign({}, state, {
                actionType: action.type,
                respuesta: action.respuesta,
                error: false
            }); 
        default:
            return state;
    }
}