import React from 'react';
import { connect } from "react-redux";
import { cancelWaitlistFetch } from "../actions/waitlist";
import { withRouter } from 'react-router'


class WaitlistCard extends React.Component {

  handleClick = () => {
    this.props.cancelWaitlistFetch(this.props.waitlist.id)
  }
  render() {
    return(
      <li>
        <h3>Guest Name: {this.props.waitlist.guest_name}</h3>
        <button onClick={this.handleClick}> cancel </button>
      </li>
    )
  }
}

export default withRouter(connect(null, {cancelWaitlistFetch })(WaitlistCard));
