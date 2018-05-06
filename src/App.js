import React, { Component } from 'react';
import 'bootstrap';
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
