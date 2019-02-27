import React from 'react';
import { Link } from 'react-router';

const FormWrapper = React.createClass({
  render() {
    return (
      <figure className="formWrapper">
        <h1>Select a Form:</h1>
        <Link to="/form-one">Form One</Link>
        <Link to="/form-two">Form Two</Link>
      </figure>
    )
  }
});

export default FormWrapper;