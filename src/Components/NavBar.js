import React from 'react';
;

function NavBar(){

    return(
        <div style={{ width: '100%' , height :'75px'}} className='navBar'>
            <img src='dsa'></img>
            <ul>
                <li><a href=''>Inicio</a></li>
                <li><a href=''>Productos</a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a href=''>Resmas</a></li>
                        <li><a href=''>Articulos de Oficina</a></li>
                        <li><a href=''>Otros</a></li>
                    </ul>
                </li>
                <li><a href=''>Nosotros</a></li>
                <li><a href=''>FAQS</a></li>
                <li><a href=''>Contacto</a></li>
            </ul>
        </div>
    )
}


export default NavBar;