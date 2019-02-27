import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import formOneSubmitted from './formOneSubmitted';
import formTwoSubmitted from './formTwoSubmitted';

const rootReducer = combineReducers({ formOneSubmitted, formTwoSubmitted, routing: routerReducer });

export default rootReducer;