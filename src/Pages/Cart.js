import React,{useEffect,useContext} from 'react'
import CartContext from "../Contexts/CartContext"   
import Table from 'react-bootstrap/Table'
import CartTable from '../Components/CartTable'
import { Link } from 'react-router-dom';
export default function Contact(){
    const {cartItems,clearCart,setWidgetNumber} = useContext(CartContext)

    const DATA = cartItems

    const reiniciarCarrito = ()=>{
        setWidgetNumber(0)
        clearCart()
    }
    
    return(
       <>
        
                <CartTable/>
              


    
        <button onClick={reiniciarCarrito}>Vaciar Carrito</button>
        <button><Link to="/products">Volver a Productos</Link></button>
       </>
    )
}