import React, { Component } from 'react';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Fotter';
import {Container, Row, Col, Button, ButtonGroup, InputGroup, FormControl} from 'react-bootstrap';
import Aux from '../../hoc/Aux';
import './Timbers.css';
import timbers from './timbers.json';
import { Link } from 'react-router-dom';

class Timbers extends Component {
    state={
        timbers: [],
        search: ""
    };

    async componentDidMount() {
        const data = await timbers;
        this.setState({timbers: data})
    }


    onchange = e => {
        this.setState({search: e.target.value})
    }

    render() {
        const timbers = this.state.timbers.map(tim => {

            if(this.state.search !== "" && tim.firm_name.toLowerCase().indexOf(this.state.search.toLowerCase()) === -1 ) {
                return null
            }


            return(
                <Container id="detail" fluid key={tim.id}>
                    <Row>
                        <Col className="col-9" id="colm">
                            <Link to = {`timber/${tim.id}`} id="under" >
                            <div id="name">{tim.firm_name}</div> 
                            </Link>
                        </Col>
                        <Col className="col-3" id="colm">
                        <div id="area">{tim.area}</div>
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
                        <Col lg={6} md={4} sm={4}>
                            <Header/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={5} md={3} sm={3}/>
                        <Col lg={4} md={4} sm={4}>
                        <ButtonGroup aria-label="Basic example"  id="butgroup">
                            <Button variant="secondary">Timbers</Button>
                            <Button variant="light" href="/contacts">Contacts</Button>
                            <Button variant="light" href="/about">About</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={4} sm={4}/>
                        <Col lg={4} md={4} sm={4} id="search">
                            <InputGroup className="sm">
                                <FormControl placeholder="Tap to filter ...."  onChange={this.onchange} />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={4} sm={4}/>
                        <Col lg={4} md={4} sm={4}>
                            {timbers}
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <Footer/>
                        </Col>
                    </Row>
                </Container>
            </Aux>
        )
    }
}

export default Timbers;