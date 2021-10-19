
import React from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import bg3 from '../../Images/black-carbon.jpg'

const Contact = () => {
    return (
        <section className="contact my-3 py-3 ">
            <Container style={{ background: `url(${bg3})` }}>
                <div className="text-center text-white mb-5 ">
                    <h5>CONTACT US</h5>
                    <h1>Always Connect with us</h1>
                </div>
                <Col md={9} className="mx-auto">
                    <Form action="">
                        <Form.Group className="mb-2">
                            <Form.Control type="email" placeholder="Email Address" />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Control as="textarea" cols="30" rows="8" placeholder="Your Message" />
                        </Form.Group>
                        <Form.Group className="text-center mb-5">
                            <Button style={{
                                background: "linear-gradient(75deg, #19D3AE, #0fcfec)"
                            }} type="button">SUBMIT</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Container>
        </section>
    );
};

export default Contact;