import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';

const {app} = window.require('electron').remote;

class LandingScreen extends Component {
  render() {
      console.log(this.props);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello, World!</h2>
        </div>
        <p className="App-intro">
          <b> Release 0.2.7 </b>
          Version: {app.getVersion()}
        </p>
        <button onClick={() => this.props.increment()}>CLICK ME</button>
        <h1>{this.props.counter}</h1>
      </div>
    );
  }
}

export default LandingScreen;
