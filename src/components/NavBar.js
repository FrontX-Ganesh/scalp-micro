import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <a href="#"><img src="https://dummyimage.com/150x55/808080/fff" /></a>
          </Navbar.Brand>
          <Nav className="justify-content-end flex-grow-1 pe-2 navbar-nav">
            <Nav.Link className="!font-bold !text-lg" href="#">Home</Nav.Link>
            <Nav.Link className="!font-bold !text-lg" href="#">Features</Nav.Link>
            <Nav.Link className="!font-bold !text-lg" href="#">Pricing</Nav.Link>
            <Nav.Link className="!font-bold !text-lg" href="#">Program</Nav.Link>
            <Nav.Link className="!font-bold !text-lg" href="#">Contact US</Nav.Link>
            <Nav.Link className="!font-bold !text-lg" href="#">FAQ</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
