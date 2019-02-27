import React from 'react';
import { Link } from 'react-router';

const formTwo = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    const firstName = this.refs.firstName.value;
    const lastName = this.refs.lastName.value;
    this.props.formTwoAdd(firstName, lastName);
    this.refs.formTwo.reset();
  },
  render() {
    return (
      <div className="formTwo">
        <h1>Form Two</h1>
        <form className="form" ref="formTwo" onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" ref="firstName" placeholder="First Name" required />
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" ref="lastName" placeholder="Last Name" required />
          <input type="submit" className="button" />
        </form>
        <h4>Form Two Submitted:</h4>
        {this.props.formTwoSubmitted.map((each, i) => {
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

export default formTwo;
