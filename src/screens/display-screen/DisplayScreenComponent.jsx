import './styles.scss';
import React from 'react';
import Header from '../../components/Header/HeaderComponent';

const electron = window.require('electron');
const { ipcRenderer } = electron;

class DisplayScreen extends React.Component {
  constructor(props) {
    super(props);
    ipcRenderer.send('fetch-counter', 'fetch');
    this.state = {
      amount: 0,
    };
  }

  componentDidMount() {
    ipcRenderer.on('update-display-count', (event, val) => {
      this.setState({ amount: val });
    });
  }

  render() {
    const { amount } = this.state;
    return (
      <div className="landing-screen">
        <Header />
        <div className="center-text margin-top-small">
          <h1>{amount}</h1>
        </div>
      </div>
    );
  }
}

export default DisplayScreen;
