import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bg from '../../Images/gray-abstract.jpg'
import doctor from '../../Images/dc1-removebg.png'


const Appoinment = () => {
    return (
        <div style={{ background: `url(${bg})` }}>
            <Row>
                <Col md={4} className="text-center">
                    <Image className="mb-3" src={doctor} alt="" fluid />

                    <h3>Dr.Sayham(MBBS)</h3>
                    <p className="text-muted">
                        <FontAwesomeIcon className="phone-icon" icon={faPhoneAlt} />+880199653477
                    </p>

                </Col>
                <Col md={6} className="mt-5">
                    <h2 className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nam itaque incidunt iusto voluptatibus maiores?</h2>
                    <Button size="md" className="btn" style={{
                        background: "linear-gradient(75deg, #19D3AE, #0fcfec)"
                    }}>
                        Get Appoinment
                    </Button>
                </Col>
            </Row>
        </div>
    );
};


export default Appoinment;