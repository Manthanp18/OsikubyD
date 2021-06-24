import React from 'react';
import  './Fotter.css';
import { Container, Row, Col } from 'react-bootstrap';


const footer = () => (
  <Container fluid>
    <Row>
      <Col lg={9} md={9} sm={9}/>
      <Col lg={3} md={3} sm={3} id="foot">
        By DHARMIK S. PATEL
      </Col>
    </Row>
  </Container>
)

export default footer;