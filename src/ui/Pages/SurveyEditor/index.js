import React from 'react';

import { SurveyEditor } from '../../Components';
import promiseContainer from '../../../modules/promise-container';
import { setSurvey, getSurvey } from '../../../modules/firestore/api';

const mapFirebaseData = (props) => ({
  survey: getSurvey(props.match.params._id)
});

export default promiseContainer(mapFirebaseData)(({ survey }) => (
  <SurveyEditor
    _id={survey._id}
    saveSurveyFunc={(editor) => setSurvey(survey._id, JSON.parse(editor.text))}
    survey={survey}
  />
));
