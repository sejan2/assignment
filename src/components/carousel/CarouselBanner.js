import React from 'react';
import { Carousel } from 'react-bootstrap';
import hos1 from '../../Images/hos1.jpg'
import hos2 from '../../Images/hos3.jpg'
import hos3 from '../../Images/hos4.jpg'
import './carousel.css'

const CarouselBanner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img style={{ height: "700px" }}
                        className="d-block w-100"
                        src={hos1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Dhaka Medical Hospital</h3>
                        <p>Addres:Dhaka</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: "700px" }}
                        className="d-block w-100 "
                        src={hos3}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Asgar Ali Hospital</h3>
                        <p>Address:Gendaria,Dhaka</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: "700px" }}
                        className="d-block w-100"
                        src={hos2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Popular Diagnostic Hospital</h3>
                        <p>Address:Mirpur,Dhaka</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default CarouselBanner;