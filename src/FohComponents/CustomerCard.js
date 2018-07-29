import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router'

class CustomerCard extends React.Component {


render() {
  return(
    <li>
      <h3>Seat {this.props.customer.seat_number}</h3>
    </li>
  )
}
}

export default CustomerCard;
