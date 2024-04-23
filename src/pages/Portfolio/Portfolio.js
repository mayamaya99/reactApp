import React from "react";
import { Container, Card } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import "./style.css";

import tomcatImage from "../../assets/images/portfolio/tomcat.png";
import eCommerceImage from "../../assets/images/portfolio/exam.png";
import dispatcherImage from "../../assets/images/portfolio/rest-webapplication.png";
import qualitySmith from "../../assets/images/portfolio/qualitysmith.jpg";
import censeoImage from "../../assets/images/portfolio/censeo.png";

const Portfolio = () => {
    return (
        <>
            <section className="portfolio">
                <Container >
                    <h3 className="portfolio-header mt-4 mb-3">Web Development</h3>
                    <CardGroup >
                        <Card className="portfolio-card">
                            <Card.Img variant="top" src={tomcatImage} />
                            <Card.Body>
                                <Card.Link href="#">Tomcat Hosting Service</Card.Link>
                                <Card.Text>
                                    This site provides online services for hosting Java applications
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className="portfolio-card">
                            <Card.Img src={eCommerceImage} />
                            <Card.Body>
                                <Card.Link href="#">E-Commerce</Card.Link>
                                <Card.Text>
                                    Ecommerce website for selling certification study guides
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="portfolio-card">
                            <Card.Img src={dispatcherImage} />
                            <Card.Body>
                                <Card.Link href="#">Dispatcher Management System</Card.Link>
                                <Card.Text>
                                    A responsive web application that was developed to manage a
                                    fleet of snow trucks
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
                <br></br>
                <Container >
                    <CardGroup>
                        <Card className="portfolio-card">
                            <Card.Header>Data Mining</Card.Header>
                            <Card.Img src={qualitySmith} />
                            <Card.Body>
                                <Card.Link href="#">Quality Smith Company</Card.Link>
                                <Card.Text>Provided data collection and analysis</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className="portfolio-card">
                            <Card.Header>IT as Service</Card.Header>
                            <Card.Img src={censeoImage} />
                            <Card.Body>
                                <Card.Link href="#">IT Service for Censeo Inc.</Card.Link>
                                <Card.Text>
                                    Provide full stack engineering services to develop a Map
                                    planning application using JEE and Angular JS
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </section>
            <br />
        </>
    );
};

export default Portfolio;