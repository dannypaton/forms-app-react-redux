import { createStore, compose } from 'redux';
// hook up react router with redux
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// import default data
import formOneSubmitted from './data/formOneSubmitted';
import formTwoSubmitted from './data/formTwoSubmitted';

// create an object for the default data
const defaultState = {
  formOneSubmitted,
  formTwoSubmitted
};

// enable connection with redux dev tools in chrome
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f 
);

// create store (object to hold our information)
const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

// enable hot reload for the reducers
if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
