import React from 'react';
import { connect } from "react-redux";
import { cancelReservationFetch } from "../actions/reservations";
import { withRouter } from 'react-router'


class ReservationCard extends React.Component {


  handleClick = () => {
    this.props.cancelReservationFetch(this.props.reservation.id)

  }

  // cancelReservation = (e) => {
  //
  // }
  //
  render() {

    return(
      <li>
        <h3>Guest Name: {this.props.reservation.guest_name}</h3>
        {/* <button onClick={this.handleClick}>Cancel</button> */}
        <button onClick={this.handleClick}> cancel </button>
      </li>
    )}
  }



export default withRouter(connect(null, { cancelReservationFetch })(ReservationCard));
