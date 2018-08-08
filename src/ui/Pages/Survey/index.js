import React from 'react';

import { Survey } from '../../Components';
import { addResult, getCurrentUser } from '../../../modules/firestore/api';
import { db } from '../../../modules/firestore';
import { querySnapshotContainer } from '@mqschwanda/firebase-containers';

const getSurvey = (props) =>
  db.collection('surveys').doc(props.match.params._id);

const container = querySnapshotContainer(getSurvey);
export default container(({ firestore: { data: survey, querySnapshot } }) => (
  <Survey
    survey={survey}
    onComplete={({ data }) => addResult({
      _userId: getCurrentUser().uid,
      _surveyId: querySnapshot.id,
      data,
    })}
  />
));
