import React, { useReducer } from 'react';
import { TYPES } from '../actions/contador.Actions';
import { contadorinit, contadorinitialState, contadorReducer } from '../reducers/contadorReducer';

/*Manejo del estado a trves de useReducer
-----------------------------------------
-----------------------------------------
----------------------------------------- */

const Contador = () => {

const [state, dispatch] = useReducer(contadorReducer, contadorinitialState,contadorinit)

const sumar = () => dispatch({type:TYPES.INCREMENT})
const restar = () => dispatch({type:TYPES.DECREMENT})
const sumar_5 = () => dispatch({type:TYPES.INCREMENT_5})
const restar_5 = () => dispatch({type:TYPES.DECREMENT_5})
const reset = () => dispatch({type:TYPES.RESET})

  return (
    <div style={{textAlign:"center"}}>
        <h2>Contador Mejorado Reducer</h2>
        <nav>
            <button onClick={sumar_5}>+5</button>
            <button onClick={sumar}>+</button>
            <button onClick={reset}>0</button>
            <button onClick={restar}>-</button>
            <button onClick={restar_5}>-5</button>
        </nav>
        <h3>{state.contador}</h3>
    </div>
  )
}

export default Contador