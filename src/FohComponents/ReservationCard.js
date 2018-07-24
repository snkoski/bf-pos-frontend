import React from 'react';
import { connect } from "react-redux";
import { cancelReservationFetch } from "../actions/reservations";


class ReservationCard extends React.Component {


  // cancelReservation = (e) => {
  //
  // }
  //
  render() {

    return(
      <li>
        <h3>Guest Name: {this.props.reservation.guest_name}</h3>
        <button onClick={() => this.props.cancelReservationFetch(this.props.reservation.id)}>Cancel</button>
      </li>
    )

  }
}

export default connect(null, { cancelReservationFetch })(ReservationCard);
