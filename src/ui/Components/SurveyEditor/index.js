import React, { Component } from 'react';

import 'surveyjs-editor/surveyeditor.css';

import promiseContainer from '../../../modules/promise-container';
import {
  SurveyJSEditor,
  SurveyKnockout,
  configureWidgets,
} from '../../../modules/survey';

configureWidgets(SurveyKnockout);

export class SurveyEditor extends Component {
  editor;

  static defaultProps = {
    _id: 'SurveyEditor',
    options: { showEmbededSurveyTab: true },
  }
  componentDidMount() {
    this.configureSurvey();
  }

  configureSurvey = (props = this.props) => {
    this.editor = new SurveyJSEditor.SurveyEditor(props._id, props.options);
    this.editor.text = JSON.stringify(props.survey);
    this.editor.saveSurveyFunc = () => props.saveSurveyFunc(this.editor);
  }

  render() {
    return <div id={this.props._id} />;
  }
}

export default SurveyEditor;
