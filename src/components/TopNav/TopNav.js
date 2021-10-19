import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/useAuth';


import './Navbar.css'

const TopNav = () => {
    const { user, logOut } = useAuth();
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
                        to="/blogs"
                        className="mr-md-5 text-dark" active>
                        Blog
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/contact"
                        className="mr-md-5 text-dark" active>
                        Contact Us
                    </Nav.Link>
                    {!user.displayName ? < Nav.Link
                        as={Link}
                        to="/login"
                        className="mr-md-5 text-dark" active>
                        Login
                    </Nav.Link>

                        :
                        <Nav.Link
                            as={Link}
                            to=""
                            className="mr-md-5 text-dark" onClick={logOut} active>
                            Logout


                            <small>({user.displayName})</small>
                        </Nav.Link>

                    }


                    {/* <Nav.Link
                        as={Link}
                        to="/register"
                        className="mr-md-5 text-dark" active>
                        signup
                    </Nav.Link> */}

                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
};

export default TopNav;