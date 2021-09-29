import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
class GuestCart extends React.Component {
  render() {
    if (!window.localStorage.length) {
      return (
        <div>
          <h1>You have not found any new friends yet!</h1>
          <Link to="/products">
            Go back and find some new friends! (they can't wait!)
          </Link>
        </div>
      );
    } else {
      return (
        <div>
        </div>
      )
    }
  }
}

export default GuestCart
