import React,{useEffect,useContext} from 'react'
import CartContext from "../Contexts/CartContext"   
import Table from 'react-bootstrap/Table'
import CartTable from '../Components/CartTable'
export default function Contact(){
    const {cartItems} = useContext(CartContext)


    
    return(
       <>
        {cartItems.map((data) => (
              
                <CartTable name={data.name} id={data.id}
                quantity={data.count} price={data.price}/>
              
            ))}

       </>
    )
}