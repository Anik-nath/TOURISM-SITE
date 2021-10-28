import React from "react";
import { HashLink } from "react-router-hash-link";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={HashLink} to="/home">Travel</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={HashLink} to="/home">
                HOME
              </Nav.Link>
              <Nav.Link as={HashLink} to="/tours">
                TOURS
              </Nav.Link>
              <Nav.Link as={HashLink} to="/about">
                ABOUT
              </Nav.Link>
              <Nav.Link as={HashLink} to="/contact">
                CONTACT
              </Nav.Link>
              <Nav.Link as={HashLink} to="/registration">
                Registration
              </Nav.Link>
              <Nav.Link as={HashLink} to="/login">
                Login
              </Nav.Link>
            </Nav>
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
