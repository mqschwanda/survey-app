import firebase from 'firebase';
import 'firebase/firestore'; // Required for side-effects

import { firebase as config } from '../../config/settings';

firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
export const db = firebase.firestore();

export const Users = db.collection('users');
export const Surveys = db.collection('surveys');
export const Results = db.collection('results');

export const mapDoc = doc => doc.exists
  ? { _id: doc.id, ...doc.data() }
  : {};

export const mapDocs = (results) => results.docs.map(mapDoc)

export default firebase;