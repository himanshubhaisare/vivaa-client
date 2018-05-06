import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Physicians from './components/physicians';
import Appointments from './components/appointments';

class App extends Component {

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Physicians />
          <Appointments />
        </p>
      </div>
    );
  }
}

export default App;
