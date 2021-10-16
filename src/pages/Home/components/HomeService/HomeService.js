import React from 'react';
import { Button, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './HomeService.css';

const HomeService = (props) => {
    const {name,img,price,rating} = props.service;

    return (
        <Col id="service">
            <div className='d-flex justify-content-center align-items-center p-3'>
                <div>
                    <img id="service-img" src ={img} className='img-fluid' alt=''/>
                    <h3 className='py-4'>{name}</h3>
                    <p className='text-muted '>{props.children[0]}</p>
                    <div className='d-md-flex justify-content-between px-3'>
                        <p>Price:{price}$</p>
                        <Rating className='text-warning'
                            readonly
                            initialRating={rating}
                            fullSymbol={<i className="fas fa-star"></i>}
                            emptySymbol={<i className="far fa-star"></i>}   
                        >

                        </Rating>
                    </div>
                    <div className='py-3'>
                        <Button variant='success'>Hired Me</Button>
                    </div>
                    {props.children[1]}
                </div>
            </div>
        </Col>
    );
};

export default HomeService;