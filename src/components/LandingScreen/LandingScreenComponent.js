import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../global/Header/HeaderComponent'

import logo from '../../static/logo.svg';
import './styles.scss';
import {
  Button
} from 'reactstrap';

const {app} = window.require('electron').remote;

class LandingScreen extends Component {
  render() {
    return (
      <div className='landing-screen'>
        <Header />
        <div className='center-text margin-top-small'>
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className='center-text margin-top-small'>
          <Link to='/counter'><Button>Lets count together.</Button></Link>
        </div>
      </div>
    );
  }
}

export default LandingScreen;
