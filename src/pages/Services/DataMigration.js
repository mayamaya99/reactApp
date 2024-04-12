import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './style.css';

import datamigrationImage from '../../assets/images/datamigration.png';

const DataMigration = () => {
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col xs={8}>
                        <Card>
                            <Card.Header className='services-header'>Database Migration and Microservices Generation</Card.Header>
                            <Card.Body>
                                <Card.Text className='services-text'>
                                    Datascience9 is building a product that can help to generate microservices directly from your legacy database. The solution is 100% automated. The
                                    generated micro services can be customized based on client requirements.  The product is in the beta.
                                </Card.Text>
                                <Card.Text className='services-text'>
                                    The generator supports different frameworks, such as RESTEasy, Hibernate JPA, Apache, Open JPA, and JEE.
                                </Card.Text>
                                <Card.Text className='services-text'>
                                    The core functionality of this framework will be released as an open source to GitHub.
                                </Card.Text>
                            </Card.Body>
                            <Container className='mb-4'>
                                <Card.Img variant='bottom' src={datamigrationImage} className='img-fluid' />
                            </Container>
                        </Card>
                    </Col>
                    <Col xs={4}>
                        <Card>
                            <Card.Body>
                                <Card.Header className='services-header'>User Case 1 - Drupal DB schema</Card.Header>
                                <Card.Text className='services-text'>
                                    In this project, we ran our auto-generated tool against the drupal database schema.
                                    The result is a fully functional back-end with a React pages in the UI. The generated application is published in the GitHub.
                                    &nbsp; &nbsp; <a href='https://github.com/gmai2006/drupaltest' >
                                        A generated web application from a Drupal database schema</a>
                                </Card.Text>
                                <Card.Text className='services-text'>
                                    This generated web application can run in any standard servlet container
                                    like Wildfly or Websphere containers.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Header className='services-header'>User Case 2 - Sport DB schema</Card.Header>
                                <Card.Text className='services-text'>
                                    In this project, we ran our auto-generated tool against the Sport database schema.
                                    The result is a fully functional back-end with a React pages in the UI. The generated application is published in the GitHub.
                                    &nbsp; &nbsp; <a href='https://github.com/gmai2006/sportsdbtest' >
                                        A generated web application from the Sport DB schema</a>
                                </Card.Text>
                                <Card.Text className='services-text'>
                                    This generated web application can run in any standard servlet container
                                    like Wildfly or Websphere containers.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Header className='services-header'>User Case 2 - Magento DB schema</Card.Header>
                                <Card.Text className='services-text'>
                                    In this project, we ran our auto-generated tool against the Magento database schema.
                                    The result is a fully functional back-end with a React pages in the UI. The generated application is published in the GitHub.
                                    &nbsp; &nbsp; <a href='https://github.com/gmai2006/magentotest' >
                                        A generated web application from the Magento DB schema</a>
                                </Card.Text>
                                <Card.Text className='services-text'>
                                    This generated web application can run in any standard servlet container
                                    like Wildfly or Websphere containers.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header className='services-header'>Technologies</Card.Header>
                            <ListGroup variant='flush' className='services-list-group'>
                                <ListGroup.Item>ANTLR 4</ListGroup.Item>
                                <ListGroup.Item>StringTemplate</ListGroup.Item>
                                <ListGroup.Item>Apache Open JPA</ListGroup.Item>
                                <ListGroup.Item>XML</ListGroup.Item>
                                <ListGroup.Item>JDBC</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DataMigration;
