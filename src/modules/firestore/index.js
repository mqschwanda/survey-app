import firebase from 'firebase';
import 'firebase/firestore'; // Required for side-effects

import { firebase as config } from '../../config/settings';

firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
export const db = firebase.firestore();

export const mapDoc = doc => doc.exists
  ? { _id: doc.id, ...doc.data() }
  : {};

export const mapDocs = (results) => results.docs.map(mapDoc);

export const getDoc = (Collection, query) =>
  Collection.doc(query).get().then(mapDoc);
export const setDoc = (Collection, query, set) =>
  Collection.doc(query).set(set);

export const Users = db.collection('users');
export const getUser = (query) => getDoc(Users, query);
export const setUser = (query, set) => setDoc(Users, query, set);

export const Surveys = db.collection('surveys');
export const getSurvey = (query) => getDoc(Surveys, query);
export const setSurvey = (query, set) => setDoc(Surveys, query, set);

export const Results = db.collection('results');
export const getResults = (query) => getDoc(Results, query);
export const setResults = (query, set) => setDoc(Results, query, set);

export default firebase;
