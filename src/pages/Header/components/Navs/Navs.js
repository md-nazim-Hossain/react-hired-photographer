import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Navs = () => {
    const {user,signOutClick} = useAuth();

    const activeStyle = {
        color:"red"
    }

    const sizeImg = {
        width:'30px',
        height:'30px',
        borderRadius:'50%'
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
            <Container>
            <Navbar.Brand as={NavLink} to='/home'>PhotoGrapher</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} activeStyle={activeStyle} to="/home">Home</Nav.Link>
                    <Nav.Link as={NavLink} activeStyle={activeStyle} to="/service">Service</Nav.Link>
                    <Nav.Link as={NavLink} activeStyle={activeStyle} to="/gallery">Gallery</Nav.Link>
                    <Nav.Link as={NavLink} activeStyle={activeStyle} to="/register">Register</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} activeStyle={activeStyle} to="/home" className='text-white'>{user.displayName}</Nav.Link>
                    {user.photoURL ? <Nav.Link as={NavLink} to='/home' eventKey={2}>
                        <div onClick={signOutClick} title="Click for log out">
                            <img src={user.photoURL} alt="" style={sizeImg}/>
                        </div>
                    </Nav.Link>:
                    <Nav.Link as={NavLink} to='/register'>
                        <i  className="fas fa-user-circle fs-3"></i>
                    </Nav.Link>
                    }

                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navs;