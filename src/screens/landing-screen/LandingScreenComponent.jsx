import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import {
  Button,
} from 'reactstrap';
import Header from '../../components/Header/HeaderComponent';
import logo from '../../static/logo.svg';

const LandingScreen = () => (
  <div className="landing-screen">
    <Header />
    <div className="center-text margin-top-small">
      <img src={logo} alt="logo" className="logo" />
    </div>
    <div className="center-text margin-top-small">
      <Link to="/counter"><Button>Lets count together.</Button></Link>
    </div>
  </div>
);

export default LandingScreen;
