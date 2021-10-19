import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import teth from '../../Images/p2.jpg'
import './FeaturedService.css';

const Feature = () => {
    return (
        <section className="features-service d-flex justify-content-center p-0 p-md-5 my-5 m-md-5">
            <Row className="mb-5">
                <Col md={5} className="mb-4 m-md-0">
                    <Image src={teth} fluid />
                </Col>
                <Col md={7} className="align-self-center px-4">
                    <h3 style={{ color: "#3a4756" }}>Exceptional Dental Care, on Your Terms</h3>
                    <p className="text-muted my-3">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nesciunt id dicta ad quod nulla, rem consequuntur, numquam animi dolores dolore molestiae .
                    </p>
                    <Button size="sm">Learn More</Button>
                </Col>
            </Row>
        </section>
    );
};

export default Feature;