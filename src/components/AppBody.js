import React from 'react'; 
import { Button, Container, Row, Col } from 'reactstrap'; 
import { RocketImage } from './RocketImage'; 

export class AppBody extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      animate: false,  
    }
    this.handleLiftoffButtonClick=this.handleLiftoffButtonClick.bind(this); 
    this.handleAbortButtonClick=this.handleAbortButtonClick.bind(this); 
  }
  handleLiftoffButtonClick() {
    this.setState({
      animate: true,  
    }); 
  }
  handleAbortButtonClick() {
    this.setState({
      animate: false,  
    })
  }

  render() {
    return(
       <Container className="App-body">
          <Row>
            <Col>
              <Button color="primary" onClick={this.handleLiftoffButtonClick}>Liftoff!</Button>
            </Col> 
            <Col>
              <Button color="danger" onClick={this.handleAbortButtonClick}>Abort!</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <RocketImage img={this.props.rocketImage} animate={this.state.animate} /> 
            </Col>
          </Row>
        </Container>  
        );  
  }
}
