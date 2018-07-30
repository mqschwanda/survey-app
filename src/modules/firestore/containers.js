import React, { PureComponent } from 'react';
import firebase from './';
import promiseContainer from '../promise-container';
import {
  // getUser,
  getSurvey,
  getSurveys,
  getResults,
  signOutUser,
} from './api';

import { Loading } from '../../ui/Components';

const mapPromiseData = (key, promise) => (data) => (props) => ({
  [key]: promise(typeof data === 'function' ? data(props) : data),
});

const mapToPromiseContainer = (mapper = (d) => d) => (
  (doc) => promiseContainer(mapper(doc))
);

const apiContainer = (...args) =>
  mapToPromiseContainer(mapPromiseData(...args));

export const surveyContainer = apiContainer('survey', getSurvey);
export const surveysContainer = apiContainer('surveys', getSurveys);
export const resultsContainer = apiContainer('results', getResults);
export const signOutUserContainer = apiContainer('signedOutUser', signOutUser);

export const userContainer = (Component) => class UserContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { user: null, ready: false };
    this.unsubscribe = firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onAuthStateChanged = (user) => {
    this.setState({ user, ready: true });
  }

  render() {
    return this.state.ready
      ? <Component user={this.state.user} {...this.props} />
      : <Loading />;
  }
}
