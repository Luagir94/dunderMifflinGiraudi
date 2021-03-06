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
  <Link to="/dunderMifflinGiraudi" ><CustomImg {...IMAGES.img1}/></Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link ><Link to="/dunderMifflinGiraudi" >Home</Link></Nav.Link>
      <NavDropdown title="Productos" id="basic-nav-dropdown">
        <NavDropdown.Item><Link to={`/products`} >Todos los productos</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to={`/category/${resma}`} >Resmas</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to={`/category/${office}`}>Art Oficina</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to={`/category/${misc}`} >Misc</Link></NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Link to="/Cart"><CartWidget/></Link>
  </Navbar.Collapse>
</Navbar>
    )}

export default NavBar;