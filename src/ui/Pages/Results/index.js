import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import promiseContainer from '../../../modules/promise-container';
import { Results, mapDocs } from '../../../modules/firestore';

// import { Main } from '../../Layouts';

class ResultsComponent extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.results.map(({ _id, ...results }) => (
          <ListGroupItem key={_id}>
            {JSON.stringify(results.data)}
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

const resultsContainer = promiseContainer((props) => ({
  results: Results.get().then(mapDocs),
}));

export default resultsContainer(ResultsComponent);
