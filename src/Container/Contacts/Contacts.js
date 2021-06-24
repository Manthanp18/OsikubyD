import React, { Component } from 'react';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Fotter';
import {Container, Row, Col, Button, ButtonGroup, InputGroup, FormControl} from 'react-bootstrap';
import Aux from '../../hoc/Aux';
import { Link } from 'react-router-dom';
import contact from './all.json';

class Timbers extends Component {
    state={
        contacts: [],
        search: "",
    };

    async componentDidMount() {
        const data = await contact;
        this.setState({contacts: data})
    }  

    onchange = e => {
        this.setState({search: e.target.value})
    }

    render() {
        const contacts = this.state.contacts.map(con => {
            if(this.state.search !== "" && con.person_name.toLowerCase().indexOf(this.state.search.toLowerCase()) === -1 ) {
                return null
            }
            return(

                <Container fluid key={con.id}>
                    <Row>
                        <Col className="col-7" id="colm">
                            <Link to = {`contacts/${con.id}`} id="under" >
                                <div id="pname">
                                    {con.person_name}
                                </div>                       
                            </Link>
                        </Col>
                        <Col className="col-5" id="colm">
                        <div id="ahme">{con.firm_name}</div>
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
                        <Col lg={6} md={4} sm={6}>
                            <Header/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={5} md={4} sm={5}/>
                        <Col lg={4} md={4} sm={4}>
                        <ButtonGroup aria-label="Basic example" size="md" id="butgroup">
                            <Button variant="light" href="/timber">Timbers</Button>
                            <Button variant="secondary">Contacts</Button>
                            <Button variant="light" href="/about">About</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={4} sm={4}/>
                        <Col lg={4} md={4} sm={4} id="search">
                        <InputGroup className="lg">
                        <FormControl placeholder="Tap to filter ...."  onChange={this.onchange} />
                        </InputGroup>
                        </Col>   
                    </Row>
                    <Row>
                        <Col lg={4} md={4} sm={4}/>
                        <Col lg={4} md={4} sm={4}>
                            {contacts}
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