import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";
 import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircle,
    faExchangeAlt,
    faDatabase,
    faLightbulb,
    faSyncAlt
} from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faAngular } from "@fortawesome/free-brands-svg-icons";

const ServicesCard = () => {
    return (
        <>
            <h1 className="services-header text-center">Our Services</h1>
            <p className="line font-weight-bold text-center">_________</p>
            <Container className="mt-5 mb-5">
                <CardGroup>
                    <Card id="card" className="text-center" border="primary">
                        <Card.Header className="cardHeader mb-3">
                            <span className="fa-layers fa-fw">
                                <FontAwesomeIcon
                                    icon={faCircle}
                                    size="5x"
                                    style={{ color: "#3483DE", marginRight: "-40px" }}
                                />
                                <FontAwesomeIcon
                                    icon={faFile}
                                    size="2x"
                                    style={{ color: "white", marginRight: "-10px" }}
                                />
                            </span>
                        </Card.Header>
                        <Card.Body >
                            <Card.Title className="card-title mb-3">
                                Word Document Conversion to XML
                            </Card.Title>
                            <Card.Text className="card-text">
                                We provide a unique solution to convert legacy Word documents to
                                semi-structure XML and regenerate the same Word document in a
                                PDF format.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button
                                as={Link}
                                variant="secondary"
                                className="btn btn-outline-secondary shadow-none"
                                id="document-btn"
                                to="/services/documentconversion"
                            >
                                Read More
                            </Button>
                        </Card.Footer>
                    </Card>

                    <Card id="card" className="text-center">
                        <Card.Header className="cardHeader mb-3">
                            <span className="fa-layers fa-fw">
                                <FontAwesomeIcon
                                    icon={faCircle}
                                    size="5x"
                                    style={{ color: "#3483DE", marginRight: "-40px" }}
                                />
                                <FontAwesomeIcon
                                    icon={faExchangeAlt}
                                    size="2x"
                                    style={{ color: "white", marginRight: "-12px" }}
                                />
                            </span>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className="card-title mb-3">
                                Data Transformations
                            </Card.Title>
                            <Card.Text className="card-text">
                                We provide a complete solution for transforming data from one
                                medium to another. The work includes, but is not limited to,
                                mapping data schema, transforming data if applicable, and
                                writing custom procedures for exceptions.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button
                                as={Link}
                                variant="secondary"
                                className="btn btn-outline-secondary shadow-none mt-2"
                                to="/services/datatransformation"
                            >
                                Read More
                            </Button>
                        </Card.Footer>
                    </Card>

                    <Card id="card" className="text-center">
                        <Card.Header className="cardHeader mb-3">
                            <span className="fa-layers fa-fw">
                                <FontAwesomeIcon
                                    icon={faCircle}
                                    size="5x"
                                    style={{ color: "#3483DE", marginRight: "-40px" }}
                                />
                                <FontAwesomeIcon
                                    icon={faDatabase}
                                    size="2x"
                                    style={{ color: "white", marginRight: "-12px" }}
                                />
                            </span>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className="card-title mb-3">
                                Database Migrations
                            </Card.Title>
                            <Card.Text className="card-text">
                                Automated data migration from one database to another database
                                using open-source toolsets like ANTLR4 and StringTemplate.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button
                                as={Link}
                                variant="secondary"
                                className="btn btn-outline-secondary shadow-none"
                                id="migration-btn"
                                to="/services/datamigration"
                            >
                                Read More
                            </Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card id="card" className="text-center">
                        <Card.Header className="cardHeader mb-3">
                            <span className="fa-layers fa-fw">
                                <FontAwesomeIcon
                                    icon={faCircle}
                                    size="5x"
                                    style={{ color: "#3483DE", marginRight: "-43px" }}
                                />
                                <FontAwesomeIcon
                                    icon={faAngular}
                                    size="2x"
                                    style={{ color: "white", marginRight: "-16px" }}
                                />
                            </span>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className="card-title mb-3">
                                Web Development
                            </Card.Title>
                            <Card.Text className="card-text">
                                We provide full services for developing scalable responsive web
                                applications using Angular, React, Bootstrap, HTML5, and
                                Typescript.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button
                                as={Link}
                                variant="secondary"
                                className="btn btn-outline-secondary shadow-none"
                                id="web-btn"
                                to="/services/webdevelopment"
                            >
                                Read More
                            </Button>
                        </Card.Footer>
                    </Card>

                    <Card id="card" className="text-center">
                        <Card.Header className="cardHeader mb-3">
                            <span className="fa-layers fa-fw">
                                <FontAwesomeIcon
                                    icon={faCircle}
                                    size="5x"
                                    style={{ color: "#3483DE", marginRight: "-44px" }}
                                />
                                <FontAwesomeIcon
                                    icon={faSyncAlt}
                                    size="2x"
                                    style={{ color: "white", marginRight: "-16px" }}
                                />
                            </span>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className="card-title mb-3">Data Mining</Card.Title>
                            <Card.Text className="card-text">
                                We provide full services data mining services and build
                                predictive models including data munging and data wrangling.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button
                                as={Link}
                                variant="secondary"
                                className="btn btn-outline-secondary shadow-none"
                                id="mining-btn"
                                to="/services/datamining"
                            >
                                Read More
                            </Button>
                        </Card.Footer>
                    </Card>

                    <Card id="card" className="text-center">
                        <Card.Header className="cardHeader mb-3">
                            <span className="fa-layers fa-fw">
                                <FontAwesomeIcon
                                    icon={faCircle}
                                    size="5x"
                                    style={{ color: "#3483DE", marginRight: "-38px" }}
                                />
                                <FontAwesomeIcon
                                    icon={faLightbulb}
                                    size="2x"
                                    style={{ color: "white", marginRight: "-10px" }}
                                />
                            </span>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className="card-title mb-3">
                                Enterprise Software Solution
                            </Card.Title>
                            <Card.Text className="card-text">
                                If an off-the-shelf product does not suite your business
                                requirements, our firm can work with your company to design and
                                build a customized application that satisfies your requirements
                                at an affordable cost.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button
                                as={Link}
                                variant="secondary"
                                className="btn btn-outline-secondary shadow-none mt-2"
                                to="/services/enterprise"
                            >
                                Read More
                            </Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Container>
        </>
    );
};

export default ServicesCard;
