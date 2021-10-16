import React from 'react';
import { Container, Row,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import HomeService from '../../Home/components/HomeService/HomeService';

const Services = () => {
    const {useService} = useFetch()
    const [services] = useService();
 
    return (
        <Container className='py-5'>
            <h2 className='text-center py-5'>Our <span className='text-danger'>Services</span></h2>
            <Row xs={1} sm={2} md={3} className='g-4 pb-5'>
                {
                    services.map(service => <HomeService
                        key = {service.id}
                        service = {service}
                    >
                        <p className='text-justify'>{service.description}</p>
                        <NavLink to='/home'>
                            <Button variant='link' className='text-decoration-none text-muted'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                </svg>Back to home
                            </Button>
                        </NavLink>
                    </HomeService>)
                }
            </Row>
        </Container>
    );
};

export default Services;