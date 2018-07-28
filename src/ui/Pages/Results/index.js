import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import promiseContainer from '../../../modules/promise-container';
import { getResults } from '../../../modules/firestore/api';

const mapFirebaseData = (props) => ({ results: getResults() });

export default promiseContainer(mapFirebaseData)((props) => (
  <ListGroup>
    {props.results.map(({ _id, data }) => (
      <ListGroupItem key={_id}>
        {JSON.stringify(data)}
      </ListGroupItem>
    ))}
  </ListGroup>
));
