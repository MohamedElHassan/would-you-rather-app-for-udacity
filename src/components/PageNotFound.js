import { Link } from "react-router-dom";
import React, { Component } from "react";
import { Icon } from "semantic-ui-react";

class PageNotFound extends Component {
  render() {
    return (
      <div>
      Return to Dashboard <Link to='/dashboard'><Icon name='log out' size='big' link /></Link>
        <h1>Page Not Found!</h1>
        <p>Sorry the page could not be found.</p>
      </div>
    );
  }
}

export default PageNotFound;
