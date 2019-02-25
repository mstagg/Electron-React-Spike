import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CounterScreen from '../components/CounterScreen/CounterScreenComponent';
import * as CounterActions from '../store/actions/counter';

function mapStateToProps(state) {
  return {
    amount: state.counter.counter,
    error: state.counter.error
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterScreen);