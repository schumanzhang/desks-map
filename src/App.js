import React, { Component } from 'react';
import './App.css';
import Map from './components/map'

class App extends Component {

  render() {
    console.log('app component');
    return (
      <div>
        <Map/>
      </div>
    )
  }
}

export default App;
