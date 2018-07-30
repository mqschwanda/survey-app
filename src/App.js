import './modules/firestore';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Router, Redux } from './ui/Providers';

export const App = () => (
  <Redux>
    <Router />
  </Redux>
);

export default App;
