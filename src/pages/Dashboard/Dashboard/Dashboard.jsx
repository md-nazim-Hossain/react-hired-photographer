import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink,Outlet } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div>
           <Row xs={2} sm={2} md={2}>
                <Col xs={2} sm={3} md={3} className='dash-bg'>
                   <Container>
                        <div className='text-uppercase text-start py-5'>
                            <NavLink to='hired' className='navsLink'
                               style={({ isActive }) => {
                                return {
                                  color: isActive ? "#44bd32" : ""
                                };
                              }}
                            ><p>Hired</p></NavLink>
                            <NavLink to='manageHired' className='navsLink'
                                style={({ isActive }) => {
                                    return {
                                    color: isActive ? "#44bd32" : ""
                                    };
                                }}
                            ><p>Manage Hired</p></NavLink>
                            <NavLink to='review' className='navsLink'
                                style={({ isActive }) => {
                                    return {
                                    color: isActive ? "#44bd32" : ""
                                    };
                                }}
                            ><p>Review</p></NavLink>
                        </div>
                        <div className='text-uppercase text-start py-5'>
                            <NavLink to='manageOrder' className='navsLink'
                                style={({ isActive }) => {
                                    return {
                                    color: isActive ? "#44bd32" : ""
                                    };
                                }}
                                ><p>Manage Order</p></NavLink>
                            <NavLink to='managePhotographer' className='navsLink'
                                style={({ isActive }) => {
                                    return {
                                    color: isActive ? "#44bd32" : ""
                                    };
                                }}
                            ><p>Manage PhotoGrapher</p></NavLink>
                            <NavLink to='makeAdmin' className='navsLink'
                                style={({ isActive }) => {
                                    return {
                                    color: isActive ? "#44bd32" : ""
                                    };
                                }}
                            ><p>Make Admin</p></NavLink>
                            <NavLink to='addPhotographer' className='navsLink'
                                style={({ isActive }) => {
                                    return {
                                    color: isActive ? "#44bd32" : ""
                                    };
                                }}
                            ><p>Add Photographer</p></NavLink>
                        </div>
                   </Container>
                </Col>
                <Col xs={10} sm={9} md={9}>
                    <Container className='py-5'>
                        <Outlet/>
                    </Container>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;