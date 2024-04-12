
import React from "react";
import { Container, Card, Image, Row, Col } from "react-bootstrap";
import "./style.css";
import locationImage from "../../assets/images/location.png";

const Contact = () => {
    return (
        <>
            <Container className="mt-5" id="p">
                <Row>
                    <Col xs={7}>
                        <Container className="ad">
                            <h1>Address</h1>
                            <Card id="card">

                                <Card.Body>
                                    <Card.Title >
                                        22722 29th Drive SE,
                                        Suite 100 Bothell,
                                        Washington, 98021
                                    </Card.Title>
                                    <Card.Link href="mailto:paul.mai@datascience9.com">
                                        paul.mai@datascience9.com
                                    </Card.Link>
                                    <Card.Link href="tel:425-770-6899">(425)-770-6899</Card.Link>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                    <Col xs={6} id="i" >
                        <Image src={locationImage} className="img-fluid mb-5" />
                    </Col>
                </Row>
            </Container>


        </>
    );
};

export default Contact;