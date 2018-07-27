import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import promiseContainer from '../../../modules/promise-container';
import { Surveys, mapDocs } from '../../../modules/firestore';


class SurveysComponent extends Component {
  goToSurvey = (_id) => () => this.props.history.push(`editor/${_id}`)
  addSurvey = () => {
    Surveys
      .add({ title: 'New Survey' })
      .then(({ id }) => {
        this.goToSurvey(id)(/* hack onClick func call */)
      });
  }
  render() {
    return (
      <ListGroup>
        <ListGroupItem onClick={this.addSurvey}>
          Create New Survey
        </ListGroupItem>
        {this.props.surveys.map(({ _id, ...survey }) => (
          <ListGroupItem
            key={_id}
            onClick={this.goToSurvey(_id)}
            {...this.props}
          >
            {survey.title}
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

const surveyContainer = promiseContainer((props) => ({
  surveys: Surveys.get().then(mapDocs),
}));

export default surveyContainer(SurveysComponent);
