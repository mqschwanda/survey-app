import $ from 'jquery';
import React from 'react';
import 'survey-react/survey.css';
import { Survey, configureWidgets } from '../../../modules/survey';

import('icheck');
configureWidgets(Survey);
window['$'] = window['jQuery'] = $;
Survey.Survey.cssType = 'bootstrap';

export const SurveyComponent = (props) => (
  <Survey.Survey
    model={new Survey.Model(props.survey)}
    onComplete={props.onComplete}
  />
);

export default SurveyComponent;
