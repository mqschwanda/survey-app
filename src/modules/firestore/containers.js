import promiseContainer from '../promise-container';
import { setSurvey, getSurvey, getSurveys, getResults } from './api';

const handleDocProps = (doc, props) =>
  typeof doc === 'function' ? doc(props) : doc;

const mapSurveyData = (doc) =>
  (props) => ({ survey: getSurvey(handleDocProps(doc, props)) });
export const surveyContainer = (doc) => promiseContainer(mapSurveyData(doc));

const mapSurveysData = (doc) =>
  (props) => ({ surveys: getSurveys(handleDocProps(doc, props)) });
export const surveysContainer = (doc) => promiseContainer(mapSurveysData(doc));

const mapResultsData = (doc) =>
  (props) => ({ results: getResults(handleDocProps(doc, props)) });
export const resultsContainer = (doc) => promiseContainer(mapResultsData(doc));
