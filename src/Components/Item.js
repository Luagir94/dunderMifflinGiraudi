import React, {useState} from 'react';
import { BorderColor } from '@material-ui/icons';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';





const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const divStyle ={
  border: 'solid 1px',
  borderColor:'#15384e',
  height: '40vh',
  width: '75vh',
  padding:'2rem',
  
  margin:'5rem auto 0 auto',

 
}
const fontStyle={
  color:'#15384e',
}

const flex ={
    display:'flex',
    flexDirection:'row',


}

const image={
    height:'30vh'
}

export default function Item({name,img,description,stock,id,price}) {
  const [quantityToAdd, setQuantityToAdd] = useState(false)

  return (
    <div className='card' style={divStyle}>
      <div className='cardContent' style={flex}>
      <div>
        <img src={img} alt={name} className='cardImg' style={image}/>
      </div>
      <div className='contenidoCard'>
        <h2 className='cardTitle' style={fontStyle}>{name}</h2>
        <h5 style={fontStyle}>{description}</h5>
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
        <Button type="primary"  variant="outlined" color="primary" className='buttonCount'><Link to="/products">Volver Atras</Link></Button>      
      </div>
      
      </div>
    </div>
  )
  

  
}

  



