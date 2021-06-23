import React, {useState,useEffect} from 'react';
import DATA from './Item';
import Spinner from 'react-bootstrap/Spinner';
import ProductGrid from './ProductGrid';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const datos = DATA

console.log(DATA)
const promiseProductos =() => {
    return Promise.reject('Error al cargar la página')
    return new Promise((resolve, reject) => {
        setTimeout(
            (() =>
                resolve(DATA

                ),3000
                )
        )
    }
    )
}
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

    const ejecutarPromise = () => {
        promiseProductos().then((data) => {
            const filtroProducts = data.filter((product) => product.disponibilidad === true);
            setProductos=(filtroProducts)}

        )
    }
    useEffect(()=>{
        ejecutarPromise();
    },[])
    return(<>
        {
            productos.length === 0 ? (<Backdrop className={classes.backdrop} open >
                <CircularProgress color="inherit" />
              </Backdrop>) : (<ProductGrid/>)
        }
        </>
    )


}

export default ItemList