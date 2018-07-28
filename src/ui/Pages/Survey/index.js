import React from 'react';

import { Survey } from '../../Components';
import { addResult, getCurrentUser } from '../../../modules/firestore/api';
import { surveyContainer } from '../../../modules/firestore/containers';

const getSurveyFromRouter = props => props.match.params._id;
export default surveyContainer(getSurveyFromRouter)(({ survey }) => (
  <Survey
    survey={survey}
    onComplete={({ data }) =>
      addResult({ _userId: getCurrentUser().uid, _surveyId: survey._id, data })}
  />
));
