import React,{useEffect,useContext} from 'react'
import CartContext from "../Contexts/CartContext"   
import Table from 'react-bootstrap/Table'
import CartTable from '../Components/CartTable'
export default function Contact(){
    const {cartItems,clearCart,setWidgetNumber} = useContext(CartContext)

    const DATA = cartItems

    const reiniciarCarrito = ()=>{
        setWidgetNumber(0)
        clearCart()
    }
    
    return(
       <>
        {DATA.map((data) => (
              
                <CartTable name={data.name} id={data.id}
                quantity={data.count} price={data.price}/>
              
            ))}


    
        <button onClick={reiniciarCarrito}>Vaciar Carrito</button>

       </>
    )
}