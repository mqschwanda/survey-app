import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import logo from '../../../logo.svg';

class MainLayout extends Component {
  render() {
    return (
      <div className='text-center'>
        <Jumbotron fluid>
          <Container>
            <img src={logo} className='App-logo' alt='logo' />
            <h2>Welcome to React with SurveyJS</h2>
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
