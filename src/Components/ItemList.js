import React, {useState,useEffect} from 'react';
import DATA from './Item';
import Spinner from 'react-bootstrap/Spinner';
import ProductGrid from './ProductGrid';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const datos = DATA



    
    

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));
    



const ItemList = () => {
    const [productos, setProductos]= useState([])
    const useStyles = makeStyles((theme) => ({
        backdrop: {
          zIndex: theme.zIndex.drawer + 1,
          color: '#fff',
        },
      }));  
      
  const classes = useStyles();

  
    useEffect(()=>{
        console.log('se ejecuto')
        new Promise((resolve) => {
            setTimeout(
                () =>
                    resolve(DATA),3000
                    
            )
        }).then(
            function(DATA) {
            console.log('oo',DATA)
            const filtroProducts = DATA.filter((product) => product.disponibilidad === true);
            setProductos(filtroProducts)
            console.log('oo',productos)
            
        }

        )
        
    },[])
    return(<>
    {console.log('works', productos)}
        {
            productos.length==0 ? (<Backdrop className={classes.backdrop} open >
                <CircularProgress color="inherit" />
            </Backdrop>) : (<ProductGrid/>)
        }
        </>
    )


}

export default ItemList