import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';   
import { Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation(); // Hook to get the current location

  let pageName = '';
  switch (location.pathname) {
    case '/':
      pageName = 'Inicio';
      break;
    case '/habilidades':
      pageName = 'Habilidades';
      break;
    case '/proyectos':
      pageName = 'Proyectos';
      break;
    default:
      pageName = '';
  } 
  return (
    <Navbar expand="lg" sticky="top" className="header-navbar">
        <Container fluid className='d-flex'> 
          <Navbar.Toggle aria-controls='basic-navbar-nav' as="button">
            <i className="fa-solid fa-house"></i>
          </Navbar.Toggle>
          <span className='current-page-mobile ms-2'>
            {pageName}
          </span>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mx-auto' activeKey={window.location.pathname}>
                  <Nav.Item>
                    <NavLink className="nav-link" to="">Inicio</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink className="nav-link" to="habilidades">Habilidades</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink className="nav-link" to="proyectos">Proyectos</NavLink>
                  </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Container>
        

    </Navbar>
  );
}

export default Header;