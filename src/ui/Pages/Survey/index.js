import $ from 'jquery';
import React, { Component } from 'react';

import 'survey-react/survey.css';

import promiseContainer from '../../../modules/promise-container';
import { Survey, configureWidgets } from '../../../modules/survey';
import { Surveys, Results } from '../../../modules/firestore';

import('icheck');
configureWidgets(Survey);
window['$'] = window['jQuery'] = $;
Survey.Survey.cssType = 'bootstrap';

class App extends Component {
  onComplete = (result) => {
    const { data } = result;
    const _surveyId = this.props.match.params._id;
    Results
      .add({ _surveyId, data })
      .then((doc) => { console.log({ doc }); })
      .catch((error) => { console.error({ error }); });
  }

  buildModel = () =>
    new Survey.Model(this.props.survey)

  render() {
    return (
      <Survey.Survey
        model={this.buildModel()}
        onComplete={this.onComplete}
        onValueChanged={this.onValueChanged}
      />
    );
  }
}

const surveyContainer = promiseContainer((props) => ({
  survey: Surveys
    .doc(props.match.params._id)
    .get()
    .then(doc => doc.exists ? doc.data() : {}),
}));

export default surveyContainer(App);
