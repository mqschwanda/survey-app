import firebase, {
  db,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
} from './';

export const getCurrentUser = () => firebase.auth().currentUser;
export const getUser = () => new Promise((resolve, reject) => {
  try {
    resolve(firebase.auth().currentUser);
  } catch (error) {
    reject(error);
  }
});

export const setUser = (set) => getCurrentUser().updateProfile(set);
export const signInUser = (user) => {
  const { email, password } = user;
  if (email && password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
};
export const signInAnonymously = () => firebase.auth().signInAnonymously();
export const signOutUser = () => firebase.auth().signOut();

export const Surveys = db.collection('surveys');
export const getSurvey = (doc) => getDoc(Surveys, doc);
export const getSurveys = (doc) => getDocs(Surveys, doc);
export const addSurvey = (add) => addDoc(Surveys, add);
export const setSurvey = (doc, set) => setDoc(Surveys, doc, set);

export const Results = db.collection('results');
export const getResults = (doc) => getDoc(Results, doc);
export const addResult = (add) => addDoc(Results, add);
export const setResults = (doc, set) => setDoc(Results, doc, set);
