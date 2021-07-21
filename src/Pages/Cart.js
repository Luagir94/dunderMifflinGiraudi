import React,{useEffect,useContext} from 'react'
import CartContext from "../Contexts/CartContext"   
import Table from 'react-bootstrap/Table'
import CartTable from '../Components/CartTable'
export default function Contact(){
    const {cartItems,clearCart} = useContext(CartContext)

    const DATA = cartItems
    
    return(
       <>
        {DATA.map((data) => (
              
                <CartTable name={data.name} id={data.id}
                quantity={data.count} price={data.price}/>
              
            ))}
        <button onClick={clearCart}>Vaciar Carrito</button>

       </>
    )
}