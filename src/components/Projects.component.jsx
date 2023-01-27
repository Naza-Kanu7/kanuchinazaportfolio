// import { Tab } from 'bootstrap';
import React from 'react';
import { Container, Row, Col, Tab } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import ProjectCard from './ProjectCard.component';
import colorSharp2 from '../assets/img/color-sharp2.png'
import todolist from '../assets/img/todo.png'
import movies from '../assets/img/movies.png'
import clothing from '../assets/img/clothing.png'
import cocktail from '../assets/img/cocktail.png'
import projectImg1 from '../assets/img/project-img2.png'
import projectImg2 from '../assets/img/project-img3.png'



function Projects () {
    const projects = [
        {
            title: "To-Do List",
            description: "Making A Plan For Your Day and Ticking When Done!",
            imgUrl: todolist,
            link: "https://todo-check-reactapp.netlify.app/"
        },
        {
            title: "Cocktails",
            description: "What is fun without cocktails? This website gives all top cocktails and their recipes!",
            imgUrl: cocktail,
            link: "https://cocktail-database-project.netlify.app/"
        },
        {
            title: "Movies Database",
            description: "Bored? Check out this website to see trending movies and download to watch at your convenience!",
            imgUrl: movies,
            link: "https://movie-database-project-bynaza.netlify.app/"
        },
        {
            title: "Clothing Shop",
            description: "Trying to shop? Check out our breath taking outfits!",
            imgUrl: clothing,
            link: "https://clothing-react-app.netlify.app/"
        },
        {
            title: "Kanu Chinaza",
            description: "Design & Development",
            imgUrl: projectImg1,
        },
        {
            title: "Kanu Chinaza",
            description: "Design & Development",
            imgUrl: projectImg2,
        },
    ]
    return (
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Here a few of my completed projects. Enjoy!</p>
                        <Tab.Container id='projects-tabs' defaultActiveKey='first' >
                            {/* <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Links</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >
                                        Tab Three
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav> */}
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return(
                                                    <ProjectCard 
                                                        key={index} 
                                                        {...project} 
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>Lorem Ipsum </Tab.Pane>
                                <Tab.Pane eventKey='third'>Lorem Ipsum </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2}></img>
        </section>
    )
}

export default Projects