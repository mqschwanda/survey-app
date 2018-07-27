import React, { Component } from 'react';

import 'surveyjs-editor/surveyeditor.css';
import {
  SurveyJSEditor,
  SurveyKnockout,
  configureWidgets,
} from '../../../modules/survey';

import { Surveys } from '../../../modules/firestore';

configureWidgets(SurveyKnockout);

class SurveyEditor extends Component {
  editor;

  static defaultProps = {
    _id: 'SurveyEditor',
    options: { showEmbededSurveyTab: true },
  }

  componentDidMount() {
    this.configureSurvey();
  }
  configureSurvey = () => {
    const { _id, options } = this.props;
    this.editor = new SurveyJSEditor.SurveyEditor(_id, options);
    this.editor.saveSurveyFunc = this.saveSurvey;
  }
  render() {
    return <div id={this.props._id} />;
  }
  saveSurvey = () => {
    const survey = JSON.parse(this.editor.text);
    const { _id } = this.props;

    if (_id === 'SurveyEditor') Surveys.add(survey);
    else Surveys.doc(_id).set(survey)
  };
}

export default SurveyEditor;
