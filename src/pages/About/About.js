import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";

import puzzleImage from "../../assets/images/puzzle.png";

import mai from "../../assets/images/people/mai.png";
import baya from "../../assets/images/people/ahmedE.png";
import ward from "../../assets/images/people/wardwebber.png";

import "./style.css";

import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const About = () => {
    return (
        <>
            <Container className="mt-5"  >
                <Row>
                    <Col xs={7}>
                        <Container className="text-center">
                            <Card id="card" className="text-center" border="primary">
                                <Card.Header className="cardHeader mb-5">
                                    <span className="fa-layers fa-fw" id="aboutTeam" >
                                        <FontAwesomeIcon
                                            icon={faCircle}
                                            size="5x"
                                            style={{ color: "#3483DE", marginRight: "-20px" }}
                                        />
                                        <FontAwesomeIcon
                                            icon={faUser}
                                            size="2x"
                                            style={{ color: "white", marginLeft: "-14px" }}
                                        />
                                    </span>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title className="card-title mb-4" >About Us</Card.Title>
                                    <Card.Text className="card-text">
                                        We are a specialized software transformation and automation
                                        firm. Recognizing advantages and disadvantages from the
                                        existing solutions, our company developed a new improved
                                        technique that helps to automatically migrate legacy
                                        applications to modern architecture. Software transformation
                                        is like solving a puzzle that some pieces are from the
                                        legacy and others are from the to-be architecture.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                    <Col xs={5}>
                        <Image src={puzzleImage} className="img-fluid mb-5" />
                    </Col>
                </Row>
            </Container>
            <p className="line font-weight-bold text-center">_________</p>
            <Container>
                <h3 className="portfolio-header mt-4 mb-3">Our Team</h3>
                <CardGroup>
                    <Card className="portfolio-card">
                        <Card.Img variant="top" src={mai} />
                        <Card.Body>
                            <Card.Link href="https://www.linkedin.com/in/maidung/">
                                Paul Mai
                            </Card.Link>
                            <Card.Text>
                                Principle Investigator and Developer<br />
                                Research, design and develop a multiphase framework that modernizes legacy applications and automatically generates applications from the users logics and the specifications
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="portfolio-card">
                        <Card.Img src={baya} />
                        <Card.Body>
                            <Card.Link href="https://www.linkedin.com/in/ahmed-elmi-179a07199/">Ahmed Elmi Intern 2021</Card.Link>
                            <Card.Text>Modernize a JEE application to Single Page Application using React</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="portfolio-card">
                        <Card.Img src={ward} />
                        <Card.Body>
                            <Card.Link href="#">Ward Webber Consultant</Card.Link>
                            <Card.Text>
                                Function Analyst and Technical Writer<br />
                                Provide software funtional analysis, testing, and technical writing per projects
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
            <br></br>
        </>
    );
};

export default About;