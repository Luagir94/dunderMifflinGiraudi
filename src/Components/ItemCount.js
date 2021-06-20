import React, {useState} from 'react';
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

const ItemCount = ({stock}) => {
    const classes = useStyles();
    const [count, setCount] = useState(0)
    
    

    
return(
    <div className={classes.root}> 
        <Button variant="outlined" color="primary" onClick={ () => {
            if (stock > 1 &&  count < stock) {setCount(count+1)
                
            }
        else {
            alert('No hay mas Stock de ese Producto')
        }
        }}> + </Button>
            {count}
        <Button variant="outlined" color="primary" onClick={ () => {count > 0 && setCount(count - 1)}}> - </Button>

        <IconButton color="primary" aria-label="Agregar al Carrito" onClick={
            () => alert('Usted agregó '+ count + ' al carrito.')
        }>
        
        <AddShoppingCartIcon/>
        </IconButton>
    
        
    </div>
    

)

}

export default ItemCount