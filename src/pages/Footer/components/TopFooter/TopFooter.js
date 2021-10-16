import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './TopFooter.css';

const TopFooter = () => {
    return (
        <div id="top-footer">
            <div className='overlay py-5'>
                <Container className='py-5'>
                    <Row xs={1} sm={1} md={3}>
                        <Col>
                            <input type='email' placeholder='Enter Email' className='top-input my-3'/>
                        </Col>
                        <Col>
                            <input type='password' placeholder='Enter Password' className='top-input my-3'/>
                        </Col>
                        <Col>
                            <Button variant='outline-danger' className='m-3'>Subscribe</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default TopFooter;