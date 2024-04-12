import React from 'react';
import {Container, Row, Col, Card, ListGroup} from 'react-bootstrap';
import './style.css';

const DataTransformation = () => {
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col xs={8}>
                        <Card>
                            <Card.Header className='services-header'>Data Transformation</Card.Header>
                            <Card.Body>
                                <Card.Text className='services-text'>
                                Advances in hardware and data storage have enabled, more and more data are to be collected constantly. For useful data
                                analysis, data needs be transformed to a standard format. With more than 15 years' experience in data transformation, our
                                firm can assist clients to transform data from one or many sources to a target medium for analysis.
                                </Card.Text>
                                <Card.Text className='services-text'>
                                With programming and hacking skills, our technical staff can transform complex unstructured data into semi-structured or 
                                structured data automatically.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4}>
                        <Card>
                            <Card.Header className='services-header'>Technologies</Card.Header>
                            <ListGroup variant='flush' className='services-list-group'>
                                <ListGroup.Item>Cassandra</ListGroup.Item>
                                <ListGroup.Item>MSSQL</ListGroup.Item>
                                <ListGroup.Item>Oracle</ListGroup.Item>
                                <ListGroup.Item>DB2</ListGroup.Item>
                                <ListGroup.Item>MySQL</ListGroup.Item>
                                <ListGroup.Item>MongoDB</ListGroup.Item>
                                <ListGroup.Item>Apache</ListGroup.Item>
                                <ListGroup.Item>Gradle / Maven</ListGroup.Item>
                                <ListGroup.Item>Ant</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>Linux Scripts</ListGroup.Item>
                                <ListGroup.Item>Programming Hacking</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DataTransformation;