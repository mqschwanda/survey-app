import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import logo from '../../../logo.svg';

class MainLayout extends Component {
  render() {
    return (
      <div className='text-center'>
        <Jumbotron fluid>
          <Container fluid>
            <Row>
              <Col xs='6'>
                <img src={logo} className='App-logo' alt='logo' />
              </Col>
              <Col xs='6'>
                <img src={logo} className='App-logo' alt='logo' />
              </Col>
              <Col xs='12'>
                <h1>React with SurveyJS</h1>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Container fluid>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default MainLayout;
