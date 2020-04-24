import React, { Component } from 'react';
import { ListGroup, Container, Row, Col } from 'react-bootstrap';
class Contact extends Component {
    render() {
        return (
            <div className="about-div">
                <h1 className="importance-title">CONNECT WITH ME THROUGH</h1>
                <Container className="connect-grid">
                    <Row>
                        <Col sm={2} className=".connect-icons fa fa-linkedin-square"></Col><Col sm={10}>Tam</Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Contact;