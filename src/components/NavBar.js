import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from '../assets/flavorframe-logo.png';
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <Navbar.Brand>
          <img src={logo} height="150" alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-right">
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
            <Nav.Link>
              <i className="fas fa-sign-in-alt"></i>Sing in
            </Nav.Link>
            <Nav.Link>
              <i className="fas fa-user-plus"></i>Sing up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
  
export default NavBar;