import React, {useContext,useState,useEffect} from 'react';
import CartContext from "../Contexts/CartContext"  ; 
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal';
export default function CartTable(){

<<<<<<< HEAD
  const {cartItems,clearCart,setWidgetNumber,removeItem,widgetNumber,totalPrice,setTotalPrice} = useContext(CartContext)
  const DATA = cartItems
  const [vSumTotal, setVSumTotal] = useState(undefined);
    return(
        <Table striped bordered hover>
=======
  const {cartItems,clearCart,setWidgetNumber,removeItem,widgetNumber,setCartItems} = useContext(CartContext)
  const DATA = cartItems
  const handleCloseCart = () => setShow(false);
  const handleShowCart = () => setShow(true);
    
  
    const [show, setShow] = useState(false);

    const handlesumar = () => {
      return cartItems.reduce((acumulador, item) => {
       return acumulador += item.price * item.count;
     }, 0);}

    return(<div id='tabla'>
        <Table striped bordered hover >
>>>>>>> firebase
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
<<<<<<< HEAD
        <td>{(element.price)*(element.count)}</td>
        <td><button onClick={()=>{removeItem(element.id)
                                  setWidgetNumber(widgetNumber-(element.count))
                                  setTotalPrice(totalPrice -(element.price))}} >X</button></td>
=======
        <td>${(element.price)*(element.count)}</td>
        <td><button className="btn btn-danger m-1" onClick={()=>{removeItem(element.id)
                                  setWidgetNumber(widgetNumber-(element.count))}} >X</button></td>
>>>>>>> firebase
        </tr>
       ))
      }
    <tr>
        <td>Precio Total</td>
<<<<<<< HEAD
        <td>{totalPrice}</td>
=======
        <td></td>
        <td></td>
        <td>${handlesumar()}</td>
        <td> <button className="btn btn-primary m-1"  id='btn' onClick={()=>{
                                  setWidgetNumber(0)
                                  setShow(true)
                                  clearCart()
                                  }}>Comprar</button>
                                  
                                  
                
        </td>
       
>>>>>>> firebase
        </tr>
      {
        
      }
  </tbody>

  <Modal show={show} onHide={handleCloseCart}>
        <Modal.Header >
          <Modal.Title>Compra Exitosa!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Gracias por haber comprado en Dunder Mifflin Inc.! </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCart}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
</Table>
</div>
    )
}
