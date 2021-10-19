import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} =useAuth()
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
                    <Nav.Link as={Link}  to="/about" className='text-dark'>About us</Nav.Link>
                    </Nav>

                    <Navbar.Text>
                         <a className='text-decoration-none  fw-bolder' href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                    {
                        user?.email ? 
                        <Button className='mx-2' size="sm" onClick={logOut} variant='warning'>Logout</Button>
                        :
                        <Button as={Link} to='/login' variant='warning'>Login</Button>
                        }
                </Navbar.Collapse>
                </Container>
        </Navbar>
            
        </>
    );
};

export default Header;