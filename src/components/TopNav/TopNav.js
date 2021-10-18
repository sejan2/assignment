import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'

const TopNav = () => {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            variant="dark"
            fixed="top"
            className="bg-white py-3">

            <Navbar.Brand
                as={Link} to="/"
                className="ml-md-5 navs-brand "
                style={{ color: "#3a1746" }}>
                Doctor's <strong>Chember</strong>
            </Navbar.Brand>



            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="navs">
                    <Nav.Link as={Link} to="/" className="mr-md-5" active>Home</Nav.Link>
                    <Nav.Link as={Link} to="/about" className="mr-md-5" active>About</Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/services"
                        className="mr-md-5 text-dark" active>
                        Services
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/reviews"
                        className="mr-md-5 text-dark" active>
                        Reviews
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/blog"
                        className="mr-md-5 text-dark" active>
                        Blog
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/contact"
                        className="mr-md-5 text-dark" active>
                        Contact Us
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/contact"
                        className="mr-md-5 text-dark" active>
                        Login
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNav;