import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './style.css';

const Enterprise = () => {
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col xs={8}>
                        <Card>
                            <Card.Header className='services-header'>Enterprise Software Solution</Card.Header>
                            <Card.Body>
                                <Card.Text className='services-text'>
                                    If an off-the-shelf product does not suite your business requirements, our firm can work with your company to design
                                    and build a customized application that satisfies your requirements at an affordable cost.
                                </Card.Text>
                                <Card.Text className='services-text'>
                                    Building on top of well-known open-source frameworks we can rapidly develop an application based on your requirements.
                                </Card.Text>
                                <Card.Text className='services-text'>
                                    Using agile methodology our staff engage continually with client constantly during the development cycle to ensure we
                                    meet all customer requirements.
                                </Card.Text>
                                <Card.Text className='services-text'>
                                    With our expertise in database modeling, network setup, server configurations, security mechanisms, and open source
                                    frameworks our firm can provide a full service from conceptual design to development, and set up an infrastructure or
                                    connect to cloud services such as Amazon EC2 or Google Cloud.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4}>
                        <Card>
                            <Card.Header className='services-header'>Technologies</Card.Header>
                            <ListGroup variant='flush' className='services-list-group'>
                                <ListGroup.Item>Google Guice</ListGroup.Item>
                                <ListGroup.Item>JEE7</ListGroup.Item>
                                <ListGroup.Item>Hibernate JPA</ListGroup.Item>
                                <ListGroup.Item>MySQL</ListGroup.Item>
                                <ListGroup.Item>Oracle</ListGroup.Item>
                                <ListGroup.Item>Linux</ListGroup.Item>
                                <ListGroup.Item>Apache</ListGroup.Item>
                                <ListGroup.Item>Gradle / Maven</ListGroup.Item>
                                <ListGroup.Item>Ant</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>DNS</ListGroup.Item>
                                <ListGroup.Item>Firewall</ListGroup.Item>
                                <ListGroup.Item>LDAP</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br/>
        </>
    )
}

export default Enterprise;