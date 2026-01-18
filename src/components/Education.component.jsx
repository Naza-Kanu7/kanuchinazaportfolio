import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Mortarboard, Calendar, GeoAlt } from 'react-bootstrap-icons';

function Education() {
    const educations = [
        {
            degree: "PGD Computer Science",
            institution: "Lagos State University",
            location: "Lagos, Nigeria",
            period: "Aug 2025 - Current",
            status: "In Progress"
        },
        {
            degree: "Diploma In Web Development",
            institution: "Digital Dreams ICT Academy",
            location: "Enugu, Nigeria",
            period: "Jan 2022 - June 2022",
            status: "Completed"
        },
        {
            degree: "BSC Human Physiology",
            institution: "University of Nigeria",
            location: "Enugu, Nigeria",
            period: "Sept 2016 - Sept 2021",
            status: "Completed"
        }
    ];

    return (
        <section className='education' id='education'>
            <Container>
                <Row>
                    <Col>
                        <div className='education-bx'>
                            <h2>Education</h2>
                            <p>My academic and professional development journey</p>
                            <div className='education-list'>
                                {educations.map((edu, index) => (
                                    <div key={index} className='education-item'>
                                        <div className='education-icon'>
                                            <Mortarboard size={32} />
                                        </div>
                                        <div className='education-content'>
                                            <h3>{edu.degree}</h3>
                                            <h4>{edu.institution}</h4>
                                            <div className='education-meta'>
                                                <span className='education-period'>
                                                    <Calendar size={14} /> {edu.period}
                                                </span>
                                                <span className='education-location'>
                                                    <GeoAlt size={14} /> {edu.location}
                                                </span>
                                            </div>
                                            <span className='education-status'>{edu.status}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Education;
