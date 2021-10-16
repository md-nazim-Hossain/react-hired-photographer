import React from 'react';
import { Container, Row,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFetch from '../../../../hooks/useFetch';
import HomeService from '../HomeService/HomeService';

const HomeServices = () => {
    const {useService} =useFetch();
    const [services] = useService();
 
    return (
        <Container>
            <h2 className='text-center py-5 my-5'>Our <span className='text-danger'>Services</span></h2>
            <Row xs={1} sm={2} md={3} className='g-4'>
                {
                    services?.slice(0,3)?.map(service => <HomeService 
                        key = {service.id}
                        service = {service}
                    >
                        <p>{service.description.slice(0,117)}</p>
                        <NavLink to='/service'>
                        <Button variant='link' className='text-decoration-none text-muted'>Go to Details
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </Button>
                        </NavLink>
                    </HomeService>)
                }
            </Row>
        </Container>
    );
};

export default HomeServices;