import React from 'react';
import { Container, Row } from 'react-bootstrap';
import GalleryImg from '../Home/components/Gallery/GalleryImg/GalleryImg';
import Img from './Image/Img';

const Images = () => {
    const images = GalleryImg();
    return (
        <Container className='py-5' >
            <h2 className='text-center pb-3'>Gallery</h2>
            <Row xs={1} sm={1} md={3} className='g-4'>
                {
                    images.map(img => <Img img={img}/>)
                }
            </Row>
        </Container>
    );
};

export default Images;