
import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { noNamed, oralHealth, ourAddress, services } from '../../Hooks/useFooter';
import fb from '../../Images/facebook.png'

import './Footer.css';
import FooterCol from './FooterCol';

const Footer = () => {
    return (
        <footer className="footer-area">
            <Container className="pt-md-5 pb-1">
                <Row className="py-5">
                    <FooterCol key={1} menuTitle={""} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item">
                                <a href="//fb.com">
                                    <img style={{ width: "40%" }} src={fb} alt="" />
                                </a>
                            </li>
                        </ul>
                        <div className="mt-5">
                            <h6 className="text-muted">Call Now</h6>
                            <Button>+88014534677834</Button>
                        </div>
                    </FooterCol>
                </Row>
                <div className="text-center text-muted">
                    <p>Copyright &copy; All Rights Reserved</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;