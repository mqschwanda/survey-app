import React, { Component } from 'react';
import logo from '../../../logo.svg';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React with SurveyJS</h2>
        </div>
        <div className='home'>
          Home
        </div>
      </div>
    );
  }
}

export default App;
