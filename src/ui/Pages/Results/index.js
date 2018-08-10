import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
// import { snapshotContainer } from '@mqschwanda/firebase-containers';

import { snapshotContainer } from '../../../modules/firestore/containers';
import { Main } from '../../Layouts';
import { db } from '../../../modules/firestore';

const getResults = (props) =>
  db.collection('results').where('_surveyId', '==', props.match.params._id);
const container = snapshotContainer(getResults);

export default container((props) => (
  <Main>
    <ListGroup>
      {props.snapshot.docs.map((docSnapshot) => (
        <ListGroupItem key={docSnapshot.id}>
          {JSON.stringify(docSnapshot.data())}
        </ListGroupItem>
      ))}
    </ListGroup>
  </Main>
));
