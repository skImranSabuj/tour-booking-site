import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown, DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png';
const userLogo = <FontAwesomeIcon icon={faUser} />

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home" className="fw-bold"> <img
                        alt=""
                        src={logo}
                        width="200"
                        height="50"
                        className="d-inline-block align-top"
                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Link to="/home">Home</Link>
                            <Link to="/about">Home</Link> */}
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services">Places</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/addService">Add Service</Nav.Link>
                            <NavDropdown title="All users" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="https://surokkha.gov.bd/" target="_blank"></NavDropdown.Item>
                                <NavDropdown.Item href="https://www.bmdc.org.bd/search-doctor" target="_blank">Doctors</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Diagonistic</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="https://corona.gov.bd/" target="_blank">Corona info</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text>
                                    {user.email ?
                                        <DropdownButton
                                            id="dropdown-button-dark-example2"
                                            variant="outline-info"
                                            menuVariant="dark"
                                            title={user.displayName}
                                            className="mt-2"
                                        >
                                            <Dropdown.Item onClick={logOut} href="#/action-1" active>
                                                LogOut
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Account</Dropdown.Item>
                                        </DropdownButton>
                                        : <Nav.Link as={Link} to="/login">{userLogo} Login</Nav.Link>}
                                </Navbar.Text>
                            </Navbar.Collapse>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;