import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import chair from '../../Images/istockphoto-1308838485-170667a.jpg';
import './Banner.css'

const Banner = () => {
    return (

        <Container>
            <Row className="align-items-center banner" style={{ height: "100vh" }}>
                <Col md={{ span: 4, offset: 1 }} className="p-md-5 order-2 order-md-1">
                    <h1>Your New Smile <br /> Starts Here</h1>
                    <p className="text-muted my-4 pr-md-5">Dental problems are never any fun, but the good news is that most of them can be easily prevented. Brushing twice a day, flossing daily, eating proper</p>
                    <Button
                        as={Link}
                        size="lg"
                        style={{ background: "linear-gradient(75deg, #19D3AE, #0fcfec)", fontWeight: "600" }}
                        className="p-3 shadow-none border-0 text-uppercase"
                        to="/appointment">
                        Get appointment
                    </Button>
                </Col>
                <Col md={6} className="order-1 order-md-2">
                    <Image src={chair} rounded fluid />
                </Col>
            </Row>

            {/* <Row style={{ alignItems: "center" }}>
                <Col xs={12} md={4} className="banner-img">
                    <img src={chair} alt="" />
                </Col>
                <Col xs={6} md={4} className="banner-text">
                    <h2>Your New Smile <br /> Starts Here</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Quae impedit repudiandae, eaque doloremque quia totam earum sit quo beatae eveniet!</p>
                    <Link to='/appoinment'> <button className="btn-id">Get Apoinment</button></Link>
                </Col>
            </Row>
            <hr /> */}
        </Container>

    );
};

export default Banner;