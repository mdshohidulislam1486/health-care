import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
                <Container>
                <Navbar.Brand as={Link} to="/home" className='text-dark fw-bolder fs-4'>Disha Medical Care</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to="/home" className='text-dark'>Home</Nav.Link>
                    <Nav.Link as={Link}  to="/specialist" className='text-dark'>Specialist</Nav.Link>
                    <Nav.Link as={Link}  to="/contact" className='text-dark'>Contact us</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link to="#deets"><Button variant='warning' className='rounded-pill custom-button ' >Appointment</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
        </Navbar>
            
        </>
    );
};

export default Header;