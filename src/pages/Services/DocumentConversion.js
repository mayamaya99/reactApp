import React from 'react';
import {Container, Row, Col, Card, ListGroup} from 'react-bootstrap';
import './style.css';

import documentConversionImage from '../../assets/images/word-conversion.png';

const DocumentConversion = () => {
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col xs={8}>
                        <Card className='mt-2'>
                            <Card.Header className='services-header'>Conversion of Legacy MS Word / PDF to XML</Card.Header>
                            <Card.Body>
                                <Card.Text className='services-text mb-1'>
                                Our firm has developed an open source tool, which automatically converts legacy MS Word, PDF documents to XML.
                                The tool can also generate PDF from generated XML if applicable.
                                </Card.Text>
                                <Card.Text className='services-text mb-1'>
                                The conversion process is shown in Figure 1 :
                                </Card.Text>
                            </Card.Body>
                            <Container className='mb-4'>
                                <Card.Img variant='bottom' src={documentConversionImage} className='img-fluid' />
                            </Container>
                        </Card>
                    </Col>
                    <Col xs={4}>
                        <Card className='mt-2'>
                            <Card.Header className='services-header'>Case Study</Card.Header>
                            <Card.Body>
                                <Card.Text className='services-text'>
                                This project automatically converts DSP documents from ASSIST in Word format to XML and also generates the PDF according 
                                to the original layout.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='mt-2'>
                            <Card.Header className='services-header'>Questions</Card.Header>
                            <Card.Body>
                                <Card.Text className='services-text'>
                                If you have any questions about the conversion process or need to migrate the legacy Word documents to XML or relational 
                                data models, please contact us.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='mt-2'>
                            <Card.Header className='services-header'>Technologies</Card.Header>
                            <ListGroup variant='flush' className='services-list-group'>
                                <ListGroup.Item>ANTLR 4</ListGroup.Item>
                                <ListGroup.Item>StringTemplate 4</ListGroup.Item>
                                <ListGroup.Item>PDFBox</ListGroup.Item>
                                <ListGroup.Item>iText 2.7.1</ListGroup.Item>
                                <ListGroup.Item>Jsoup</ListGroup.Item>
                                <ListGroup.Item>dom4j</ListGroup.Item>
                                <ListGroup.Item>Gradle</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br/>
        </>
    )
}

export default DocumentConversion;