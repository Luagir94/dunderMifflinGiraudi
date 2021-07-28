import React, {useState, useContext} from "react";
import { Form } from 'react-bootstrap';
import db from '../firebase/index'
import { CartContext } from "../components/cartContext";

function Checkout(suma) {

  const context = useContext(CartContext)
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [error, setError] = useState('')
  let total = suma
  
  
  
  const setPedido = async (e) => {
    e.preventDefault()
    
    if(!telefono.trim()){
      setError('Telefono vacio')
    }
    if(!email.trim()){
      setError('email vacio')
    }
    if(!nombre.trim()){
      setError('Nombre vacio')
    }
    if(telefono.trim() && email.trim() && nombre.trim()){
      const item = context.cartData.map((curso) => {
      return {id: curso.id,
              tittle: curso.titulo,
              price: curso.price}
    })
   
    const order = {
      buyer:{
        name: nombre,
        phone: telefono,
        email: email
      },
      items:item,
      date: new Date(),
      total: total
    }
    try{
      const data = await db.collection('orders').add(order)
        if(data){console.log("pedido añadido a firesetore")
        alert("Pedido Añadido")
        }
      
    }catch(e){
      console.log(e)
    }
    setNombre('')
    setEmail('')
    setTelefono('')
    
    }setError(' ')
    
  }


  return (<div className="modal-body container ">
    <Form onSubmit={setPedido} className="rounded bg-dark row d-flex justify-content-center ">

    <Form.Group className="col-8 m-2" controlId="formBasicName">
          <Form.Label><h4>Nombre</h4></Form.Label>
          <Form.Control onChange={(e)=>{setNombre(e.target.value)}} type="name" placeholder="Ingrese nombre" value={nombre}/>
    </Form.Group>

    <Form.Group className="col-8 m-2" controlId="formBasicEmail">
      <Form.Label><h4>Direccion de Email</h4></Form.Label>
      <Form.Control onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Ingrese email" value={email}/>
    </Form.Group>
  
    <Form.Group className="col-8 m-2" controlId="formBasicTel">
      <Form.Label><h4>Telefono</h4></Form.Label>
      <Form.Control onChange={(e)=>{setTelefono(e.target.value)}} type="phone" placeholder="Telefono" value={telefono}/>
    </Form.Group>

    <input value="Enviar" className="col-8 btn btn-primary m-2" type="submit"/>
  </Form>
    {error ?
    (<div>{error}</div>)
    :
    (<span></span>)

    }
  </div>);
}

export default Checkout;