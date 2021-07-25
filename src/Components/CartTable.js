import React, {useContext,useState,useEffect} from 'react'
import CartContext from "../Contexts/CartContext"   
import Table from 'react-bootstrap/Table'
export default function CartTable(){

  const {cartItems,clearCart,setWidgetNumber,removeItem,widgetNumber,totalPrice,setTotalPrice} = useContext(CartContext)
  const DATA = cartItems
  const [vSumTotal, setVSumTotal] = useState(undefined);
    return(
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th> 
      <th>Producto</th>
      <th>Cantidad</th>
      <th>Precio</th>
      <th>Eliminar Items</th>
    </tr>
  </thead>
  <tbody>
  {DATA.map((element) => (
              
        <tr>
        <td>{element.id}</td>
        <td>{element.item}</td>
        <td>{element.count}</td>
        <td>{(element.price)*(element.count)}</td>
        <td><button onClick={()=>{removeItem(element.id)
                                  setWidgetNumber(widgetNumber-(element.count))
                                  setTotalPrice(totalPrice -(element.price))}} >X</button></td>
        </tr>
       ))
      }
    <tr>
        <td>Precio Total</td>
        <td>{totalPrice}</td>
        </tr>
  </tbody>
</Table>
    )
    }
