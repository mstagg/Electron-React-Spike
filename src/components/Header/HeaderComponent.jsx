import './styles.scss';
import React from 'react';

const { app } = window.require('electron').remote;

const Header = () => (
  <div className="header-banner center-text">
    <h1 className="header">{`Welcome to Electron: v${app.getVersion()}`}</h1>
  </div>
);

export default Header;
