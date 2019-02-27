import React from 'react';
import { Link } from 'react-router';

const FormOne = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    const firstName = this.refs.firstName.value;
    const lastName = this.refs.lastName.value;
    this.props.formOneAdd(firstName, lastName);
    this.refs.formOne.reset();
  },
  render() {
    return (
      <div className="formOne">
        <h1>Form One</h1> 
        <form className="form" ref="formOne" onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" ref="firstName" placeholder="First Name" required />
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" ref="lastName" placeholder="Last Name" required />
          <input type="submit" className="button" />
        </form>
        <h4>Form One Submitted:</h4>
        {this.props.formOneSubmitted.map((each, i) => {
          return (
            <div key={i}>
              <h2>{each.firstName} {each.lastName}</h2>
            </div> 
          )
        })}
        <Link to="/">Back</Link>
      </div>
    )
  }
});

export default FormOne;
