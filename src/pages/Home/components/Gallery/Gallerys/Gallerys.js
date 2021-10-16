import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Gallery from '../Gallery/Gallery';
import GalleryImg from '../GalleryImg/GalleryImg';

const Gallerys = () => {
    const images = GalleryImg();
    return (
        <Container className='py-5' id="gallery">
            <h2 className='text-center py-5'>Our <span className='text-danger'>Gallery</span></h2>
            <Row xs={1} sm={2} md={3} className='g-4 pb-5'>
                {
                    images.slice(0,6).map(img => <Gallery img={img}/>)
                }
            </Row>
        </Container>
    );
};

export default Gallerys;