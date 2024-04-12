import React, { useEffect } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <div className='footer'>
                <Container id="content-wrap">
                    <Row>
                        <Col xs={4}>
                            <Nav className="nav-text flex-column mr-5">
                                <Nav.Link as={NavLink} to='/services/datamining'><FontAwesomeIcon icon={faAngleRight} /> {''} Data Mining</Nav.Link>
                                <Nav.Link as={NavLink} to='/services/datamigration'><FontAwesomeIcon icon={faAngleRight} /> {''} Data Migration</Nav.Link>
                                <Nav.Link as={NavLink} to='/services/datatransformation'><FontAwesomeIcon icon={faAngleRight} /> {''} Data Transformation</Nav.Link>
                                <Nav.Link as={NavLink} to='/products/microservices'><FontAwesomeIcon icon={faAngleRight} /> {''} Automated Generation of Microservices</Nav.Link>
                            </Nav>
                        </Col>
                        <Col xs={4}>
                            <Nav className="nav-text flex-column ml-5">
                                <Nav.Link as={NavLink} to='/services/documentconversion'><FontAwesomeIcon icon={faAngleRight} /> {''} Document Conversion</Nav.Link>
                                <Nav.Link as={NavLink} to='/services/webdevelopment'><FontAwesomeIcon icon={faAngleRight} /> {''} Web Development</Nav.Link>
                                <Nav.Link as={NavLink} to='/services/datamining'><FontAwesomeIcon icon={faAngleRight} /> {''} Machine Learning</Nav.Link>
                                <Nav.Link as={NavLink} to='/services/datamining'><FontAwesomeIcon icon={faAngleRight} /> {''} Data Science</Nav.Link>
                            </Nav>
                        </Col>
                        <Col xs={4}>
                            <Nav className="nav-text flex-column ml-5">
                                <Nav.Link as={NavLink} to='/about'><FontAwesomeIcon icon={faAngleRight} /> {''} About</Nav.Link>
                                <Nav.Link as={NavLink} to='/contact'><FontAwesomeIcon icon={faAngleRight} /> {''} Contact</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='sticky-footer'>
                <Container>
                    <Row>

                        <div className='copyright ml-auto'>
                            <span>© Copyright 2024 DataScience9 All Rights Reserved</span>
                        </div>
                    </Row>

                </Container>
            </div>
        </>
    )
}

export default Footer;