import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import Social from "../social/Social";
import { BsCart } from "react-icons/bs";
const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="Mynav">
        <Container>
          <Navbar.Brand className="nav-logo">
            <h4>Venu.Bamboo</h4>
          </Navbar.Brand>
          {/* <NavLink to={"/cart"} className="Mylink cart ">
                <BsCart />
              </NavLink> */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="toggle-btn"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to={"/"} className="Mylink">
                Home
              </NavLink>
             
              <NavLink to={"/products"} className="Mylink">
                Products
              </NavLink>
              <NavLink to={"/contact"} className="Mylink">
                Contact Us
              </NavLink>
              
              <div className="s-links">
                {" "}
                <Social />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
