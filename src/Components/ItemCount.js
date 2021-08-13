import React, {useState, useEffect,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import CartWidget from './CartWidget';
import CartContext from "../Contexts/CartContext"  ;
import Modal from 'react-bootstrap/Modal'





const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
    },
    },
}));

export function OnAdd() {
    const [productosComprados, setProductosComprados] = useState([])
    setProductosComprados(ItemCount)

    return(<Button variant="outlined" color="primary" className='buttonCount'> Finalizar Compra </Button>

    )
    
}



export default function ItemCount ({stock,initialValue,id,price,quantity,item}) {
    const classes = useStyles();
    const {setQuantityToAdd,addToCart,cartItems,name} = useContext(CartContext)
    const [count, setCount] = useState(1)
    const [showCart, setShowCart] = useState(false);
    const [showStock, setShowStock] = useState(false);

    const handleCloseCart = () => setShowCart(false);
    const handleShowCart = () => setShowCart(true);
    const handleCloseStock = () => setShowStock(false);
    const handleShowStock = () => setShowStock(true);

    const agregarCarrito = () => {
        addToCart(item,id,count,price);
        setQuantityToAdd(count)
        
        
        
    }

return (
    <>
    <div className={classes.root} > 
    <div id='counter'>
        <span className='buttonCount'>
        <Button variant="outlined" color="primary" className='buttonCount' onClick={ () => {count > 1 && setCount(count - 1)}}> - </Button>
        </span>
        <span >{count}</span>
        <span className='buttonCount'>
        <Button variant="outlined" color="primary"  onClick={ () => {
            if (stock > 1 &&  count < stock) {setCount(count+1)
        
            }
        else {
            handleShowStock()
        }
        }}> + </Button>
        
        </span>

        <IconButton color="primary" aria-label="Agregar al Carrito" onClick={()=>{
            agregarCarrito()
            handleShowCart()
        }}>
            
        
        <AddShoppingCartIcon/>
        </IconButton>
        </div>
        
    </div>

    
         <Modal show={showCart} onHide={handleCloseCart}>
        <Modal.Header >
          <Modal.Title>Producto/s agregados al carrito!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Se agregaron {count} {name}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCart}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showStock} onHide={handleCloseStock}>
        <Modal.Header >
          <Modal.Title>Lo Sentimos!</Modal.Title>
        </Modal.Header>
        <Modal.Body>No queda mas stock de {name}</Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseStock}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>

)
}


