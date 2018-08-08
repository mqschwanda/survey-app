import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

import { addSurvey } from '../../../modules/firestore/api';
import { surveysContainer } from '../../../modules/firestore/containers';
import { Main } from '../../Layouts';
import { db } from '../../../modules/firestore';
import { querySnapshotContainer } from '@mqschwanda/firebase-containers';

const Surveys = db.collection('surveys');
const container = querySnapshotContainer(Surveys);

class SurveysComponent extends Component {
  goToSurvey = (_id) => (/* hack onClick func call */) =>
    this.props.history.push(`editor/${_id}`)
  createNewSurvey = () =>
    addSurvey({ title: 'New Survey' })
      .then(({ id }) => this.goToSurvey(id)(/* hack onClick func call */))

  render() {
    console.log(this.props.firestore);
    return (
      <Main>
        <ListGroup>
          <ListGroupItem>
            <Button onClick={this.createNewSurvey}>
              Create New Survey
            </Button>
          </ListGroupItem>
          {this.props.firestore.data &&
            this.props.firestore.data.map(({ querySnapshot, data }) =>
            <ListGroupItem
              key={querySnapshot.id}
              onClick={this.goToSurvey(querySnapshot.id)}
            >
              {data.title}
            </ListGroupItem>
          )}
        </ListGroup>
      </Main>
    );
  }
}

export default container(SurveysComponent);
