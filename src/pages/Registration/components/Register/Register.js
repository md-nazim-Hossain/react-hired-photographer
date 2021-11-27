import React from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import './Register.css'

const Register = () => {
    const [active,setActive] = useState(false);
    const [user,setUser] = useState({});
    const [signInUser,setSignInUser] = useState({});

    const {error,signInGoogle,createUser,signUser,userResetPassword} = useAuth();
    
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';
    const navigate = useNavigate();

    const handleField = e =>{
        const field = e.target.field;
        const value = e.target.value;
        const newUser = {...user};
        newUser[field] = value;
        setUser(newUser);
    };

    const handleSignField = e =>{
        const field = e.target.field;
        const value = e.target.value;
        const newUser = {...user};
        newUser[field] = value;
        setSignInUser(newUser);
    };

   const {name,email,phone,password} = user;

    // firebase function
    const handleRedirect = () =>{
        signInGoogle(navigate,redirect_url)
    };

    const handleRegister = e =>{
        createUser(email,password,name,phone,navigate,redirect_url)
        e.preventDefault();
    }

    const handleSignIn = e =>{
        signUser(signInUser.email,signInUser.password,navigate,redirect_url)
        e.preventDefault();
    }

    const handlePasswordReset = () =>{
        userResetPassword(email)
    }
    // toogle function
    const handleSignUpForm = () =>{
        setActive(true);
    }
    const handleSignInForm = () =>{
        setActive(false);
    };

    return (
        <Container className='py-5'>
            <h2 className='text-center py-3'>Please <span className='text-danger'>{!active ? "Register":"Sign In"}</span></h2>
            <div className='responsive'>
            {!active && <p className='text-muted text-start ps-2 border-left'> red denotes are required</p>}
                {!active ?<Form onSubmit = {handleRegister}>
                    <Form.Group as={Row} className="mb-3" >
                        <Col sm={12}>
                            <Form.Control name="name" onBlur={handleField} type="text" placeholder="Username" required className='border-right'/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Col sm={12}>
                            <Form.Control name="phone" onBlur={handleField} type="number" placeholder="Phone" />
                        </Col>
                    </Form.Group>
                
                    <Form.Group as={Row} className="mb-3" >
                        <Col sm={12}>
                            <Form.Control name="email" onBlur={handleField} type="email" placeholder="Email" required className='border-right'/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={12}>
                            <Form.Control name="password" onBlur={handleField} type="password" placeholder="Password" required className='border-right'/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={12}>
                            <span className='text-danger'>{error}</span>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={12}>
                            <Button variant='success' type="submit" className='w-100'>Register</Button>
                        </Col>
                    </Form.Group>
                </Form>
                :
                <Form onSubmit={handleSignIn}>
                    <Form.Group as={Row} className="mb-3" >
                        <Col sm={12}>
                            <Form.Control name='email' onBlur={handleSignField} type="email" placeholder="Email" required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={12}>
                            <Form.Control name="password" onBlur={handleSignField} type="password" placeholder="Password" required/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={12}>
                            <span className='text-danger'>{error}</span>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={12}>
                            <Button variant='success' type="submit" className='w-100'>Sign In</Button>
                        </Col>
                    </Form.Group>
                </Form>}
                {active && <Button onClick={handlePasswordReset} variant='link' type="submit" className='text-muted'>forgotten password ?</Button>}
                <div>
                    {!active ? <Button  onClick={handleSignUpForm} variant='link' type="submit" className='text-muted'>Already have an account ?</Button>:
                     <Button  onClick={handleSignInForm} variant='link' type="submit" className='text-muted'>Create New User ?</Button>
                    }
                </div>
                {active && <div className='py-3'>
                    <Button onClick={handleRedirect} variant='dark' type="submit" className='text-white'>
                        <i className="fab fa-google pe-2"></i>Google Sign In
                    </Button>
                </div>}
            </div>
        </Container>
    );
};

export default Register;