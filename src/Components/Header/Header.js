import React from "react";
import { HashLink } from "react-router-hash-link";
import { Container, Nav, Navbar } from "react-bootstrap";
import useFirebase from "../../Hooks/useFirebase";

const Header = () => {
  const {user,logout} =useFirebase();

  return (
    <div>
      <Navbar fixed="top" className="py-2 pt-3 shadow" collapseOnSelect expand="lg" bg="white" variant="light">
        <Container>
          <Navbar.Brand className="brand" as={HashLink} to="/">Travel</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={HashLink} to="/home">
                HOME.
              </Nav.Link>
              <Nav.Link as={HashLink} to="/tours">
                TOURS.
              </Nav.Link>
              <Nav.Link as={HashLink} to="/destination">
                DESTINATION.
              </Nav.Link>
              <Nav.Link as={HashLink} to="/about">
                ABOUT.
              </Nav.Link>
              <Nav.Link as={HashLink} to="/contact">
                CONTACT.
              </Nav.Link>
              <Nav.Link as={HashLink} to="/manage">
                MANAGE
              </Nav.Link>
            </Nav>
            <Navbar.Text className="d-flex align-items-center"> 
              {user.email ? <div>
                Sign in as: <a href="#login"> {user.displayName}</a>
                 <img style={{width:"30px"}} className="rounded-circle border mx-2" src={user.photoURL} alt="" />
              </div>
              :
              ''
              }
             {
                user.email ? <button className="ourButton px-2 py-1" onClick={logout}>Logout</button> :
                <Nav.Link className="ourButton py-1" as={HashLink} to="/login">Login</Nav.Link>
              }
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
