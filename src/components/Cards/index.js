import React from "react";

import Card from 'react-bootstrap/Card';
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
// import { CardBody } from "react-bootstrap";

const ServicesCard = () => {
    return (
        <>
            <h1 className="services-header text-center">Our Services</h1>
            <p className="line font-weight-bold text-center">_________</p>
            <Container className="mt-5 mb-1">
                <CardGroup>
                    <Card id="card" className="text-center" style={{ border:'none' }}>
                        <Card.Title className="cardHeader mb-3">
                            <span className="fa-layers fa-fw">
                                <FontAwesomeIcon
                                    icon={faCircle}
                                    size="5x"
                                    style={{ color: "#3483DE", marginRight: "-40px" }}
                                />
                                <FontAwesomeIcon
                                    icon={faFile}
                                    size="2x"
                                    style={{ color: "white", marginRight: "-14px" }}
                                />
                            </span>
                        </Card.Title>
                        <Card.Body>
                            <Card.Title className="card-title mb-3">
                                Word Document Conversion to XML
                            </Card.Title>
                            <Card.Text className="card-text">
                                We provide a unique solution to convert legacy Word documents to
                                semi-structure XML and regenerate the same Word document in a
                                PDF format.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{ border: 'none'}}>
                            <Button
                                as={Link}
                                variant="outline-secondary"
                                // className="btn btn-outline shadow-none"
                                id="document-btn"
                                to="/services/documentconversion"
                            >
                                Read More
                            </Button>
                        </Card.Footer>
                    </Card>

                    <Card id="card" className="text-center">
                        <Card.Title className="cardHeader mb-3">
                            <span className="fa-layers fa-fw">
                                <FontAwesomeIcon
                                    icon={faCircle}
                                    size="5x"
                                    style={{ color: "#3483DE", marginRight: "-35px" }}
                                />
                                <FontAwesomeIcon
                                    icon={faExchangeAlt}
                                    size="2x"
                                    style={{ color: "white", marginRight: "-14px" }}
                                />
                            </span>
                        </Card.Title>
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
                        <Card.Footer style={{ border: 'none'}}>
                            <Button
                                as={Link}
                                variant="outline-secondary"
                                // className="btn btn-outline shadow-none mt-2"
                                to="/services/datatransformation"
                            >
                                Read More
                            </Button>
                        </Card.Footer>
                    </Card>

                    <Card id="card" className="text-center">
                        <Card.Title className="cardHeader mb-3">
                            <span className="fa-layers fa-fw">
                                <FontAwesomeIcon
                                    icon={faCircle}
                                    size="5x"
                                    style={{ color: "#3483DE", marginRight: "-38px" }}
                                />
                                <FontAwesomeIcon
                                    icon={faDatabase}
                                    size="2x"
                                    style={{ color: "white", marginRight: "-14px" }}
                                />
                            </span>
                        </Card.Title>
                        <Card.Body>
                            <Card.Title className="card-title mb-3">
                                Database Migrations
                            </Card.Title>
                            <Card.Text className="card-text">
                                Automated data migration from one database to another database
                                using open-source toolsets like ANTLR4 and StringTemplate.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{ border: 'none'}}>
                            <Button
                                as={Link}
                                variant="outline-secondary"
                                // className="btn btn-outline shadow-none"
                                id="migration-btn"
                                to="/services/datamigration"
                            >
                                Read More
                            </Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                <br/>
                <br></br>
                <CardGroup>
                    <Card id="card" className="text-center">
                        <Card.Title className="cardHeader mb-3">
                            <span className="fa-layers fa-fw">
                                <FontAwesomeIcon
                                    icon={faCircle}
                                    size="5x"
                                    style={{ color: "#3483DE", marginRight: "-43px" }}
                                />
                                <FontAwesomeIcon
                                    icon={faAngular}
                                    size="2x"
                                    style={{ color: "white", marginRight: "-17px" }}
                                />
                            </span>
                        </Card.Title>
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
                        <Card.Footer style={{ border: 'none'}}>
                            <Button
                                as={Link}
                                variant="outline-secondary"
                                // className="btn btn-outline shadow-none"
                                id="web-btn"
                                to="/services/webdevelopment"
                            >
                                Read More
                            </Button>
                        </Card.Footer>
                    </Card>

                    <Card id="card" className="text-center">
                        <Card.Title className="cardHeader mb-3">
                            <span className="fa-layers fa-fw">
                                <FontAwesomeIcon
                                    icon={faCircle}
                                    size="5x"
                                    style={{ color: "#3483DE", marginRight: "-34px" }}
                                />
                                <FontAwesomeIcon
                                    icon={faSyncAlt}
                                    size="2x"
                                    style={{ color: "white", textAlign:"center" }}
                                />
                            </span>
                        </Card.Title>
                        <Card.Body>
                            <Card.Title className="card-title mb-3">Data Mining</Card.Title>
                            <Card.Text className="card-text">
                                We provide full services data mining services and build
                                predictive models including data munging and data wrangling.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{ border: 'none'}}>
                            <Button
                                as={Link}
                                variant="outline-secondary"
                                // className="btn btn-outline shadow-none"
                                id="mining-btn"
                                to="/services/datamining"
                            >
                                Read More
                            </Button>
                        </Card.Footer>
                    </Card>

                    <Card id="card" className="text-center">
                        <Card.Title className="cardHeader mb-3">
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
                        </Card.Title>
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
                        <Card.Footer style={{ border: 'none'}}  className=".card-footer">
                            <Button
                                as={Link}
                                variant="outline-secondary"
                                // className="btn btn-outline shadow-none mt-2"
                                to="/services/enterprise"
                            >
                                Read More
                            </Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
<br/>
                {/* <div class="box">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12  ">

                                <div class="box-part text-center">


                                    <Card.Title className="card-title ">

                                        Word Document Conversion to XML
                                    </Card.Title>

                                    <CardBody>
                                        <Card.Text className="card-text">
                                            We provide a unique solution to convert legacy Word documents to
                                            semi-structure XML and regenerate the same Word document in a
                                            PDF format.
                                        </Card.Text>
                                    </CardBody>
                                    <Card.Footer>
                                        <Button
                                            as={Link}
                                            variant="secondary"
                                            className="btn btn-outline shadow-none mt-2"
                                            id="document-btn"
                                            to="/services/documentconversion"
                                        >
                                            Read More
                                        </Button>
                                    </Card.Footer>

                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 ">

                                <div class="box-part text-center">

                                    <i class="fa fa-twitter fa-3x" aria-hidden="true"></i>

                                    <Card.Title className="card-title mb-3">
                                        Data Transformations
                                    </Card.Title>
                                    <CardBody>
                                        <Card.Text className="card-text">
                                            We provide a complete solution for transforming data from one
                                            medium to another. The work includes, but is not limited to,
                                            mapping data schema, transforming data if applicable, and
                                            writing custom procedures for exceptions.
                                        </Card.Text>
                                    </CardBody>
                                    <Card.Footer >
                                        <Button
                                            as={Link}
                                            variant="secondary"
                                            className="btn btn-outline shadow-none mb-2"
                                            to="/services/datatransformation"
                                        >
                                            Read More
                                        </Button>
                                    </Card.Footer>

                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 ">

                                <div class="box-part text-center">

                                    <i class="fa fa-facebook fa-3x" aria-hidden="true"></i>

                                    <Card.Title className="card-title mb-3">
                                        Database Migrations
                                    </Card.Title>

                                    <Card.Text className="card-text">
                                        Automated data migration from one database to another database
                                        using open-source toolsets like ANTLR4 and StringTemplate.
                                    </Card.Text>

                                    <Card.Footer>
                                        <Button
                                            as={Link}
                                            variant="secondary"
                                            className="btn btn-outline shadow-none mt-2"
                                            id="migration-btn"
                                            to="/services/datamigration"
                                        >
                                            Read More
                                        </Button>
                                    </Card.Footer>

                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">

                                <div class="box-part text-center">

                                    <i class="fa fa-pinterest-p fa-3x" aria-hidden="true"></i>

                                    <Card.Title className="card-title mb-3">
                                        Web Development
                                    </Card.Title>

                                    <Card.Text className="card-text">
                                        We provide full services for developing scalable responsive web
                                        applications using Angular, React, Bootstrap, HTML5, and
                                        Typescript.
                                    </Card.Text>

                                    <Card.Footer>
                                        <Button
                                            as={Link}
                                            variant="secondary"
                                            className="btn btn-outline shadow-none mt-2"
                                            id="web-btn"
                                            to="/services/webdevelopment"
                                        >
                                            Read More
                                        </Button>
                                    </Card.Footer>

                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">

                                <div class="box-part text-center">

                                    <i class="fa fa-google-plus fa-3x" aria-hidden="true"></i>

                                    <Card.Title className="card-title mb-3">Data Mining</Card.Title>
                                    <Card.Text className="card-text">
                                        We provide full services data mining services and build
                                        predictive models including data munging and data wrangling.
                                    </Card.Text>

                                    <Card.Footer>
                                        <Button
                                            as={Link}
                                            variant="secondary"
                                            className="btn btn-outline shadow-none mt-2 "
                                            id="mining-btn"
                                            to="/services/datamining"
                                        >
                                            Read More
                                        </Button>
                                    </Card.Footer>

                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">

                                <div class="box-part text-center">

                                    <i class="fa fa-github fa-3x" aria-hidden="true"></i>

                                    <Card.Title className="card-title mb-3">
                                        Enterprise Software Solution
                                    </Card.Title>

                                    <Card.Text className="card-text">
                                        If an off-the-shelf product does not suite your business
                                        requirements, our firm can work with your company to design and
                                        build a customized application that satisfies your requirements
                                        at an affordable cost.
                                    </Card.Text>

                                    <Card.Footer>
                                        <Button
                                            as={Link}
                                            variant="secondary"
                                            className="btn btn-outline shadow-none mt-2"
                                            to="/services/enterprise"
                                        >
                                            Read More
                                        </Button>
                                    </Card.Footer>

                                </div>
                                <br />
                            </div>

                        </div>
                    </div>
                </div> */}


            </Container>
        </>
    );
};

export default ServicesCard;
