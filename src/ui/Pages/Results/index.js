import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { resultsContainer } from '../../../modules/firestore/containers';
import { Main } from '../../Layouts';

const getSurveyFromRouter = props => props.match.params._id;
export default resultsContainer(getSurveyFromRouter)(({ results }) => (
  <Main>
    <ListGroup>
      {results.map(({ _id, data }) => (
        <ListGroupItem key={_id}>
          {JSON.stringify(data)}
        </ListGroupItem>
      ))}
    </ListGroup>
  </Main>
));
