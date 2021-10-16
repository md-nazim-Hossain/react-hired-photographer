import React from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import './Register.css'

const Register = () => {
    const [active,setActive] = useState(false);
    const {error,signInGoogle,handleName,handlePhone,handleEmail,handlePassword,handleRegister,
        handleSignIn,handlePasswordReset} = useAuth();
    
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';
    const history = useHistory();

    const handleRedirect = () =>{
        signInGoogle()
        .then(result =>{
            history.push(redirect_url);
        });
    }
    const handleSignUpForm = () =>{
        setActive(true);
    }
    const handleSignInForm = () =>{
        setActive(false);
    }
    return (
        <Container className='py-5'>
            <h2 className='text-center py-3'>Please <span className='text-danger'>{!active ? "Register":"Sign In"}</span></h2>
            <div className='responsive'>
            {!active && <p className='text-muted text-start ps-2 border-left'> red denotes are required</p>}
                {!active ?<Form onSubmit = {handleRegister}>
                    <Form.Group as={Row} className="mb-3" >
                        <Col sm={12}>
                            <Form.Control onBlur={handleName} type="text" placeholder="Username" required className='border-right'/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Col sm={12}>
                            <Form.Control onBlur={handlePhone} type="number" placeholder="Phone" />
                        </Col>
                    </Form.Group>
                
                    <Form.Group as={Row} className="mb-3" >
                        <Col sm={12}>
                            <Form.Control onBlur={handleEmail} type="email" placeholder="Email" required className='border-right'/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={12}>
                            <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required className='border-right'/>
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
                            <Form.Control onBlur={handleEmail} type="email" placeholder="Email" required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={12}>
                            <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required/>
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