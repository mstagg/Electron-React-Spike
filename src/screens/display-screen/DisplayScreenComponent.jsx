import './styles.scss';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/Header/HeaderComponent';

const DisplayScreen = (props) => {
  const { amount } = props;
  return(
    <div className="landing-screen">
      <Header />
      <div className="center-text margin-top-small">
        <p>{amount}</p>
      </div>
    </div>
  );
};

DisplayScreen.propTypes = {
  amount: PropTypes.number.isRequired,
};

export default connect(
  // mapStateToProps
  state => ({
    amount: state.counter.counter,
  }),
)(DisplayScreen);
