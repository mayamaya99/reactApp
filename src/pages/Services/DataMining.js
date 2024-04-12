import React from 'react';
import {Container, Row, Col, Card, ListGroup} from 'react-bootstrap';
import './style.css';

const DataMining = () => {
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col xs={8}>
                        <Card>
                            <Card.Header className='services-header'>Data Mining and Machine Learning</Card.Header>
                            <Card.Body>
                                <Card.Text className='services-text'>
                                As a massive amount of data is collected every second, mining it for useful information is key for businesses to engage 
                                closely with customers. Our firm provides a full service of data munging, wrangling, and data discovery, including building 
                                predictive models or clusters of interesting information using open-source data mining and machine learning algorithms.
                                </Card.Text>
                                <Card.Text className='services-text'>
                                To ensure our models do not suffer overfitting issues we employ an ensemble method that uses multiple learning algorithms 
                                to cross-check results, preventing overfitting and avoiding high bias. We also use A cross-validation technique.
                                </Card.Text>
                                <Card.Text className='services-text'>
                                Our firm is actively and continually learning new approaches in machine learning and applying those improved techniques in 
                                new projects.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4}>
                        <Card>
                            <Card.Header className='services-header'>Technologies</Card.Header>
                            <ListGroup variant='flush' className='services-list-group'>
                                <ListGroup.Item>MongoDB</ListGroup.Item>
                                <ListGroup.Item>Cassandra</ListGroup.Item>
                                <ListGroup.Item>Numpy Python</ListGroup.Item>
                                <ListGroup.Item>Scipy Python</ListGroup.Item>
                                <ListGroup.Item>Anaconda Scientific Python Distribution</ListGroup.Item>
                                <ListGroup.Item>Linux</ListGroup.Item>
                                <ListGroup.Item>R Language</ListGroup.Item>
                                <ListGroup.Item>Gradle / Maven</ListGroup.Item>
                                <ListGroup.Item>Hadoop</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>Apache Spark</ListGroup.Item>
                                <ListGroup.Item>Map Reduce</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DataMining;