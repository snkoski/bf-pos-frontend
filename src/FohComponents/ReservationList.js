import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import ReservationCard from './ReservationCard';

import { connect } from 'react-redux';
import { reservationsFetchData } from '../actions/reservations';

class ReservationList extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     reservations: []
  //   }
  // }

  componentDidMount() {
    this.props.fetchReservations("http://localhost:3000/api/v1/reservations")
  }

  // fetchReservations() {
  //   this.setState({ isLoading: true });
  //
  //   fetch("http://localhost:3000/api/v1/reservations")
  //   .then(resp => {
  //     if (!resp.ok) {
  //       throw Error(resp.statusText);
  //     }
  //     this.setState({ isLoading: false });
  //
  //     return resp
  //   })
  //   .then(resp => resp.json())
  //   .then(reservations => this.setState({ reservations }))
  //   .catch(() => this.setState({ hasErrored: true }));
  // // }
  // componentDidUpdate (prevProps){
  //   if (prevProps.reservations !== this.props.reservations) {
  //     this.props.fetchReservations("http://localhost:3000/api/v1/reservations")
  //   }
  // }

  // componentDidUpdate(prevProps) {
  //   if (this.props.reservations !== prevProps.reservations) {
  //     this.props.fetchReservations("http://localhost:3000/api/v1/reservations")
  //   }
  // }
  renderReservationsCards() {
    let filt = this.props.reservations.filter(reservation => {
      return reservation.cancelled !== true
    })
    return filt.map(reservation => {
      return <ReservationCard key={reservation.id} reservation={reservation} />
    })

  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the reservations</p>
    }
    if (this.props.isLoading) {
      return <p>Loading...</p>;
    }
    return(
      <div>
        <h1>Reservations</h1>
        <h4><Link to='/reservation'>Add Reservation</Link></h4>
        <ul>
          {this.renderReservationsCards()}
        </ul>

      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    reservations: state.reservations,
    hasErrored: state.reservationsHasErrored,
    isLoading: state.reservationsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReservations: (url) => dispatch(reservationsFetchData(url))
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReservationList));
