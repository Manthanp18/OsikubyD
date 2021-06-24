import React, { Component, useEffect, useState } from 'react';
import Header from '../../Component/Header/Header';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Aux from '../../hoc/Aux';
import './Tim.css';
import timbers from './timbers.json';
import _ from 'underscore';

const Timber = () => {
    // firmid = this.props.match.params.id
    const [timber, settimber] = useState([]);
    

    useEffect(() => {
        const data = timbers;        
        var obj = _.find(data, function (obj) { return obj.id === this.this.props.match.params.id; });
        console.log(obj)
        settimber(obj);
    })
    
    const trade = this.state.timber.map(tak => {
        return(
            <Container id="detail" key={tak.id}>
                <Row>
                    <Col lg={4} md={4} sm={4}/>
                    <Col lg={4} md={4} sm={4}>
                        <div id="firm">{tak.firm_name}</div> 
                    </Col>  
                </Row>
                <Row>
                    <Col lg={4} md={4} sm={4}/>
                    <Col lg={4} md={4} sm={4}>
                        <div id="amp">{tak.area}</div> 
                    </Col>
                </Row>
            </Container>
        )
    })
    
    
    
    
    return(
        <Aux>
                <Container fluid>
                    <Row>
                        <Col lg={3} md={4} sm={3}/>
                        <Col lg={6} md={6} sm={6}>
                            <Header/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {trade}
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3} md={3} sm={3}/>
                        <Col lg={3} md={3} sm={3}>
                        <Button variant="secondary" id="avo" onClick={this.props.history.goBack}>Back</Button>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col>
                            {person}
                        </Col>
                    </Row> */}
                </Container>
            </Aux>
    )
    
}

export default Timber;