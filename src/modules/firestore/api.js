import firebase, {
  db,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
} from './';

export const Users = db.collection('users');
export const getUser = (doc) => getDoc(Users, doc);
export const getCurrentUser = () => firebase.auth().currentUser;
export const addUser = (add) => addDoc(Users, add);
export const setUser = (doc, set) => setDoc(Users, doc, set);

export const Surveys = db.collection('surveys');
export const getSurvey = (doc) => getDoc(Surveys, doc);
export const getSurveys = (doc) => getDocs(Surveys, doc);
export const addSurvey = (add) => addDoc(Surveys, add);
export const setSurvey = (doc, set) => setDoc(Surveys, doc, set);

export const Results = db.collection('results');
export const getResults = (doc) => getDoc(Results, doc);
export const addResult = (add) => addDoc(Results, add);
export const setResults = (doc, set) => setDoc(Results, doc, set);
