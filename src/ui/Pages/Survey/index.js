import React from 'react';

import { Survey } from '../../Components';
import promiseContainer from '../../../modules/promise-container';
import { addResult, getSurvey } from '../../../modules/firestore/api';

const mapFirebaseData = (props) => ({
  survey: getSurvey(props.match.params._id),
});

export default promiseContainer(mapFirebaseData)(({ survey }) => (
  <Survey
    survey={survey}
    onComplete={({ data }) => addResult({ _surveyId: survey._id, data })}
  />
));
