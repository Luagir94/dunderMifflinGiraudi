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

function NavBar(){

    return(
        <Navbar  expand="lg" id='navBar'>
  <CustomImg {...IMAGES.img1}/>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Navbar className="mr-auto" >
      <Nav.Link href="#home" className="linkNav">Home</Nav.Link>
      <NavDropdown  title="Productos" id="basic-nav-dropdown" id="navDrop" style={{
          color: 'white'
      }}>
        <NavDropdown.Item href="#action/3.1">Resmas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Articulos de Oficina</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Varios</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#link" className="linkNav">Nosotros</Nav.Link>
      <Nav.Link href="#link" className="linkNav">Contacto</Nav.Link>
     
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