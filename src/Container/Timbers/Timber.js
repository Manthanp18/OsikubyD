import React, { Component } from 'react';
import Header from '../../Component/Header/Header';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Aux from '../../hoc/Aux';
import './Tim.css';
import _ from 'underscore';
import contact from './all.json';
import timber from './timbers.json';

class Timbers extends Component {
    firmid = this.props.match.params.id
    state={
        timber: [],
        firm: []
    };

    async componentDidMount() {
        var func = function(arg) {
            var obd = _.filter(contact, function(obd) {return obd.timber_id == arg;});
        return obd;
        };
        func = _.bind(func, this.contact, this.firmid); 
        this.setState({timber: func()})

        var bunc = function(amd) {
            var omd = _.filter(timber, function(omd) {return omd.id == amd;});
            return omd;
        };
        bunc = _.bind(bunc, this.timber, this.firmid);
        this.setState({firm: bunc()})
    }


    render() {
        const timber = this.state.firm.map(tak => {
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


        const person = this.state.timber.map(per => {
            return(
                <Container key={per.id}>
                    <Row>
                        <Col lg={4} md={4} sm={4}/>
                        <Col lg={4} md={4} sm={4} id="colony">
                            <div id="pname">{per.person_name}</div> 
                        </Col>
                    </Row>
                    <Row>   
                        <Col lg={4} md={4} sm={4}/>
                        <Col lg={4} md={4} sm={4} id="make">
                            <a href= {`tel: ${per.mob_1}`} id='mobile'> {per.mob_1} </a><br/>
                            <a href= {`tel: ${per.mob_2}`} id='mobile'> {per.mob_2} </a>
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
                            {timber}
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3} md={3} sm={3}/>
                        <Col lg={3} md={3} sm={3}>
                        <Button variant="secondary" id="avo" onClick={this.props.history.goBack}>Back</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {person}
                        </Col>
                    </Row>
                </Container>
            </Aux>
        )
    }
}

export default Timbers;







    // loadData = () => {
    //     axios.get(`http://localhost:5000/timbers/${this.firmid}`)
    //     .then(response => {
    //         this.setState({timber: response.data});
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })


    //     axios.get(`http://localhost:5000/tim/${this.firmid}`)
    //     .then(response => {
    //         this.setState({person: response.data});
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // }