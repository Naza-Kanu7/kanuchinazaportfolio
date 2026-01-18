import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import percent60 from "../assets/img/percent60.svg"
import percent70 from "../assets/img/percent70.svg"
import percent80 from "../assets/img/percent80.svg"
import percent90 from "../assets/img/percent90.svg"
import colorSharp from "../assets/img/color-sharp.png"

function Skills() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 900 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 900, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Skills
                            </h2>
                            {/* <p></p> */}
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={percent90} alt="Image" />
                                    <h5>HTML</h5>
                                </div>
                                <div className='item'>
                                    <img src={percent90} alt="Image" />
                                    <h5>CSS</h5>
                                </div>
                                <div className='item'>
                                    <img src={percent90} alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className='item'>
                                    <img src={percent90} alt="Image" />
                                    <h5>React JS</h5>
                                </div>
                                <div className='item'>
                                    <img src={percent80} alt="Image" />
                                    <h5>Redux</h5>
                                </div>
                                <div className='item'>
                                    <img src={percent80} alt="Image" />
                                    <h5>Angular JS</h5>
                                </div>
                                <div className='item'>
                                    <img src={percent80} alt="Image" />
                                    <h5>Next.js</h5>
                                </div>
                                <div className='item'>
                                    <img src={percent80} alt="Image" />
                                    <h5>TypeScript</h5>
                                </div>
                                <div className='item'>
                                    <img src={percent90} alt="Image" />
                                    <h5>Git</h5>
                                </div>
                                <div className='item'>
                                    <img src={percent80} alt="Image" />
                                    <h5>Vibe Coding</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} />
        </section>
    )
}

export default Skills