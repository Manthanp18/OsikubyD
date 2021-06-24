import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Header from "../../Component/Header/Header";
import Login from '../../Images/login.png';
import '../Aunthentication/Auth.css';


class Auth extends Component {
    state = {
        code: {
            passcode: ''
        },
        errorMessage: ''
    }
    changeHandler = e => {
        const { code } = {...this.state};
        const currentState = code;
        const { name, value } = e.target;
        currentState[name] = value;
        this.setState({ code: currentState });
    }

    saveHandler = e => {
        e.preventDefault()
        if(this.state.code.passcode === '1008') {
            this.props.history.push(`Timber`);            
        }

        else {
            console.log("Error");
            this.setState({errorMessage: '>> Incorrect Passcode.'})
        }
    }



    render() {
        const { passcode } = this.state.code
        return(
            <Aux>
                <Container id="hack">
                    <Row>
                        <Col  lg={3} md={4} sm={4} />
                        <Col  lg={6} md={4} sm={4}>     
                            <Header />
                        </Col>
                        <Col lg={3} md={4} sm={4} />
                    </Row>
                    <Row id="mar">
                        <Col  lg={3} md={4} sm={4}/>
                        <Col  lg={3} md={4} sm={4} >     
                            <img src = {Login} alt="Enter the passcode"/>
                        </Col>
                        <Col lg={3} md={4} sm={3} id="down">
                            <Form onSubmit={this.saveHandler}>
                                <Form.Control type="text" name="passcode" value={passcode} onChange={this.changeHandler} placeholder="Enter the passcode" />
                                <Button variant="secondary" id="but" type="submit">Continue</Button>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3} md={4} sm={4}/>
                        <Col lg={3} md={4} sm={4}/>
                        <Col lg={3} md={4} sm={4} id="emb">
                        { this.state.errorMessage &&
                            <h3 className="error" id="error"> { this.state.errorMessage } </h3> }
                        </Col>
                    </Row>
                </Container>
            </Aux>
        )
    }


}

export default Auth;