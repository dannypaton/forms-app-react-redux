import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import reducers
import formOneSubmitted from './formOneSubmitted';
import formTwoSubmitted from './formTwoSubmitted';

// reducer uses added action to update data
// create reducer for every single piece of state (formOneSubmitted, formTwoSubmitted)
const rootReducer = combineReducers({ formOneSubmitted, formTwoSubmitted, routing: routerReducer });

export default rootReducer;