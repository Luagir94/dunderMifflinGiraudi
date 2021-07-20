import React from 'react'
import CartContext from "../Contexts/CartContext"   
import Table from 'react-bootstrap/Table'
export default function CartTable(quantity,name,id,price){

   

    
    return(
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Producto</th>
      <th>Cantidad</th>
      <th>Precio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price}</td>
    </tr>
  </tbody>
</Table>
    )
}