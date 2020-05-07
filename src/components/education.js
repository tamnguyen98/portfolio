import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive'
import FadeInSection from './fadeinslide';

import wsu from '../img/WSU-V.jpg';
import clark from '../img/CLARK.jpg';

const Education = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 990px)'
  })

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 990px)' })


  return (
    <>
      <div className="diagonalTop new-sect"/>
      <div className="diagonalContent">
        <FadeInSection><h2 className="section-title">Education</h2>
        <hr className="section-hr"/></FadeInSection>
        
        <Container fluid className="diagonalContent center edu">
            <FadeInSection>
              <Row>
                <Col sm={6} lg={4}>
                  <Image style={{width:"100%"}} fluid src={wsu}/>
                </Col>
                <Col sm={12} lg={8}>
                  <h3>Washington State University</h3>
                  <span>Bachelor of Science in Computer Science <br/>
                        Fall 2018 - Spring 2020</span>
                  <p><u>Relevant Classes:</u> Fundamental of Software Engineer, Applied Systems Security, Probability and
                    Statistic, Intro to Database System, Programming Language {'&'} Design, Design {'&'} Analysis Algorithms, 
                    Intro to Computer Networks, Machine Learning, Digital Forensic, Operating System</p>
                </Col>
              </Row>
            </FadeInSection>
            <FadeInSection>
              <hr style={{borderTop:"2px dotted white"}}/>
              <Row style={{paddingTop:"20px"}}>
                { isDesktopOrLaptop && 
                  <><Col sm={12} lg={8} style={{textAlign:"right"}}>
                    <h3>Clark Community College</h3>
                    <span>Associates of Science in Computer Science<br/>
                          Fall 2016 - Summer 2018</span><br/>
                    <p><u>Relevant Classes:</u> Intro to C, Discrete Structure, Intro to Data Structures, Data Structures {'&'} ObjectOriented</p>
                  </Col>
                  <Col sm={6} lg={4}>
                    <Image style={{width:"100%"}} fluid src={clark}/>
                  </Col></>}
                { isTabletOrMobile &&
                  <><Col sm={6} lg={4}>
                    <Image style={{width:"100%"}} fluid src={clark}/>
                  </Col>
                  <Col sm={12} lg={8} style={{textAlign:"right"}}>
                  <h3>Clark Community College</h3>
                  <span>Associates of Science in Computer Science<br/>
                        Fall 2016 - Summer 2018</span><br/>
                  <p><u>Relevant Classes:</u> Intro to C, Discrete Structure, Intro to Data Structures, Data Structures {'&'} ObjectOriented</p>
                </Col></>}
              </Row>
            </FadeInSection>
        </Container>
      </div>
      <div className="diagonalBottom"/>
    </>
  );
}

export default Education;