import React from "react";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import logo from '../assets/flavorframe-logo.png';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md" fixed="top">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" height="80"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-right">
            <Nav.Link href="#home">
              <i className="fas fa-home"></i>Home
            </Nav.Link>
            <Nav.Link href="#link">
              <i className="fas fa-sign-in-alt"></i>Sing in
            </Nav.Link>
            <Nav.Link href="#link">
              <i className="fas fa-user-plus"></i>Sing up
            </Nav.Link>
            <NavDropdown title="Discover" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <i className="fas fa-bookmark"></i>Bookmarks
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <i className="fas fa-plus-circle"></i>Add Post
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <i className="fas fa-user"></i>Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <i className="fas fa-newspaper"></i>Feed
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
  
  export default NavBar;