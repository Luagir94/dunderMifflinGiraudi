import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import CartWidget from './CartWidget';
import DATA from './Item';




const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
    },
    },
}));

const ItemCount = () => {
    const datos = DATA
    const classes = useStyles();
    const [count, setCount] = useState(0)
    
    

    
return (datos.map((productos) => (
    <div className={classes.root} > 
    <div id='counter'>
        <span className='buttonCount'>
        <Button variant="outlined" color="primary"  onClick={ () => {
            if (productos.stock > 1 &&  count < productos.stock) {setCount(count+1)
                
            }
        else {
            alert('No hay mas Stock de ese Producto')
        }
        }}> + </Button>
        </span>
         <span > {count}</span>
         <span className='buttonCount'>
        <Button variant="outlined" color="primary" className='buttonCount' onClick={ () => {count > 0 && setCount(count - 1)}}> - </Button>
        </span>

        <IconButton color="primary" aria-label="Agregar al Carrito" onClick={
            () => alert('Usted agregó '+ count + ' al carrito.')
        }>
        
        <AddShoppingCartIcon/>
        </IconButton>
        </div>
        
    </div>
    

)
)
)
}


export default ItemCount