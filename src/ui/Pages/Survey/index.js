import React from 'react';

import { Survey } from '../../Components';
import { addResult, getCurrentUser } from '../../../modules/firestore/api';
import { db } from '../../../modules/firestore';
import { snapshotContainer } from '../../../modules/firestore/containers';
// import { snapshotContainer } from '@mqschwanda/firebase-containers';

const getSurvey = (props) =>
  db.collection('surveys').doc(props.match.params._id);
const container = snapshotContainer(getSurvey);

export default container((props) => (
  <Survey
    survey={props.snapshot.data()}
    onComplete={({ data }) => addResult({
      _userId: getCurrentUser().uid,
      _surveyId: props.snapshot.id,
      data,
    })}
  />
));
