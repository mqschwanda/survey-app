import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

import { addSurvey } from '../../../modules/firestore/api';
import { surveysContainer } from '../../../modules/firestore/containers';


class SurveysComponent extends Component {
  goToSurvey = (_id) => (/* hack onClick func call */) =>
    this.props.history.push(`editor/${_id}`)
  createNewSurvey = () =>
    addSurvey({ title: 'New Survey' })
      .then(({ id }) => this.goToSurvey(id)(/* hack onClick func call */))

  render() {
    return (
      <ListGroup>
        <ListGroupItem>
          <Button onClick={this.createNewSurvey}>
            Create New Survey
          </Button>
        </ListGroupItem>
        {this.props.surveys.map(({ _id, title }) => (
          <ListGroupItem
            key={_id}
            onClick={this.goToSurvey(_id)}
          >
            {title}
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

export default surveysContainer()(SurveysComponent);
