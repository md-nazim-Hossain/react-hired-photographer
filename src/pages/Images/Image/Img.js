import React from 'react';
import { Col } from 'react-bootstrap';
import './Img.css'
const Img = (props) => {
    const {img} = props
    return (
        <Col>
            <img src={img} className='gallery' alt=""/>
        </Col>
    );
};

export default Img;