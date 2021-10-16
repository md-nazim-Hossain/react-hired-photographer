import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../../carousel-pic/logo.jpg'
const MiddleFooter = () => {
    return (
        <div className='py-5 bg-dark text-white text-justify' >
            <Container>
                <Row xs={1} sm={1} md={3}>
                    <Col><h3 className='py-2 text-justify'>
                        <img src={logo} alt="" style={{width:'40px'}}/>
                         PhotoGrapher</h3></Col>
                    <Col>
                        <h3 className='py-2'>Provided US</h3>
                        <div>
                            <Link to='/home' className='text-decoration-none text-white'><
                                p><i className="fas fa-home"></i> Home</p>
                            </Link>
                            <Link to='/service' className='text-decoration-none text-white'>
                                <p><i className="fab fa-servicestack icon"></i> Service</p>
                            </Link>
                            <Link to='/gallery' className='text-decoration-none text-white'>
                                <p><i className="fas fa-box icon"></i> Gallery</p>
                            </Link>
                            <Link to='/home' className='text-decoration-none text-white'>
                                <p><i className="fas fa-location-arrow icon"></i> Contact Us</p>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <h3 className='py-2'>Follow Us</h3>
                        <div>
                            <p><i className="fas fa-address-card"></i> 3rd-floor,NovaTower,Mohakhali,Dhaka-1208</p>
                            <p><i className="fas fa-envelope icon"></i> nazimhossaindpi@gmail.com</p>
                            <p><i className="fas fa-phone-alt"></i> +8801831552110</p>
                            <Link to='/service' className='text-decoration-none text-white'><p>Privacy & Policy</p></Link>
                        </div>
                        <div className='text-justify'>
                            <i className="fab fa-facebook-f icon p-2" style={{color:'#0984e3',cursor:'pointer'}}></i>
                            <i className="fab fa-twitter icon p-2" style={{color:'#0984e3',cursor:'pointer'}}></i>
                            <i className="fab fa-youtube icon p-2 text-danger" style={{cursor:'pointer'}}></i>
                            <i className="fas fa-map-marker-alt icon p-2 text-muted" style={{cursor:'pointer'}}></i>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MiddleFooter;