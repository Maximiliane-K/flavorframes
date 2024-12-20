import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from '../assets/flavorframe-logo.png';
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} height="150" alt="logo"/>
          </Navbar.Brand>
        </NavLink>
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
            <NavLink 
              exact
              className={styles.NavLink} 
              activeClassName={styles.Active} 
              to="/"
            >
              <i className="fas fa-home"></i>Home
            </NavLink>
            <NavLink 
              className={styles.NavLink} 
              activeClassName={styles.Active} 
              to="/signin"
            >
              <i className="fas fa-sign-in-alt"></i>Sing in
            </NavLink>
            <NavLink 
              className={styles.NavLink} 
              activeClassName={styles.Active} 
              to="/signup"
            >
              <i className="fas fa-user-plus"></i>Sing up
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
  
export default NavBar;