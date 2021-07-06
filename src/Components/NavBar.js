import React from 'react';
import IMAGES from '../Assets/index';
import CustomImg from './CustomImg';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import CartWidget from './CartWidget';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function NavBar(){

  const office = "office";
  const resma ="resma";
  const misc = "misc";

    return(
        <Navbar  expand="lg" id='navBar'>
  <Link to="/" ><CustomImg {...IMAGES.img1}/></Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Navbar className="mr-auto" >
    <Link to="/" >Home</Link>
    <ul id='dropDown'>
      <li><Link to="/products" >Productos</Link>
        <ul>
          <li><Link to={`/category/${resma}`} >Resmas</Link></li>
          <li><Link to={`/category/${office}`}>Art Oficina</Link></li>
          <li><Link to={`/category/${misc}`} >Misc</Link></li>
        </ul>
      </li>
    </ul>
    
    <Link to="/about" >Nosotros</Link>
    <Link to="/contact" >Contacto</Link>
    </Navbar>
    <Form inline>
      <FormControl type="text" placeholder="Buscar..." className="mr-sm-2" />
      <Button variant="light">Buscar</Button>
    </Form>
    <Link to="/Cart"><CartWidget/></Link>
  </Navbar.Collapse>
</Navbar>
    )}

export default NavBar;