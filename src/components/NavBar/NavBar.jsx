import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Container>
             <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand className='ms-4'>Quadb tech</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto gap-2 ">
                        <NavLink className='text-black text-decoration-none ' to={"/"}
                        style={({ isActive, isPending }) => {
                            return {
                              fontWeight: isActive ? "bold" : "",
                              color: isPending ? "red" : "black",
                            }}} >Home</NavLink>
                        

                    </Nav>

                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </Container>
    );
};

export default NavBar;