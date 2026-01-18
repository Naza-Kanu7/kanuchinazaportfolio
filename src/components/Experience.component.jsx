import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Calendar, GeoAlt } from 'react-bootstrap-icons';

function Experience() {
    const experiences = [
        {
            title: "Frontend Engineer",
            company: "Tyms Technologies",
            location: "Lagos, Nigeria",
            period: "Sept. 2023 - Current",
            responsibilities: [
                "Designed and developed responsive, user-centric web applications using modern front-end technologies, including HTML, CSS, and JavaScript",
                "Collaborated closely with backend developers to seamlessly integrate front-end components with server-side logic",
                "Identified and resolved front-end performance issues and bugs through debugging, testing, and optimization",
                "Wrote and maintained clean, efficient, and testable code following best practices",
                "Contributed front-end development expertise to the TYMS accounting software, enhancing platform usability",
                "Collaborated with UI/UX teams to transform wireframes into responsive, high-performance web interfaces"
            ]
        },
        {
            title: "Software Developer Intern",
            company: "Tech-Serv Technologies",
            location: "Enugu, Nigeria",
            period: "June 2022 - July 2023",
            responsibilities: [
                "Assisted the development team in maintaining company website and websites of clients",
                "Conducted research for development of new software products and assisted in new business scoping efforts",
                "Utilized HTML, CSS and JavaScript to create landing pages for both company and client"
            ]
        }
    ];

    return (
        <section className='experience' id='experience'>
            <Container>
                <Row>
                    <Col>
                        <div className='experience-bx'>
                            <h2>Work Experience</h2>
                            <p>My professional journey as a frontend engineer</p>
                            <div className='experience-list'>
                                {experiences.map((exp, index) => (
                                    <div key={index} className='experience-item'>
                                        <div className='experience-header'>
                                            <h3>{exp.title}</h3>
                                            <h4>{exp.company}</h4>
                                        </div>
                                        <div className='experience-meta'>
                                            <span className='experience-period'>
                                                <Calendar size={16} /> {exp.period}
                                            </span>
                                            <span className='experience-location'>
                                                <GeoAlt size={16} /> {exp.location}
                                            </span>
                                        </div>
                                        <ul className='experience-responsibilities'>
                                            {exp.responsibilities.map((resp, idx) => (
                                                <li key={idx}>{resp}</li>
                                            ))}
                                        </ul>
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

export default Experience;
