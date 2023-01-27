import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';


function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Naza" ,"a Web Developer", "a Frontend Web Developer"]
    const [text, setText] =useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta);

        return () => { clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i =loopNum % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>{`Hi I'm`} <span className='wrap'> {text}</span></h1>
                        <p>Hey there, my name is Kanu Chinaza. Graduate of the University of Nigeria, Nsukka. I am 21 years old. I am a Frontend Web Developer. I am interested in joint projects, jobs relating to my expertise. Please recommend me! Thank You!</p>
                        <button onClick={() => console.log('connect')}>
                            Let's Connect 
                            <a href='#connect'><ArrowRightCircle size={25} /></a> 
                        </button>
                        
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt='Header Img' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner