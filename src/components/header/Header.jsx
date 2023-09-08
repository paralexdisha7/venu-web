import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'
import {Link, NavLink} from 'react-router-dom'
import Social from '../social/Social';
import { BsCart } from 'react-icons/bs';
const Header = () => {
  return (
    <div>
         <Navbar expand="lg" className="Mynav">
      <Container>
        <Navbar.Brand  className='nav-logo'><h4>Venu.Bamboo</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle-btn'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><NavLink to={"/"} className='Mylink'>Home</NavLink></Nav.Link>
            <Nav.Link><NavLink to={"/products"} className='Mylink'>Products</NavLink></Nav.Link>
            <Nav.Link><NavLink to={"/contact"} className='Mylink'>Contact Us</NavLink></Nav.Link>
            <Nav.Link><NavLink to={"/cart"} className='Mylink cart'><BsCart/></NavLink></Nav.Link>
            <Nav.Link className='s-links'><Social/></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
  )
}

export default Header