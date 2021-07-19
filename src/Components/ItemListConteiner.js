import React,{useState} from 'react';
import { BorderColor } from '@material-ui/icons';
import ItemCount from './ItemCount';
import {Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';





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

const buttonStyle={
  margin:'0 auto 0 1.5rem'
}


export default function ItemListConteiner({name,img,stock,id,price}) {
  const [quantityToAdd, setQuantityToAdd] = useState(false)

  return (
    <div className='card' style={divStyle}>
      <div className='cardContent'>
      <div>
        <img src={img} alt={name} className='cardImg'/>
      </div>
      <div className='contenidoCard'>
        <h2 className='cardTitle' style={fontStyle}>{name}</h2>
        
        <h6 style={fontStyle}> ${price}</h6>
        {quantityToAdd === true ? (
                <Link to="/cart">
                  <Button type="primary"  variant="outlined" color="primary" className='buttonCount'>Ir al Carrito</Button>
                </Link>
              ) : (
                <ItemCount
                  stock={stock}
                  initial={1}
                  onAdd={(count) => {
                    setQuantityToAdd(true);
                    alert(`Se agregaron ${count} items`);
                  }}
                />
              )}
        
        <Button type="primary"  variant="outlined" color="primary" className='buttonCount' style={buttonStyle}><Link to="/products"><Link to={`/products/${id}`}>Detalle</Link></Link></Button>
      </div>
      
      </div>
    </div>
  )

}

