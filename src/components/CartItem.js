

const CartItem = ({data,delFromCart}) => {
    let { id, name, price,quantity} = data;
    //console.log(cart);


    /*si el producto ya existe que se coloque x1 x2 x3 en el carrito */

    

    //console.log(cart.filter(el => el.id === id));

  return (
    <div style={{borderBottom:"thin solid gray"}}>
        <h4>{name}</h4>
        <h5>${price}.00 x {quantity} = $ {price*quantity}.00</h5>
        <button onClick={() => delFromCart(id)}>Eliminar</button>
        <button onClick={() => delFromCart(id,true)}>Eliminar Todos</button>
    </div>
  )
}

export default CartItem