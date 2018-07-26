import $ from 'jquery';
import React, { Component } from 'react';
import logo from '../../../logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';

import survey from '../../../survey';

import 'survey-react/survey.css';
import {
  Survey,
  configureWidgets,
} from '../../../modules/survey';

configureWidgets(Survey);

class App extends Component {
  json = survey;

  componentWillMount() {
    import('icheck');
    window['$'] = window['jQuery'] = $;
  }

  onValueChanged(result) {
    console.log('value changed:', result);
  }

  onComplete(result) {
    console.log('Complete:', result);
  }

  render() {
    Survey.Survey.cssType = 'bootstrap';
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React with SurveyJS</h2>
        </div>
        <div className='surveyjs'>
          <Survey.Survey
            model={new Survey.Model(this.json)}
            onComplete={this.onComplete}
            onValueChanged={this.onValueChanged}
          />
        </div>
      </div>
    );
  }
}

export default App;
