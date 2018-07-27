import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import ReservationCard from './ReservationCard';

import { connect } from 'react-redux';
// import { reservationsFetchData } from '../actions/reservations';

class ReservationList extends React.Component {
  state = {
    route: true
  }
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     reservations: []
  //   }
  // }

  // componentDidMount() {
  //   this.props.fetchReservations("http://localhost:3000/api/v1/reservations")
  // }

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

  handleRoute = () => {
    // alert('clci')
    this.props.history.push('/reservation')
    this.setState({
      route: !this.state.route
    })
  }
  // componentDidUpdate(prevProps) {
  //   if (this.props.reservations !== prevProps.reservations) {
  //     this.props.fetchReservations("http://localhost:3000/api/v1/reservations")
  //   }
  // }
  renderReservationsCards() {

    return this.props.reservations.map(reservation => {
      return <ReservationCard key={reservation.id} reservation={reservation} />
    })

  }

  render() {
    console.log("RES LIST", this.props);
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
        {/* <h4 onClick={this.handleRoute}>make reservation</h4> */}
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

export default withRouter(connect(mapStateToProps)(ReservationList));
