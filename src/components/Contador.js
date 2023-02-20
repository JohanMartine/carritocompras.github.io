import React, { useReducer } from 'react';

/*Manejo del estado a trves de useReducer
-----------------------------------------
-----------------------------------------
----------------------------------------- */

const TYPES = {
    INCREMENT:"INCREMENT",
    INCREMENT_5:"INCREMENT_5",
    DECREMENT:"DECREMENT",
    DECREMENT_5:"DECREMENT_5",
    RESET:"RESET"
}


function reducer(state,action) {
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

const initialState = {
    contador:0
}

const init = (initialState) => {
    return {
        contador:initialState.contador + 100
    }
} 


const Contador = () => {
//const [count, setCount] = useState(0);
const [state, dispatch] = useReducer(reducer, initialState,init)

const sumar = () => dispatch({type:TYPES.INCREMENT})
const restar = () => dispatch({type:TYPES.DECREMENT})
const sumar_5 = () => dispatch({type:TYPES.INCREMENT_5})
const restar_5 = () => dispatch({type:TYPES.DECREMENT_5})
const reset = () => dispatch({type:TYPES.RESET})


//const sumar = () => setCount(count + 1)
//const restar = () => setCount(count - 1)

  return (
    <div style={{textAlign:"center"}}>
        <h2>Contador</h2>
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