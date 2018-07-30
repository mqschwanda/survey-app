import firebase from 'firebase';
import 'firebase/firestore'; // Required for side-effects
import firebaseui from 'firebaseui';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { firebase as config } from '../../config/settings';

firebase.initializeApp(config);
// Initialize Cloud Firestore through Firebase
export const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export const mapDoc = doc => doc.exists && { _id: doc.id, ...doc.data() };

export const mapDocs = (results) => results.docs.map(mapDoc);

export const getDoc = (Collection, doc) =>
  Collection.doc(doc).get().then(mapDoc);

export const getDocs = (Collection, get) =>
  Collection.get(get).then(mapDocs);

export const setDoc = (Collection, doc, set) =>
  Collection.doc(doc).set(set);

export const addDoc = (Collection, add) =>
  Collection.add(add);

export const ui = firebaseui
export const FirebaseAuth = StyledFirebaseAuth;

export default firebase;
