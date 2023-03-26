import React from "react";
import icon from "../../Images/icon.jpg";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navigation = () => {
  return (
    <Navbar className="mainNav">
      <Container style={{ display: "flex",marginTop:"20px" }}>
        <Navbar.Brand href="#" style={{ margin: "auto" }}>
          <img
            alt="logo"
            src={icon}
            height="50px"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav" style={{ margin: "auto" }}>
          <Nav className="ms-auto">
            {/* <Nav.Link className="btn btn-dark" style={{marginRight:"20px"}}href="#">
              Link 1
            </Nav.Link> */}
            <Nav>
              <Link className="sign-in-button" style={{marginTop:"8px",fontSize:"18px"}}>Sign In</Link>
              <button className="dukaan-btn">Dukaan for PC</button>
            </Nav>
            {/* <Nav.Link className="btn btn-dark" href="#">
              Link 2
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;