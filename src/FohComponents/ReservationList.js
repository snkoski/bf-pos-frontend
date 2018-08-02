import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import ReservationCard from './ReservationCard';
import {connect} from 'react-redux';

class ReservationList extends React.Component {
  state = {
    route: true
  }

  handleRoute = () => {
    this.props.history.push('/reservation')
    this.setState({
      route: !this.state.route
    })
  }

  renderReservationsCards() {
    return this.props.reservations.map(reservation => {
      return <ReservationCard key={reservation.id} reservation={reservation}/>
    })

  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the reservations</p>
    }
    if (this.props.isLoading) {
      return <p>Loading...</p>;
    }
    return (<div>
      <h1 style={{
          textAlign: "center",
          paddingTop: "10px",
          color: "#a36167"
      }}>Reservations</h1>
      <h4 style={{
          textAlign: "center",
          marginTop: "-15px"
      }}>
        <Link to='/reservation'>Add Reservation</Link>
      </h4>
      <div className="reservations">
        <ul>
          {this.renderReservationsCards()}
        </ul>

      </div>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {reservations: state.reservations, hasErrored: state.reservationsHasErrored, isLoading: state.reservationsIsLoading};
};

export default withRouter(connect(mapStateToProps)(ReservationList));
