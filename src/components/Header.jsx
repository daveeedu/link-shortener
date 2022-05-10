import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
        <Container>
          <Navbar.Brand ><Link className="text-danger text-decoration-none" to="/">LinkMasteer</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link><Link className="text-secondary text-decoration-none" to="./AboutPage">About Us</Link></Nav.Link>
              <Nav.Link><Link className="text-secondary text-decoration-none" to="./ContactPage">Contact Us</Link> </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
