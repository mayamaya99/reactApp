import React from 'react';
import {Container, Row, Col, Card, ListGroup} from 'react-bootstrap';
import './style.css';

const WebDevelopment = () => {
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col xs={8}>
                        <Card>
                            <Card.Header className='services-header'>Web Development</Card.Header>
                            <Card.Body>
                                <Card.Text className='services-text'>
                                Software designed for the web is ideally suited for custom business applications that streamline processes, enable a 
                                competitive advantage, or connect with consumers and business partners in unique ways. We build new applications and 
                                also enhance and add funtionality to your legacy applications.
                                </Card.Text>
                                <Card.Text className='services-text'>
                                Our firm builds reliable, secure, and richly featured web applications. Using modern web technologies, we can build 
                                robust applications with rich user interfaces and complex business functionality, that are always available, online.
                                </Card.Text>
                                <Card.Text className='services-text'>
                                A web application also improves for enterprise readiness and affordability. The languages, frameworks, and architecture 
                                lend themselves to rapid application development. And relative to other software architectures, web apps offer easier 
                                deployment and maintenance.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4}>
                        <Card>
                            <Card.Header className='services-header'>Technologies</Card.Header>
                            <ListGroup variant='flush' className='services-list-group'>
                                <ListGroup.Item>AngularJS</ListGroup.Item>
                                <ListGroup.Item>React</ListGroup.Item>
                                <ListGroup.Item>Google Guice</ListGroup.Item>
                                <ListGroup.Item>Hibernate JPA</ListGroup.Item>
                                <ListGroup.Item>Spring Security</ListGroup.Item>
                                <ListGroup.Item>MySQL</ListGroup.Item>
                                <ListGroup.Item>Oracle</ListGroup.Item>
                                <ListGroup.Item>Linux</ListGroup.Item>
                                <ListGroup.Item>Apache</ListGroup.Item>
                                <ListGroup.Item>Gradle / Maven</ListGroup.Item>
                                <ListGroup.Item>Ant</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default WebDevelopment;
