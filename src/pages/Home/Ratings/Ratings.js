import React from 'react';
import { useState, useEffect } from 'react';
import './Rating.css'
import { ButtonGroup, Col, Container, Form, Row, Button } from 'react-bootstrap';
import { faUser, faSchool, faAddressBook, faAnchor, faDownload, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import useAuth from '../../hooks/useAuth';
const star = <FontAwesomeIcon icon={faStar} />
const Ratings = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        fetch('./users.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }, [users])
    return (
        <div>
            <Container className="py-5">
                <div className="rating-title text-center pb-4">
                    <h3>LET US GUIDE YOU PAST TRAVEL DISAPPOINTMENTS BY TAILORING YOUR IDEAL ADVENTURE
                    </h3>
                    <h4>and enjoy a 5 star experience like our guest reviews on reviews.io</h4>
                </div>
                <Row>
                    <Col xs={12} md={3} className="bg-dark text-white text-center py-3">
                        <h2>Excellent</h2>
                        <h1>{star}{star}{star}{star}{star}</h1>
                        <p>Avarage rating: 4.85</p>
                        <p>Total ratings: 49</p>
                    </Col>
                    <Col xs={12} md={9} className="">
                        <Row className="container">
                            <Col md={4} className="p-5 border">
                                <div className="img-name">
                                    <img className="rounded-circle" src="https://randomuser.me/api/portraits/thumb/women/69.jpg" alt="" />
                                    <p><h5>Alex carry</h5>{star}{star}{star}{star}{star}</p>
                                </div>
                                <blockquote className="text-center pt-3">"Loved Extour.. Amazing site for tour"</blockquote>


                            </Col>
                            <Col md={4} className="p-5 border">
                                <div className="img-name">
                                    <img className="rounded-circle" src="https://randomuser.me/api/portraits/thumb/men/40.jpg" alt="" />
                                    <p><h5>Anjelina Jhanku</h5>{star}{star}{star}{star}{star}</p>

                                </div>

                                <blockquote className="text-center pt-3">"Recomanded, Best expericece"</blockquote>
                            </Col>
                            <Col md={4} className="p-5 border">
                                <div className="img-name">
                                    <img className="rounded-circle" src="https://randomuser.me/api/portraits/thumb/men/3.jpg" alt="" />
                                    <p><h5>Milan Damji</h5>{star}{star}{star}{star}{star}</p>
                                </div>
                                <blockquote className="text-center pt-3">"Excellent service. Give it a try"</blockquote>

                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <h1 className="text-center pt-5 pb-3">We Value your Opinaions!</h1>
                    <Col md={9} xs={12} className="mx-auto">
                        <Form className="bg-dark p-5 mt-3">
                            <h4 className="text-white text-uppercase">Leave us a messahe</h4>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className="text-white">Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className="text-white">Your Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="light">Send</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Ratings;