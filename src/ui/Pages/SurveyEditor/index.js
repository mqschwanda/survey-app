import React, { Component } from 'react';

import 'surveyjs-editor/surveyeditor.css';
import {
  SurveyJSEditor,
  SurveyKnockout,
  configureWidgets,
} from '../../../modules/survey';

configureWidgets(SurveyKnockout);

class SurveyEditor extends Component {
  editor;
  _id = 'SurveyEditor'
  componentDidMount() {
    this.configureSurvey();
  }
  configureSurvey = () => {
    let options = { showEmbededSurveyTab: true };
    this.editor = new SurveyJSEditor.SurveyEditor(this._id, options);
    this.editor.saveSurveyFunc = this.saveSurvey;
  }
  render() {
    return <div id={this._id} />;
  }
  saveSurvey = () => {
    console.log(JSON.stringify(this.editor.text));
  };
}

export default SurveyEditor;
