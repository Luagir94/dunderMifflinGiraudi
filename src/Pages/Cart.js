import React,{useEffect,useContext} from 'react'
import CartContext from "../Contexts/CartContext"   
import Table from 'react-bootstrap/Table'
import CartTable from '../Components/CartTable'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
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
              


        <div id='botones'>
        <button className="btn btn-primary m-1" onClick={reiniciarCarrito}>Vaciar Carrito</button>
        <button className="btn btn-primary m-1"><Link to="/products">Volver a Productos</Link></button>
        </div>
        
       </>
    )
}