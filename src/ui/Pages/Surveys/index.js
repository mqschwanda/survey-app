import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

import { addSurvey } from '../../../modules/firestore/api';
import { surveysContainer } from '../../../modules/firestore/containers';
import { Main } from '../../Layouts';
import { db } from '../../../modules/firestore';
import { firestoreContainer } from '../../../modules/firestore/containers';

const Surveys = db.collection('surveys');
const container = firestoreContainer(Surveys);

class SurveysComponent extends Component {
  goToSurvey = (_id) => (/* hack onClick func call */) =>
    this.props.history.push(`editor/${_id}`)
  createNewSurvey = () =>
    addSurvey({ title: 'New Survey' })
      .then(({ id }) => this.goToSurvey(id)(/* hack onClick func call */))

  render() {
    return (
      <Main>
        <ListGroup>
          <ListGroupItem>
            <Button onClick={this.createNewSurvey}>
              Create New Survey
            </Button>
          </ListGroupItem>
          {this.props.firestore.data && this.props.firestore.data.map(({ _id, title }) => (
            <ListGroupItem
              key={_id}
              onClick={this.goToSurvey(_id)}
            >
              {title}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Main>
    );
  }
}

export default container(SurveysComponent);
