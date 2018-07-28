import React, { Component } from 'react';

import 'surveyjs-editor/surveyeditor.css';

import promiseContainer from '../../../modules/promise-container';
import {
  SurveyJSEditor,
  SurveyKnockout,
  configureWidgets,
} from '../../../modules/survey';

import { setSurvey, getSurvey } from '../../../modules/firestore';

configureWidgets(SurveyKnockout);


const getSurveyId = (props) => props.match.params._id;

class SurveyEditor extends Component {
  editor;

  static defaultProps = {
    options: { showEmbededSurveyTab: true },
  }
  constructor(props) {
    super(props);
    this.configureSurvey(props);
  }

  configureSurvey = (props = this.props) => {
    this.editor = new SurveyJSEditor.SurveyEditor(props.match.params._id, props.options);
    this.editor.text = JSON.stringify(props.survey);
    this.editor.saveSurveyFunc = this.saveSurveyFunc;
  }

  saveSurveyFunc = () =>
    setSurvey(this.props.match.params._id, JSON.parse(this.editor.text))

  getSurveyId = (props = this.props) => getSurveyId(props)

  render() {
    return <div id={this.getSurveyId()} />;
  }
}

const surveyContainer = promiseContainer((props) => ({
  survey: getSurvey(getSurveyId(props)),
}));

export default surveyContainer(SurveyEditor);
