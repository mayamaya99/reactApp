import React from 'react';
import { Container, CardColumns, Card } from 'react-bootstrap';

import MaiImage from '../../assets/images/people/mai.png';
import BayaImage from '../../assets/images/people/baya.jpg';
import WebberImage from '../../assets/images/people/WardWebber.jpg';

const Blogs = () => {
    return (
        <>
            <Container className='mt-5'>

                <Card>
                    <Card.Img variant="top" src={MaiImage} />
                    <Card.Body>
                        <Card.Title>Paul Mai</Card.Title>
                        <Card.Text>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content
                            here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use
                            Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Last updated 2 days ago</small>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={BayaImage} />
                    <Card.Body>
                        <Card.Title>Baya</Card.Title>
                        <Card.Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                            book.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card bg='secondary' className="p-3">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
                        </p>
                        <footer className="blockquote-footer">
                            <small style={{ color: 'black' }}>
                                Someone from <cite title="Source Title">Seattle Times</cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>
                <Card bg="success" text="white" className="text-center p-3">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Someone from <cite title="Source Title">Houston, Texas</cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>
                <Card>
                    <Card.Img variant='top' src={WebberImage} />
                    <Card.Body>
                        <Card.Title>Ward Webber</Card.Title>
                        <Card.Text>
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
                            exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Last updated 1 week ago</small>
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Container>
        </>
    )
}

export default Blogs;