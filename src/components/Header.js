import React from 'react'
import { RxMoon } from "react-icons/rx";
import { Link } from "react-router-dom";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = (props) => {


    return (
        <div>
            <header>
                <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                        <Navbar expand="md" className='mt-5'>
                            <Container>
                                <Navbar.Brand>
                                    <Link className='linkNavbar' to="/"><RxMoon className="logo animate__animated animate__flash" /></Link>
                                </Navbar.Brand>

                                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: "white", backgroundColor: "white" }} />

                                <Navbar.Collapse className="justify-content-end">
                                    <Nav className='navbarLinkBox d-flex justify-content-between'>
                                        <Link onClick={() => props.changeBackground(1)} className='linkNavbar' to="/">00 HOME</Link>
                                        <Link onClick={() => props.changeBackground(2)} className='linkNavbar' to="/Destination">01 DESTINATION</Link>
                                        <Link onClick={() => props.changeBackground(3)} className="linkNavbar" to="/Crew">02 CREW</Link>
                                        <Link onClick={() => props.changeBackground(4)} className="linkNavbar" to="/Technology">03 TECHNOLOGY</Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>


                    </div>
                </div>



            </header>
        </div>
    )
}

export default Header