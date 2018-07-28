import React from 'react';

import { SurveyEditor } from '../../Components';
import { setSurvey } from '../../../modules/firestore/api';
import { surveyContainer } from '../../../modules/firestore/containers';

const getSurveyFromRouter = props => props.match.params._id;
export default surveyContainer(getSurveyFromRouter)(({ survey }) =>
  <SurveyEditor
    _id={survey._id}
    saveSurveyFunc={(editor) => setSurvey(survey._id, JSON.parse(editor.text))}
    survey={survey}
  />
);
