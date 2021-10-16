import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Gallery.css';

const Gallery = (props) => {
    const {img} = props;
    return (
        <Col>
           <Link to='/gallery'>
                <Card className="bg-dark text-white h-100 gallery-img">
                    <Card.Img src={img} alt="Card image" className='h-100'/>
                    <Card.ImgOverlay className='bg'>
                        <Card.Title>Card Caps</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Clicked go to gallery</Card.Text>
                    </Card.ImgOverlay>
                </Card>
           </Link>
        </Col>
    );
};

export default Gallery;