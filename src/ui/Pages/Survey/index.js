import $ from 'jquery';
import React, { Component } from 'react';

import 'survey-react/survey.css';

import promiseContainer from '../../../modules/promise-container';
import { Survey, configureWidgets } from '../../../modules/survey';
import { Surveys, Results, getSurvey } from '../../../modules/firestore';

import('icheck');
const SurveyComponent = Survey.Survey;
configureWidgets(Survey);
window['$'] = window['jQuery'] = $;
SurveyComponent.cssType = 'bootstrap';

class App extends Component {
  onComplete = ({ data }) =>
    Results.add({ _surveyId: this.props.match.params._id, data })

  getModel = (props = this.props) =>
    new Survey.Model(props.survey)

  render() {
    return (
      <SurveyComponent
        model={this.getModel()}
        onComplete={this.onComplete}
      />
    );
  }
}

const surveyContainer = promiseContainer((props) => ({
  survey: getSurvey(props.match.params._id),
}));

export default surveyContainer(App);
