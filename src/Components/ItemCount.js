import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import CartWidget from './CartWidget';





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



export default function ItemCount ({stock,initialValue,onAdd}) {
    const classes = useStyles();
    const [count, setCount] = useState(0)
    
    

    
return (
    <div className={classes.root} > 
    <div id='counter'>
        <span className='buttonCount'>
        <Button variant="outlined" color="primary"  onClick={ () => {
            if (stock > 1 &&  count < stock) {setCount(count+1)
                
            }
        else {
            alert('No hay mas Stock de ese Producto')
        }
        }}> + </Button>
        </span>
        <span >{count}</span>
        <span className='buttonCount'>
        <Button variant="outlined" color="primary" className='buttonCount' onClick={ () => {count > 0 && setCount(count - 1)}}> - </Button>
        </span>

        <IconButton color="primary" aria-label="Agregar al Carrito" onClick={() => onAdd(count)}>
        
        <AddShoppingCartIcon/>
        </IconButton>
        </div>
        
    </div>
    

)
}


