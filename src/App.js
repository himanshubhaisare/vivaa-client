import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Physicians from './components/physicians';

class App extends Component {

  render() {
    return (
      <div className="App">
          <Physicians />
      </div>
    );
  }
}

export default App;
