import React, { Component } from 'react';
import route from './route'
import Header from './components/Header'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      {route}

      </div>
    );
  }
}

export default App;
