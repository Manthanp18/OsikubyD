import React, { Component } from 'react';
import Header from '../../Component/Header/Header';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Aux from '../../hoc/Aux';
import './Concat.css';
import contact from './all.json';
import _ from 'underscore';

class Timbers extends Component {
    personId = this.props.match.params.id
    state = {
        contact: [],

    };

    async componentDidMount() {
        var func = function(arg) {
            return contact[arg - 1];
        };
        func = _.bind(func, this.contact, this.personId); 
        console.log(func());
        this.setState({contact: func()})
    }

    render() {
    let con = this.state.contact
        return (
            <Aux>
                <Container fluid>
                    <Row>
                        <Col lg={3} md={4} sm={3}/>
                        <Col lg={6} md={6} sm={6}>
                            <Header />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3} md={4} sm={4}/>
                        <Col lg={4} md={4} sm={4}>
                        <Button variant="secondary" onClick={this.props.history.goBack} id="marktic">Back</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={4} sm={4} />
                        <Col lg={4} md={4} sm={4}>
                            <Container fluid id="cam" key={con.id}>
                                <Row>
                                    <Col className="col-7" id="colm">
                                        <div id="pname">
                                            {con.person_name}
                                        </div> 
                                    </Col>
                                    <Col className="col-5" id="colm">
                                        <div id="ahme">{con.firm_name}</div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="col-7" id="make">
                                        <a href= {`tel: ${con.mob_1}`} id='mobile'> {con.mob_1} </a><br/>
                                        <a href= {`tel: ${con.mob_2}`} id='mobile'> {con.mob_2} </a>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Aux>
        )
    }
}

export default Timbers;