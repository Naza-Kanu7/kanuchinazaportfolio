import React from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg'

function Contact() {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonText('Opening WhatsApp...');
        
        // Format the message with all form details
        const whatsappMessage = `Hello! I'm interested in working with you.

*Name:* ${formDetails.firstName} ${formDetails.lastName}
*Email:* ${formDetails.email}
*Phone:* ${formDetails.phone}

*Message:*
${formDetails.message}`;

        // WhatsApp phone number (from footer - 2347046013444)
        const phoneNumber = '2347046013444';
        
        // Encode the message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
        
        // Reset form and button
        setButtonText("Send");
        setFormDetails(formInitialDetails);
        setStatus({success: true, message: 'Opening WhatsApp...'});
        
        // Clear status message after 3 seconds
        setTimeout(() => {
            setStatus({});
        }, 3000);
    };

    return (
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt='Contact Us' />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e) => onFormUpdate('firstName', e.target.value)} required/>
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastName', e.target.value)} required/>
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='email' value={formDetails.email} placeholder='Your Email' onChange={(e) => onFormUpdate('email', e.target.value)} required/>
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='tel' value={formDetails.phone} placeholder='Phone Number' onChange={(e) => onFormUpdate('phone', e.target.value)} required/>
                                </Col>
                                <Col>
                                    <textarea row='6' value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
                                    <button type='submit'><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Contact