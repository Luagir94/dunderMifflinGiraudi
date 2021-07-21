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
      <td>123</td>
      <td>123</td>
      <td>321</td>
      <td>412</td>
    </tr>
    <tr>
      <td>213</td>
      <td>213</td>
      <td>123</td>
      <td>123</td>
    </tr>
  </tbody>
</Table>
    )
}