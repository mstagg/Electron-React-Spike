import './styles.scss';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
} from 'reactstrap';
import routes from '../../common/js/routes';
import * as CounterActions from '../../store/actions/counter';
import Header from '../../components/Header/HeaderComponent';

const electron = window.require('electron');
const { ipcRenderer } = electron;

/* eslint-disable class-methods-use-this */
class CounterScreen extends React.Component {
  componentDidMount() {
    ipcRenderer.on('amount-requested', () => {
      const { amount } = this.props;
      ipcRenderer.send('update-counter', amount);
    });
  }

  openDisplayWindow() {
    ipcRenderer.sendSync('display-window', 'open');
  }

  render() {
    const { amount, error, increment } = this.props;
    return (
      <div className="counter-screen">
        <Header />
        <Container className="margin-top-small">
          <p className="center-text">Use the buttons below to count to 10.</p>
          <Row>
            <Col sm={6} className="center-text center-vertical">
              <ButtonGroup>
                <Button color="primary" onClick={() => increment(1)}>Add 1</Button>
                <Button color="primary" onClick={() => increment(5)}>Add 5</Button>
                <Button color="danger" onClick={() => increment(-1)}>Subtract 1</Button>
              </ButtonGroup>
            </Col>
            <Col sm={6} className="center-text center-vertical">
              <h1>{amount}</h1>
            </Col>
          </Row>
          {
            (error)
              ? (
                <div className="center-text error">
                  {error}
                </div>
              )
              : null
          }
          <div className="center-text margin-top-medium">
            <Button onClick={() => this.openDisplayWindow()}>Display Window</Button>
          </div>
          <div className="center-text margin-top-medium">
            <Link to={routes.HOME}><Button>Go Back</Button></Link>
          </div>
        </Container>
      </div>
    );
  }
}

CounterScreen.propTypes = {
  amount: PropTypes.number.isRequired,
  error: PropTypes.string.isRequired,
  increment: PropTypes.func.isRequired,
};

export default connect(
  // mapStateToProps
  state => ({
    amount: state.counter.counter,
    error: state.counter.error,
  }),
  // mapDispatchToProps
  dispatch => bindActionCreators(CounterActions, dispatch),
)(CounterScreen);
