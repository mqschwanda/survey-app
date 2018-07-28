import './modules/firestore';
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Router, Redux } from './ui/Providers';

class App extends Component {
  render() {
    return (
      <Redux>
        <Router />
      </Redux>
    );
  }
}

export default App;
