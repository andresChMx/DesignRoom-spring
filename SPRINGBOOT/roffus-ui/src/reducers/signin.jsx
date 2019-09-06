
import {GRABAR_USUARIO, LISTAR_USUARIOS} from "../actions/actionTypes";

export default function signin(state = {}, action) {
    switch (action.type) {
        case GRABAR_USUARIO:
            return Object.assign({}, state, {
                actionType: action.type,
                signin: action.respuesta,
                error: false
            });
        case LISTAR_USUARIOS:
            return Object.assign({}, state, {
                actionType: action.type,
                cuentas: action.cuentas
            });

        default:
            return state;
    }
}