import {
  db,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
} from './';

export const Users = db.collection('users');
export const getUser = (doc) => getDoc(Users, doc);
export const setUser = (doc, set) => setDoc(Users, doc, set);
export const addUser = (doc, add) => addDoc(Users, doc, add);

export const Surveys = db.collection('surveys');
export const getSurvey = (doc) => getDoc(Surveys, doc);
export const getSurveys = (doc) => getDocs(Surveys, doc);
export const setSurvey = (doc, set) => setDoc(Surveys, doc, set);
export const addSurvey = (doc, add) => addDoc(Surveys, doc, add);

export const Results = db.collection('results');
export const getResults = (doc) => getDoc(Results, doc);
export const setResults = (doc, set) => setDoc(Results, doc, set);
export const addResult = (doc, add) => addDoc(Results, doc, add);
