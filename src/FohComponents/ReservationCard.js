import React from 'react';
import {connect} from 'react-redux';
import {cancelReservationFetch} from '../actions/reservations';
import {withRouter} from 'react-router';
import {Button} from 'semantic-ui-react';

class ReservationCard extends React.Component {

  handleClick = () => {
    this.props.cancelReservationFetch(this.props.reservation.id)

  }

  getTime = (reservationTime) => {
    return reservationTime.slice(12, 16)
  }

  render() {
    return (<li>
      <h3 style={{
          display: "inline"
        }}>{this.props.reservation.guest_name}</h3><br/>
      <h4 style={{
          display: "inline"
        }}>{this.getTime(this.props.reservation.time)}
        - {this.props.reservation.number_of_guests}
        Guests
      </h4>

      <Button className="reservation-btn-cancel" onClick={this.handleClick}>
        cancel
      </Button>
    </li>)
  }
}

export default withRouter(connect(null, {cancelReservationFetch})(ReservationCard));
