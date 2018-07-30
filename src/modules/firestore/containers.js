import React, { PureComponent } from 'react';
import firebase from './';
import promiseContainer from '../promise-container';
import {
  getUser,
  getSurvey,
  getSurveys,
  getResults,
  signOutUser,
} from './api';

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
    this.state = { user: null };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(this.handleAuthStateChanged);
  }

  handleAuthStateChanged = (user) => this.setState({ user })

  render() {
    return <Component user={this.state.user} />;
  }
}
