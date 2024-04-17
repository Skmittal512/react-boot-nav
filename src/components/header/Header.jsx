import React, { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {

  const [showBlogs, setShowBlogs] = useState(false);
  const timeoutRef = useRef(null);

  const handleBlogsMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowBlogs(true);
  };

  const handleBlogsMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowBlogs(false);
    }, 300);
  };

  const handleBlogsClick = () => {
    setShowBlogs(!showBlogs);
  };

  return (
    <Navbar expand="lg" className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#" className="me-auto">
          Logo
        </Navbar.Brand>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Logo</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <Nav.Link to="/" className="mx-lg-2" as={NavLink}>
                Home
              </Nav.Link>
              <Nav.Link to="/about" className="mx-lg-2" as={NavLink}>
                About
              </Nav.Link>
              <Nav.Link to="/contact" className="mx-lg-2" as={NavLink}>
                Contact
              </Nav.Link>
              <Nav.Link to="/portfolio" className="mx-lg-2" as={NavLink}>
                Portfolio
              </Nav.Link>
              <NavDropdown
                title="Blogs"
                show={showBlogs}
                onMouseEnter={handleBlogsMouseEnter}
                onMouseLeave={handleBlogsMouseLeave}
                onClick={handleBlogsClick}
              >
                <NavDropdown.Item to="/blogs" as={NavLink}>
                  Blog 1
                </NavDropdown.Item>
                <NavDropdown.Item to="/blogs" as={NavLink}>
                  Blog 2
                </NavDropdown.Item>
                <NavDropdown.Item to="/blogs" as={NavLink}>
                  Blog 3
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <a href="" className="login-button">
          Login
        </a>
        <Navbar.Toggle aria-controls="offcanvasNavbar" className="pe-0" />
      </Container>
    </Navbar>
  );
};

export default Header;
