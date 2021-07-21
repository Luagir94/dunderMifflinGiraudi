import React, {useContext,useState,useEffect} from 'react'
import CartContext from "../Contexts/CartContext"   
import Table from 'react-bootstrap/Table'
export default function CartTable(){

  const {cartItems,clearCart,setWidgetNumber,removeItem} = useContext(CartContext)
  const [precioFinal, setPrecioFinal] = useState(undefined)
  const DATA = cartItems
  const precioTotal = ()=>{
    setPrecioFinal([...DATA.price])}
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
  {DATA.map((data) => (
              
        <tr>
        <td>{data.id}</td>
        <td>{data.item}</td>
        <td>{data.count}</td>
        <td>{(data.price)*(data.count)}</td>
        <td><button onClick={()=>{removeItem(data.id)}} >X</button></td>
        </tr>
       ))
      }
    <tr>
        <td>Precio Total</td>
        <td>{precioTotal}</td>
        </tr>
  </tbody>
</Table>
    )
}