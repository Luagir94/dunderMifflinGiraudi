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

    return(
        <Navbar  expand="lg" id='navBar'>
  <Link to="/" ><CustomImg {...IMAGES.img1}/></Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Navbar className="mr-auto" >
    <Link to="/" className="navLink" activeClassname="activeNavLink">Home</Link>
    <Link to="/products" className="navLink" activeClassName="activeNavLink">Productos</Link>
    <Link to="/about" className="navLink" activeClassname="activeNavLink">Nosotros</Link>
    <Link to="/contact" className="navLink" activeClassName="activeNavLink">Contacto</Link>
    </Navbar>
    <Form inline>
      <FormControl type="text" placeholder="Buscar..." className="mr-sm-2" />
      <Button variant="light">Buscar</Button>
    </Form>
    <CartWidget/>
  </Navbar.Collapse>
</Navbar>
    )}

export default NavBar;