import React, { Component } from 'react';
import 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Header from './components/header';
import Physicians from './components/physicians';

class App extends Component {

  render() {
    return (
        <div className="container">
            <Header />
            <Physicians />
        </div>
    );
  }
}

export default App;
