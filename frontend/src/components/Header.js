import React from 'react';
import { Button, Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';   
import { Nav } from 'react-bootstrap';


function Header() {
  return (
    <Navbar expand="lg" sticky="top" className="bg-dark navbar-dark">
        <Container fluid className='d-flex'> 
          <Navbar.Brand href='#home' className='ms-3'>Portfolio de Andrés</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' as="button"></Navbar.Toggle>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                    <Nav.Link href='/'>Inicio</Nav.Link>
                    <Nav.Link href='/sobre-mi'>Sobre mi</Nav.Link>
                    <Nav.Link href='/proyectos'>Proyectos</Nav.Link>
                    <Nav.Link href='/contacto'>Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        

    </Navbar>
  );
}

export default Header;