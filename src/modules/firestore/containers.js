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
  static defaultProps = {
    LoadingComponent: Loading,
  }
  constructor(props) {
    super(props);
    this.state = { user: null, ready: false };
  }
  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(this.onAuthStateChanged); // Listen to the Firebase Auth state and set the local state.
  }

  componentWillUnmount() {
    this.unsubscribe(); // Make sure we un-register Firebase observers when the component unmounts.
  }

  onAuthStateChanged = (user) => {
    this.setState({ user, ready: true });
  }

  render() {
    return this.state.ready
      ? <Component user={this.state.user} {...this.props} />
      : <this.props.LoadingComponent />;
  }
}
