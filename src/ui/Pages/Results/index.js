import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { resultsContainer } from '../../../modules/firestore/containers';
import { Main } from '../../Layouts';
import { db } from '../../../modules/firestore';
import { firestoreContainer } from '../../../modules/firestore/containers';

const getResults = (props) =>
  db.collection('results').where('_surveyId', '==', props.match.params._id);
const container = firestoreContainer(getResults);

export default container(({ firestore: { data: results } }) => (
  <Main>
    <ListGroup>
      {results && results.map(({ querySnapshot, data: result }) => (
        <ListGroupItem key={querySnapshot.id}>
          {JSON.stringify(result)}
        </ListGroupItem>
      ))}
    </ListGroup>
  </Main>
));
