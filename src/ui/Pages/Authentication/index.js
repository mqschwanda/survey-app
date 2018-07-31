import React, { PureComponent } from 'react';
import { FirebaseAuthentication } from '../../../modules/firestore/components';
import get from '../../../modules/get';
import { Main } from '../../Layouts';

const getRouterSignInSuccessUrl = get([
  'location',
  'state',
  'signInSuccessUrl',
]);

const getSignInSuccessUrl = (props) =>
    getRouterSignInSuccessUrl(props) || props.signInSuccessUrl;

export const Authentication = (props) => (
  <Main>
    <FirebaseAuthentication signInSuccessUrl={getSignInSuccessUrl(props)} />
  </Main>
);
export default Authentication;
