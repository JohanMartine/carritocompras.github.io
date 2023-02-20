import { TYPES } from "../actions/contador.Actions"

export const contadorinitialState = {
    contador:0
}

export const contadorinit = (initialState) => {
    return {
        contador:initialState.contador + 100
    }
} 

export function contadorReducer(state,action) {
    switch (action.type) {
        case TYPES.INCREMENT:
            return {contador:state.contador + 1}
        case TYPES.INCREMENT_5:
            return {contador:state.contador + 5}
        case TYPES.DECREMENT:
            return {contador:state.contador - 1}
        case TYPES.DECREMENT_5:
            return {contador:state.contador - 5}
        case TYPES.RESET:
            return {contador:0}
        default:
            return state;
    }
}