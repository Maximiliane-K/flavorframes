import React, { useState } from "react";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import logo from "../assets/flavorframes-logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink, Link } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  
  const [expanded, setExpanded] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      setExpanded(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDropdownToggle = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const closeNavbar = () => setExpanded(false);

  const addIcons = (
    <>
      <div>
        <NavLink
          className={styles.NavLink}
          activeClassName={styles.Active}
          to="/posts/create"
          onClick={closeNavbar}
        >
          <i className="far fa-plus-square"></i> Add post
        </NavLink>
        <NavLink
          className={styles.NavLink}
          activeClassName={styles.Active}
          to="/events/create"
          onClick={closeNavbar}
        >
          <i className="fa-regular fa-calendar-plus"></i> Add event
        </NavLink>
      </div>
    </>
  );

  const loggedInIcons = (
    <>
      <Dropdown
        onToggle={() => handleDropdownToggle("feed")}
        show={dropdownOpen === "feed"}
      >
        <Dropdown.Toggle className={`${styles.NavLink} ${styles.NoButton}`} as="div">
          <i className="fas fa-list-ul"></i> Feed
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item 
            as={Link} 
            to="/feed" 
            className={styles.DropdownItem}
            onClick={closeNavbar}
          >
            Posts
          </Dropdown.Item>
          <Dropdown.Item 
            as={Link} 
            to="/my-events" 
            className={styles.DropdownItem}
            onClick={closeNavbar}
          >
            Events I'm attending
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/liked"
        onClick={closeNavbar}
      >
        <i className="fas fa-heart"></i> Liked
      </NavLink>

      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i> Sign out
      </NavLink>

      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
        onClick={closeNavbar}
      >
        <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
      </NavLink>
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
        onClick={closeNavbar}
      >
        <i className="fas fa-sign-in-alt"></i> Sign in
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signup"
        onClick={closeNavbar}
      >
        <i className="fas fa-user-plus"></i> Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar expanded={expanded} className={styles.NavBar} expand="lg" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height={50} />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addIcons}
        <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-right">
            <Dropdown
              onToggle={() => handleDropdownToggle("discover")}
              show={dropdownOpen === "discover"}
            >
              <Dropdown.Toggle className={`${styles.NavLink} ${styles.NoButton}`} as="div">
                <i className="fas fa-compass"></i> Discover
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item 
                  as={Link} 
                  to="/" 
                  className={styles.DropdownItem}
                  onClick={closeNavbar}
                >
                  Posts
                </Dropdown.Item>
                <Dropdown.Item 
                  as={Link} 
                  to="/events"
                  className={styles.DropdownItem}
                  onClick={closeNavbar}
                >
                  Events
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
