import React from 'react';
import { Main } from '../../Layouts';
import { ErrorComponent } from '../../Components';
import get from '../../../modules/get';

const getPathname = (props) => get(['location', 'pathname'])(props);

export const NotFound = (props) => (
  <Main>
    <ErrorComponent
      code={404}
      header={'Page Not Found'}
      reason={`We are sorry, but \`${getPathname(props)}\` could not be found.`}
    />
  </Main>
);

export default NotFound;
