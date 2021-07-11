import React,{useState} from 'react';
import { BorderColor } from '@material-ui/icons';
import ItemCount from './ItemCount';
import { NavLink } from 'react-router-dom';





const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const divStyle ={
  border: 'solid 1px',
  borderColor:'#15384e',
  marginTop:'2rem',
  height: '30rem',
  width: '18rem',
  margin:'2rem',
 
}
const fontStyle={
  color:'#15384e',
  fontSize:'1.1rem'
}


export default function ItemListConteiner({name,img,stock,id,price}) {
  

  return (
    <div className='card' style={divStyle}>
      <div className='cardContent'>
      <div>
        <img src={img} alt={name} className='cardImg'/>
      </div>
      <div className='contenidoCard'>
        <h2 className='cardTitle' style={fontStyle}>{name}</h2>
        
        <h6 style={fontStyle}> ${price}</h6>
        <ItemCount stock={stock} initialValue={1} onAdd={(count) => alert('Usted agregó '+ count + ' al carrito.')}/>
        <NavLink to={`/products/${id}`}>Detalle</NavLink>
      </div>
      
      </div>
    </div>
  )

}

