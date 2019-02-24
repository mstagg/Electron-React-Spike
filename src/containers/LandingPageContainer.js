import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LandingScreen from '../components/LandingScreen';
import * as CounterActions from '../store/actions/counter';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingScreen);