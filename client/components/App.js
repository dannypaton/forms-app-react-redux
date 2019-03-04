import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// take all actions
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
  return {
    formOneSubmitted: state.formOneSubmitted,
    formTwoSubmitted: state.formTwoSubmitted
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// takes our functions that takes state and actions and surface them
const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
