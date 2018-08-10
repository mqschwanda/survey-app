import './modules/firestore';
import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import { Router, Redux } from './ui/Providers';

export const App = () => (
  <Redux>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Redux>
);

export default App;
