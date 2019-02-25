import './styles.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
} from 'reactstrap';
import routes from '../../common/js/routes';
import Header from '../../components/Header/HeaderComponent';
import logo from '../../static/logo.svg';

const LandingScreen = () => (
  <div className="landing-screen">
    <Header />
    <div className="center-text margin-top-small">
      <p>This is an example electron application.</p>
      <p>Click the button below to count to 10!</p>
      <img src={logo} alt="logo" className="logo" />
    </div>
    <div className="center-text margin-top-small">
      <Link to={routes.COUNTER}><Button>Lets count together.</Button></Link>
    </div>
  </div>
);

export default LandingScreen;
