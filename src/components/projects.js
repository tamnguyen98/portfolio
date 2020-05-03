import React from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap';
import cImg from '../img/c_img.svg';

const Project = (props) => {
    return (
        <Card border="Primary" bg="Dark">
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.desc}
            </Card.Text>
            <Button variant="primary">Visit Repo</Button>
        </Card.Body>
        </Card>
    );
}

const Projects = () => {
    return (
        <>
        <div className="diagonalTop2"/>
        <h2 className="section-title diagonalContent">Projects</h2>
        <Container fluid id="summary" className="diagonalContent center-80">
          <Row>
            <Project img={cImg} 
            title="Philospher Dining Problem" 
            desc="This program attempts to 'solve' the famous dining philosopher problem using c while avoiding deadlock. This approach is using mutex."/>
          </Row>
        </Container>
        <div className="diagonalBottom2"/>

        </>
    );
}

export default Projects