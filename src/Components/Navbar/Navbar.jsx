import React from "react";
import icon from "../../Images/icon.jpg";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navigation = () => {
  return (
    <Navbar className="mainNav">
      <Container className="navbar-container-1">
        <Navbar.Brand href="#" className="img-brand-nav">
          <img
            alt="logo"
            src={icon}
            height="50px"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav" className="collapse-div">
          <Nav className="ms-auto">
            <Nav>
              <Link className="sign-in-button">Sign In</Link>
              <button className="dukaan-btn">Dukaan for PC</button>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
