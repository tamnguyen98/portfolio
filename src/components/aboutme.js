import React, { Component } from 'react';
import wsu from '../WSU-V-SKY.jpg';
import clark from '../CLARK.jpg';
import { Container, Row, Col, Dropdown, DropdownButton, Button } from 'react-bootstrap';
class About extends Component {
    render() {
        return (
            <div className="about-div">
                <section className="font-color" id="education">
                    <h1 className="importance-title large-font">EDUCATION</h1>
                    <hr/>
                    <div className="container">
                        <img src={wsu} className="about-image" style={{float:"left"}} />
                        <div className="about-content " style={{float:"right", paddingLeft:"30px"}}>
                            <h3>WASHINGTON STATE UNIVERSITY</h3>
                            <p>BACHELOR OF SCIENCE IN COMPUTER SCIENCE<br/>
                            08/2018-05/2020</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="container">
                        <img src={clark} className="about-image" style={{float:"right"}}/>
                        <div className="about-content"style={{float:"left"}}>
                            <h3>CLARK COMMUNITY COLLEGE</h3>
                            <p>ASSOCIATE IN SCIENCE<br/>
                            08/2016-05/2018</p>
                        </div>
                    </div>
                </section>
                <br/><br/><br/><br/><br/><br/>
                <section className="font-color" id="skills">
                    <h1 className="importance-title large-font">SKILLS</h1>
                    <hr/>
                    <Container fluid="lg" className="about-content" style={{textAlign:"center"}}>
                        <Row>
                            <Col>
                            <DropdownButton id="dropdown-item-button" size="sm" title={<h3>LANGUAGES</h3>}>
                            * symbol represents (at least) <a href="" target="_blank">novice to intermediate </a> in proficiency.
                            </DropdownButton>
                            <p>C, Java, Python, C#,<br/>
                            *Bash,*HTML & CSS, *JS,<br/>
                            *Ruby on Rails, *React.js, *MySQL
                            </p>
                            </Col>
                            <Col>
                            <h3>KEY SKILLS</h3>
                            <p>Object Oriented Programming, Data Structures,<br/>
                            Testing & Debugging, Code Analysis,<br/>
                            Troubleshooting, APIs, and HTTP Req.
                            </p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <br/><br/><br/><br/><br/><br/>
                <section className="font-color" id="exp">
                    <h1 className="importance-title large-font">EXPERIENCES</h1>
                    <hr/>
                    <Container fluid="lg" className="about-content">
                        <Row>
                            <Col>
                            <h3 style={{marginBottom:"3px"}}>Software Engineer Intern</h3>
                            <p id="exp-location">
                                SIGMA DESIGN<br/>
                                VANCOUVER, WA<br/>
                                SUMMER 2020
                            </p>
                            <ul>
                                <li>UPCOMING INTERNSHIP FOR SUMMER OF 2020.</li>
                            </ul>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col>
                            <h3 style={{marginBottom:"3px"}}>Autolab Maintainer [Capstone]</h3>
                            <p id="exp-location">
                                WASHINGTON STATE UNIVERSITY<br/>
                                VANCOUVER, WA<br/>
                                09/19 - 05/20
                            </p>
                            <ul>
                                <li>Setup deployment script for a smooth and seamless development</li>
                                <li>Continuous delivery and integration</li>
                                <li>Implement new UX feature</li>
                                <li>Code review in Ruby, HTML/CSS, and bash</li>
                                <li>Testing/debugging new code</li>
                            </ul>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col>
                            <h3 style={{marginBottom:"3px"}}>IT Assistant</h3>
                            <p id="exp-location">
                                WASHINGTON STATE UNIVERSITY<br/>
                                VANCOUVER, WA<br/>
                                09/19 - 05/20
                            </p>
                            <ul>
                                <li>Help trouble shoot technical problems from faculty and students</li>
                                <li>Work one on one with users to resolve problems</li>
                                <li>Help manage users' tickets</li>
                                <li>Help students with institution's installed software.</li>
                            </ul>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col>
                            <h3 style={{marginBottom:"3px"}}>IT Intern</h3>
                            <p id="exp-location">
                                C-TRAN<br/>
                                VANCOUVER, WA<br/>
                                08/18 - 02/19
                            </p>
                            <ul>
                                <li>Assigning incident and ticket request via Service Desk Plus ticketing system to appropriate level of support</li>
                                <li>Pushed updates of Windows 10, and third-party patches out to computing environment</li>
                                <li>Contributed solutions articles to our knowledge base, as well as learned to image desktop, laptop and tablet PC</li>
                            </ul>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <div id="resume-dl">
                <Button variant="outline-warning" href="https://www.dropbox.com/s/gwlhfhvqyjxoni5/CS_Resume_2020-single.pdf?dl=0" target="_blank">Download Resume</Button>
                </div>
            </div>
        )
    }
}

export default About;