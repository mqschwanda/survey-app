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

/**
 * handle situations in which a function may need to be called with props to get
 * data but at the same time allow a raw data object to be returned directly
 * @param  {[type]} dataOrFunction   [description]
 * @param  {[type]} [params = null]  [description]
 * @return {[type]}                  [description]
 */
export const getDataOrCallFunction = (dataOrFunction, params = null) =>
  typeof dataOrFunction === 'function'
    ? dataOrFunction(params) // call function with props
    : dataOrFunction; // object, array, string... whatever

export const getDisplayName = (containerName, Component) =>
  `${containerName}(${Component.displayName || Component.name || 'Component'})`;

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


// const mapDoc = (querySnapshot) => ({ querySnapshot, data: querySnapshot.data() });

// const mapDocs = (querySnapshot) => {
//   const data = [];
//
//   querySnapshot.forEach((doc) => data.push(mapDoc(doc)));
//
//   return { querySnapshot, data };
// };

// const mapData = (querySnapshot) =>
//   querySnapshot.docs && querySnapshot.docs.length
//     ? mapDocs(querySnapshot)
//     : mapDoc(querySnapshot);

// const injectQuerySnapshot = (handleQuerySnapshot) => (querySnapshot) => ({
//   querySnapshot,
//   ...handleQuerySnapshot(querySnapshot),
// });

// const defaultMapQuerySnapshot = injectQuerySnapshot(mapData);

const containerMapper = (container) => (query, {
  mapSnapshot = (snapshot) => ({ snapshot }),
  once = false,
} = {}) => (
  Component,
  LoadingComponent = () => <div>loading...</div>,
) => container({ Component, LoadingComponent, query, mapSnapshot, once });

/**
* This container take a firebase document query and injects the snapshot
* and data into the component it wraps. If the snapshot data needs to be
* manipulated in any way a custom mapper function can be passed as the second
* param.
* @param  {[type]} query   [description]
* @param  {Object} options [description]
* @return {Class}          [description]
*/
export const snapshotContainer = containerMapper(({ Component, LoadingComponent, query, mapSnapshot, once }) =>
  class SnapshotContainer extends PureComponent {
    displayName = getDisplayName('snapshotContainer', Component);

    constructor(props) {
      super(props);
      this.state = { snapshot: false };
    }

    componentDidMount() {
      this.subscribe(); // attach the listener
    }

    componentWillUnmount() {
      this.unsubscribe(); // remove the listener
    }
    /**
     * build and initialize the listener
     */
    subscribe = () => {
      this.unsubscribe = this.getQuery().onSnapshot(this.onSnapshot);
    }
    /**
     * [getQuery description]
     * @return {[type]} [description]
     */
    getQuery = () => getDataOrCallFunction(query, this.props) // allow query to access props
    /**
     * handle the update of the snapshot by mapping the data to this
     * component's state.
     * @param  {[type]} snapshot [description]
     * @return {[type]}          [description]
     */
    onSnapshot = (snapshot) =>
      this.setState({ snapshot: mapSnapshot(snapshot) })
    /**
     * build the props that will be injected into the sub-component
     * @return {[Object]} prop object
     */
    marshalProps = () => ({ ...this.props, ...this.state.snapshot })

    render() {
      return this.state.snapshot
        ? <Component {...this.marshalProps()} />
        : <LoadingComponent {...this.marshalProps()} />;
    }
  });

export const referenceContainer = containerMapper(({ Component, LoadingComponent, query: reference, mapSnapshot, once }) =>
  class ReferenceContainer extends PureComponent {
    displayName = getDisplayName('referenceContainer', Component);

    constructor(props) {
      super(props);
      this.state = { snapshot: false };
    }

    componentDidMount() {
      this.subscribe(); // attach the listener
    }

    componentWillUnmount() {
      this.unsubscribe(); // remove the listener
    }
    /**
     * build and initialize the listener
     */
    subscribe = () => {
      this.reference = this.getReference();

      const functionKey = `on${once ? 'ce' : ''}`;
      this.reference[functionKey]('value', this.onValue);
    }
    unsubscribe = () => {
      this.reference && this.reference.off();
    }
    /**
     * [getQuery description]
     * @return {[type]} [description]
     */
    getReference = (props = this.props) =>
      getDataOrCallFunction(reference, props) // allow reference to access props
    /**
     * handle the update of the snapshot by mapping the data to this
     * component's state.
     * @param  {[type]} snapshot [description]
     * @return {[type]}          [description]
     */
    onValue = (snapshot) =>
      this.setState({ snapshot: mapSnapshot(snapshot) })
    /**
     * build the props that will be injected into the sub-component
     * @return {[Object]} prop object
     */
    marshalProps = () => ({ ...this.props, ...this.state.snapshot })

    render() {
      return this.state.snapshot
        ? <Component {...this.marshalProps()} />
        : <LoadingComponent {...this.marshalProps()} />;
    }
  });
