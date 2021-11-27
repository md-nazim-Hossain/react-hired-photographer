import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../../carousel-pic/images.jpg';
import banner2 from '../../../../carousel-pic//images2.jpg';
import banner3 from '../../../../carousel-pic/images3.jpg';

const Slider = () => {
    return (
        <Carousel className='pt-4 mt-3'>
            <Carousel.Item interval={1000}>
                <img style={{height:'400px'}}
                className="d-block w-100 img-fluid "
                src={banner1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>WE ARE PHOTOGRAPHER</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img style={{height:'400px'}}
                className="d-block w-100 img-fluid"
                src={banner2}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>WE ARE PHOTOGRAPHER</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height:"400px"}}
                className="d-block w-100"
                src={banner3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>WE ARE PHOTOGRAPHER</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;