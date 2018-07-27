import React, { Component } from 'react';

import 'surveyjs-editor/surveyeditor.css';

import promiseContainer from '../../../modules/promise-container';
import {
  SurveyJSEditor,
  SurveyKnockout,
  configureWidgets,
} from '../../../modules/survey';

import { Surveys, mapDoc } from '../../../modules/firestore';

configureWidgets(SurveyKnockout);


const getSurveyId = (props) => props.match.params._id;

class SurveyEditor extends Component {
  editor;

  static defaultProps = {
    options: { showEmbededSurveyTab: true },
  }

  componentDidMount() {
    this.configureSurvey();
  }

  configureSurvey = () => {
    const { _id } = this.props.match.params;
    const { options } = this.props;
    this.editor = new SurveyJSEditor.SurveyEditor(_id, options);
    this.editor.saveSurveyFunc = this.saveSurvey;
    this.editor.text = this.surveyExists()
      ? JSON.stringify(this.props.survey)
      : '';
  }

  saveSurvey = () => {
    const survey = JSON.parse(this.editor.text);
    const { _id } = this.props.match.params;

    if (this.surveyExists()) Surveys.doc(_id).set(survey);
    else Surveys.add(survey);
  };

  surveyExists = (props = this.props) =>
    typeof this.getSurveyId(props) === 'string' && this.getSurveyId(props).length > 0

  getSurveyId = (props = this.props) => getSurveyId(props)

  render() {
    return <div id={this.getSurveyId()} />;
  }
}

const surveyContainer = promiseContainer((props) => ({
  survey: Surveys.doc(getSurveyId(props)).get().then(mapDoc),
}));

export default surveyContainer(SurveyEditor);
