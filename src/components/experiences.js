import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import FadeInSection from './fadeinslide';

const Experiences = () => {
  return (
    <>
      <div className="diagonalTop new-sect"/>
      <div className="diagonalContent">
        <FadeInSection><h2 className="section-title">Experiences</h2>
        <hr className="section-hr"/></FadeInSection>
        
        <Container fluid className="diagonalContent center">
          <FadeInSection>
              <Row>
                <Col>
                <h3>Web Dev</h3>
                <span>FREELANCE<br/>
                  05/20 - 05/20</span>
                <p>A small-scale, responsive website I design and develop for a client's painting business using the React JS framework. 
                  You can check out the website at <a href="https://lgdprofessionalpainting.expert/">www.lgdprofessionalpainting.expert</a></p>
                </Col>
              </Row>
            </FadeInSection>
            <FadeInSection>
              <Row>
                <Col>
                <h3>Autolab Maintainance</h3>
                <span>WASHINGTON STATE UNIVERSITY'S CAPSTONE<br/>
                  VANCOUVER, WA<br/>
                  09/19 - 05/20</span>
                  <ul>
                    <li>Setup deployment script for a smooth and seamless development</li>
                    <li>Continuous delivery and integration</li>
                    <li>Implement new UX feature</li>
                    <li>Code review in Ruby, HTML/CSS, and bash</li>
                    <li>Testing/debugging new code</li>
                  </ul>
                </Col>
              </Row>
            </FadeInSection>
            <FadeInSection>
              <Row>
                <Col>
                <h3>IT Assistant</h3>
                <span>WASHINGTON STATE UNIVERSITY<br/>
                  VANCOUVER, WA<br/>
                  09/19 - 05/20</span>
                  <ul>
                    <li>Help trouble shoot technical problems from faculty and students</li>
                    <li>Work one on one with users to resolve problems</li>
                    <li>Help manage users' tickets</li>
                    <li>Help students with institution's installed software.</li>
                  </ul>
                </Col>
              </Row>
            </FadeInSection>
            <FadeInSection>
              <Row>
                <Col>
                <h3>IT Intern</h3>
                <span>C-TRAN<br/>
                VANCOUVER, WA<br/>
                08/18 - 02/19</span>
                <ul>
                  <li>Assigning incident and ticket request via Service Desk Plus ticketing system to appropriate level of support</li>
                  <li>Pushed updates of Windows 10, and third-party patches out to computing environment</li>
                  <li>Contributed solutions articles to our knowledge base, as well as learned to image desktop, laptop and tablet PC</li>
                </ul>
                </Col>
              </Row>
            </FadeInSection>
        </Container>
      </div>
      <div className="diagonalBottom"/>
      <Container fluid className="center" style={{textAlign:"center"}}><Button variant="warning" href="https://www.dropbox.com/s/k7ul37zathdt4br/Resume%20Spring%2020.pdf?dl=0" target="_blank">Download Copy</Button></Container>
    </>
  );
}

export default Experiences;