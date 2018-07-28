import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import logo from '../../../logo.svg';

export const MainLayout = (props) => (
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
      {props.children}
    </Container>
  </div>
);

export default MainLayout;
