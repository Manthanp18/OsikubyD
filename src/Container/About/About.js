import React, { Component } from 'react';
import Header from '../../Component/Header/Header';
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import Aux from '../../hoc/Aux';
import './About.css';

class About extends Component {
    render() {
        return (
            <Aux>
                <Container fluid>
                    <Row>
                        <Col lg={3} md={4} sm={4} />
                        <Col lg={6} md={4} sm={6}>
                            <Header />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={5 } md={4} sm={4} />
                        <Col lg={4} md={4} sm={4}>
                            <ButtonGroup aria-label="Basic example" size="md" id="butgroup">
                                <Button variant="light" href="/timber">Timbers</Button>
                                <Button variant="light" href="/contacts">Contacts</Button>
                                <Button variant="secondary">About</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={4} sm={4} />
                        <Col lg={4} md={4} sm={4}>
                            <div id="adela">
                                OSIKU is a phonebook for Timber Merchants based out in Odhav, Singarwa, and Kunjad. It is made by Dharmik S. Patel, son of one of the timber merchants.
                                <br /><br />
                                If any numbers or email ids are wrong and need to update or add any new number, contact me at <a href="tel:9265860765" id="nid">9265860765</a>.
                                <br /><br />
                                Best Wishes from,<br />
                                <span id="nid">Dharmik S. Patel</span>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </Aux>
        )
    }
}

export default About;

