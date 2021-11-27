import React from 'react';
import { Col, Container, Form, Row,Button } from 'react-bootstrap';

const Review = () => {
    return (
        <div>
            <Container>
                <h3>Give Review</h3>
                <Row>
                    <Col>
                        <Form className='w-50 mx-auto'>
                            <Form.Control placeholder='Name' required className='mb-3'/>
                            <Form.Control placeholder='Image Link' required className='mb-3'/>
                            <Form.Control type="number" min="1" max="5" placeholder='Rating' required className='mb-3'/>
                            <Form.Control placeholder='Comment' required className='mb-3'/>
                            <Button variant="success" type='submit'>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Review;