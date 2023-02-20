import { useReducer } from "react"
import { TYPES } from "../actions/shoppingActions";
import { shoppinginitialState } from "../reducers/shoppingReducer"
import {shoppingReducer} from "../reducers/shoppingReducer"
import CartItem from "./CartItem";
import Productitem from "./Productitem";
/*APP para simmular comportamiento de carrito de comprasa traves del
hook useReducer */
const ShoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppinginitialState)
    const {products, cart} = state;

    const addToCart = (id) => {
        dispatch({type:TYPES.ADD_TO_CART, payload:id})
    };

    const delFromCart = (id,all = false) => {
        if(all){
            dispatch({type:TYPES.REMOVE_ALL_FROM_CART, payload:id})
        }
        else{
            dispatch({type:TYPES.REMOVE_ONE_FROM_CART, payload:id})
        }
    };

    const clearCart = () => {
        dispatch({type:TYPES.CLEAR_CART});
    };


  return (
    <div>
        <h2>Carrito de Compras</h2>
        <h3>Productos</h3>
        <article className="box grid-responsive">
            {products.map( product => <Productitem 
                key={product.id} 
                data={product} 
                addToCart={addToCart}/>)}


        </article>
        <h3>Carrito</h3>
        <article className="box">
            <button onClick={clearCart}>Limpiar Carrito</button>
            {
                cart.map((item, index) => <CartItem cart={cart} key={index} data={item} delFromCart={delFromCart} />)
            }
        </article>
    </div>
  )
}

export default ShoppingCart