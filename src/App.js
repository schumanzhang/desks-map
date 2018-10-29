import React, { Component } from 'react';
<<<<<<< HEAD
import './App.css';
import Map from './components/map'

class App extends Component {

  render() {
    return (
      <div>
        <Map/>
=======
import LeftArea from './components/left-area'
import RightArea from './components/right-area'
import Steps from './components/steps'
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state= {space: null}
  }

  componentDidMount(){
    const self = this
    fetch("http://localhost:3000/space")
    .then(function(response) {
      return response.json();
    }).then(function(spaceJson) {
      self.setState({space: spaceJson})
    });
  }

  render() {
    const {space} = this.state
    if(!space) return null
    return (
      <div>
        <svg className="map">
          <rect className="space"/>
          <rect className="cafe" onClick={e=>{console.log("cafe")}}/>
          <Steps/>
          <LeftArea data={space.areas[0]}/>
          <RightArea data={space.areas[1]}/>
        </svg>
>>>>>>> first commit
      </div>
    )
  }
}

export default App;
