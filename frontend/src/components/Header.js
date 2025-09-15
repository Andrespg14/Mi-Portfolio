import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';   
import { Nav } from 'react-bootstrap';
import './Header.css';

function Header() {
  return (
    <Navbar expand="lg" sticky="top" className="header-navbar">
        <Container fluid className='d-flex'> 
          <Navbar.Toggle aria-controls='basic-navbar-nav' as="button">
            <i className="fa-solid fa-house"></i>
          </Navbar.Toggle>
          <span className='current-page-mobile ms-2'>
            {window.location.pathname === '' && 'Inicio'}
            {window.location.pathname === 'habilidades' && 'Habilidades'}
            {window.location.pathname === 'proyectos' && 'Proyectos'}
          </span>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mx-auto' activeKey={window.location.pathname}>
                    <Nav.Link href=''>Inicio</Nav.Link>
                    <Nav.Link href='habilidades'>Habilidades</Nav.Link>
                    <Nav.Link href='proyectos'>Proyectos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        

    </Navbar>
  );
}

export default Header;