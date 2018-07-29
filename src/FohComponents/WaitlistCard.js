import React from 'react';
import { connect } from "react-redux";
// import { cancelReservationFetch } from "../actions/reservations";
import { withRouter } from 'react-router'


class WaitlistCard extends React.Component {
  render() {
    return(
      <li>
        <h3>Guest Name: {this.props.waitlist.guest_name}</h3>
      </li>
    )
  }
}

export default WaitlistCard;
