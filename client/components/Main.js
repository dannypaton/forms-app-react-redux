import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div className="formMain">
        <h1>
          <Link to="/">React / Redux Forms</Link>
        </h1>
        {/* take any props that are coming down parent components and pass them along to child components */}
        {React.cloneElement({ ...this.props }.children, { ...this.props })}
      </div>
    )
  }
});

export default Main;
