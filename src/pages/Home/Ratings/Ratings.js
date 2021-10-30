import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Ratings = () => {
    return (
        <div>
            <Container className="py-5">
                <div className="rating-title text-center">
                    <h3>LET US GUIDE YOU PAST TRAVEL DISAPPOINTMENTS BY TAILORING YOUR IDEAL ADVENTURE
                    </h3>
                    <h4>and enjoy a 5 star experience like our guest reviews on reviews.io</h4>
                </div>
                <Row>
                    <Col xs={6} md={4} className="bg-light text-dark">
                        xs=6 md=4
                    </Col>
                    <Col xs={12} md={8} className="">
                        <Row className="g-2">
                            <Col md={3} className="p-5 bg-dark border text-white">1</Col>
                            <Col md={3} className="p-5 bg-dark border text-white">2</Col>
                            <Col md={3} className="p-5 bg-dark border text-white">3</Col>
                            <Col md={3} className="p-5 bg-dark border text-white">4</Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Ratings;