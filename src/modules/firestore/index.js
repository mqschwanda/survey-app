import firebase from 'firebase';
import 'firebase/firestore'; // Required for side-effects

import { firebase as config } from '../../config/settings';

firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
export const db = firebase.firestore();

export const Users = db.collection('users');

Users.get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, ' => ', doc.data());
  });
})

export default firebase;
