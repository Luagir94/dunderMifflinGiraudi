import React, {useState,useEffect} from 'react';
import DATA from './Item';
import Spinner from 'react-bootstrap/Spinner';
import ProductGrid from './ProductGrid';

const datos = DATA

console.log(DATA)
const promiseProductos =() => {
    return new Promise((resolve, reject) => {
        setTimeout(
            (() =>
                resolve( datos.map(productos => productos)

                ),3000
                )
        )
    }
    )
}


export const ItemList = () => {
    const [productos, setProductos]= useState([])

    const ejecutarPromise = () => {
        promiseProductos().then((data) => {
            const filtroProducts = data.filter((product) => product.disponibilidad);
            setProductos=(filtroProducts)}

        )
    }
    useEffect(()=>{
        ejecutarPromise();
    },[])
    return(<>
        {
            productos.lenght === 0 ? (<Spinner animation="border" role="status">
            <span className="sr-only">Cargando...</span>
        </Spinner>

            ) : (<ProductGrid/>)
        }
        </>
    )


}

export default ItemList