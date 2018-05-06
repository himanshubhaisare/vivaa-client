import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Physicians from './components/physicians';
import Appointments from './components/appointments';

class App extends Component {

  render() {
    return (
      <div className="App">
          <Physicians />
          <Appointments />
      </div>
    );
  }
}

export default App;
