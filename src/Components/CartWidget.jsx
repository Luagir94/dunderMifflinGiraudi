import React from 'react';
import IMAGES from '../Assets/index';
import CustomImg from './CustomImg';


function CartWidget(){
    return(

        <button className='buttonCart'><CustomImg {...IMAGES.img2}/></button>
    )

}


export default CartWidget