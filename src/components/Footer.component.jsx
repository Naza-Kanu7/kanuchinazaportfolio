import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
// import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        {/* <img src={logo} alt="Logo" /> */}
                        <h1>NK</h1>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            {/* <a href="#"><img src={navIcon1} alt="Icon" /></a>
                            <a href="#"><img src={navIcon2} alt="Icon" /></a>
                            <a href="#"><img src={navIcon3} alt="Icon" /></a> */}
                            <a 
                                href="https://github.com/Naza-Kanu7" 
                                target="_blank" 
                                className='span'
                            >
                                <span><FaGithub /></span> 
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/kanu-chinaza-chika/" 
                                target="_blank" 
                                className='span'
                            >
                                <span><FaLinkedinIn /></span> 
                            </a>
                            <a 
                                href="https://wa.me/2347046013444"
                                target="_blank"  
                                className='span'
                            >
                                <span><FaWhatsapp /></span> 
                            </a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer