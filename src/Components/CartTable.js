import React, {useContext,useState,useEffect} from 'react';
import CartContext from "../Contexts/CartContext"  ; 
import Table from 'react-bootstrap/Table';
import Checkout from '../Pages/Checkout';
import { Link } from 'react-router-dom';
export default function CartTable(){

  const {cartItems,clearCart,setWidgetNumber,removeItem,widgetNumber,setCartItems} = useContext(CartContext)
  const DATA = cartItems
  const [vSumTotal, setVSumTotal] = useState(undefined);
 
  useEffect(() => {
    const handlesumar = () => {
      const sumar = DATA.map((element) => (element.price)).reduce((a, b) => {return a + b;
      }, 0);
      setVSumTotal(sumar);
      console.log(vSumTotal)
    }})


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
                                  setWidgetNumber(widgetNumber-(element.count))}} >X</button></td>
        </tr>
       ))
      }
    <tr>
        <td>Precio Total</td>
        <td>{vSumTotal}</td>
        <td> <Link to="/checkout"><button className="btn btn-primary m-1">Comprar</button></Link>

                <Checkout total={vSumTotal}/>
        </td>
        </tr>
      {
        
      }
  </tbody>
</Table>
 
    )
    }
