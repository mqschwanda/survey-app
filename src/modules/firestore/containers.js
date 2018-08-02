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

const firestoreApiContainer = (...args) =>
  mapToPromiseContainer(mapPromiseData(...args));

export const surveyContainer = firestoreApiContainer('survey', getSurvey);
export const surveysContainer = firestoreApiContainer('surveys', getSurveys);
export const resultsContainer = firestoreApiContainer('results', getResults);
export const signOutUserContainer = firestoreApiContainer('signedOutUser', signOutUser);

export const userContainer = (Component) => class UserContainer extends PureComponent {
  static defaultProps = {
    LoadingComponent: Loading,
  }
  constructor(props) {
    super(props);
    this.reacy = false
    this.state = { user: null };
  }
  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(this.onAuthStateChanged); // Listen to the Firebase Auth state and set the local state.
  }

  componentWillUnmount() {
    this.unsubscribe(); // Make sure we un-register Firebase observers when the component unmounts.
  }

  onAuthStateChanged = (user) => {
    this.ready = true;
    this.setState({ user });
  }

  render() {
    return this.ready
      ? <Component user={this.state.user} {...this.props} />
      : <this.props.LoadingComponent />;
  }
}


const mapDoc = (querySnapshot) => ({ querySnapshot, data: querySnapshot.data() });

const mapDocs = (querySnapshot) => {
  const data = [];

  querySnapshot.forEach((doc) => data.push(mapDoc(doc)));

  return { querySnapshot, data };
};

const mapData = (querySnapshot) =>
  querySnapshot.docs && querySnapshot.docs.length
    ? mapDocs(querySnapshot)
    : mapDoc(querySnapshot);

const injectQuerySnapshot = (handleQuerySnapshot) => (querySnapshot) => ({
  querySnapshot,
  ...handleQuerySnapshot(querySnapshot),
});

const defaultMapQuerySnapshot = injectQuerySnapshot(mapData);

export const firestoreContainer = (doc, mapQuerySnapshot = defaultMapQuerySnapshot) => (Component, LoadingComponent = () => null) =>
  class FirestoreContainer extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {};
      this.unsubscribe = this.getSnapshot(props);
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    getDoc = (props = this.props) =>
      typeof doc === 'function' ? doc(props) : doc

    getSnapshot = (props = this.props) =>
      this.getDoc(props).onSnapshot(this.onSnapshot)

    onSnapshot = (querySnapshot) =>
      this.setState(mapQuerySnapshot(querySnapshot))

    render() {
      return this.state !== {}
        ? <Component firestore={this.state} {...this.props} />
        : <LoadingComponent />;
    }
  }

// export const firestoreRefContainer = (ref, mapDataSnapshot = (DataSnapshot) => ({ DataSnapshot })) => (Component, LoadingComponent = () => null) =>
//   class ListenerContainer extends PureComponent {
//     constructor(props) {
//       super(props);
//       this.ref = this.getRef(props);
//     }
//     componentDidMount() {
//       this.ref.on('value', this.onValue);
//     }
//
//     componentWillUnmount() {
//       this.ref.off();
//     }
//
//     getRef = (props = this.props) =>
//       firebase.database().ref(typeof ref === 'string' ? ref : ref(props))
//
//     onValue = (DataSnapshot) =>
//       this.setState(mapDataSnapshot(DataSnapshot))
//
//     render() {
//       return this.state !== {}
//         ? <Component {...{ ...this.props, ...this.state }} />
//         : <LoadingComponent />;
//     }
//   }
