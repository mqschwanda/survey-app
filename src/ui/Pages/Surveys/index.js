import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

import { addSurvey } from '../../../modules/firestore/api';
import { Main } from '../../Layouts';
import { db } from '../../../modules/firestore';
import {
  snapshotContainer,
  // referenceContainer,
} from '../../../modules/firestore/containers';
// import { snapshotContainer } from '@mqschwanda/firebase-containers';

const Surveys = db.collection('surveys');
const container = snapshotContainer(Surveys);

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
          {this.props.snapshot.docs.map((docSnapshot) =>
            <ListGroupItem
              key={docSnapshot.id}
              onClick={this.goToSurvey(docSnapshot.id)}
            >
              {docSnapshot.data().title}
            </ListGroupItem>
          )}
        </ListGroup>
      </Main>
    );
  }
}

export default container(SurveysComponent);
