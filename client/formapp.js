import React from 'react';
import { render } from 'react-dom';

// import css
import css from './styles/style.styl';

// import components
import App from './components/App';
import FormWrapper from './components/FormWrapper';
import FormOne from './components/FormOne';
import FormTwo from './components/FormTwo';

// import react router deps
import { Router, Route, IndexRoute } from 'react-router';
// binding that allows us to use redux with react
import { Provider } from 'react-redux';
import store, { history } from './store';

// router component
const router = (
  // provider component listens to the store
  // expose store to rest of application
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={FormWrapper}></IndexRoute>
        <Route path="/form-one" component={FormOne}></Route>
        <Route path="/form-two" component={FormTwo}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
