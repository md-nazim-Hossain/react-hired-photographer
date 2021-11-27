import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Navs = () => {
    const {user,signOutClick} = useAuth();
    const history = useHistory();

    const register = () =>{
        history.push('/register');
    };

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
                    <Nav.Link className='text-white text-start'>
                        <div>{user.displayName}</div>
                        {user.email}
                    </Nav.Link>
                    {user.photoURL ? <Nav.Link as={NavLink} to='/home'>
                        <img src={user.photoURL} alt="" style={sizeImg} className='mt-1'/>
                    </Nav.Link>:
                    <Nav.Link as={NavLink} to='/register'>
                        <i  className="fas fa-user-circle fs-3 mt-1"></i>
                    </Nav.Link>
                    }
                    <Nav.Link>
                        <Button variant='secondary' onClick={user.email ? signOutClick : register}>{user.email ? "Sign Out" : " Sign In"}</Button>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navs;