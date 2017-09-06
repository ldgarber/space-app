import React, { Component } from 'react';
import logo from './logo.svg';
import rocket from './rocket.svg'; 
import './App.css';
import { Button, Container, Row, Col } from 'reactstrap'; 
import { RocketImage } from './components/RocketImage'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Space</h2>
        </div>
        <Container className="App-body">
          <Row>
            <Col>
              <Button color="primary">Liftoff!</Button>
            </Col> 
            <Col>
              <Button color="danger">Abort!</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <RocketImage img={rocket}/> 
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
