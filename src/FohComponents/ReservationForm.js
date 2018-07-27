import React from "react";
import { connect } from "react-redux";
import { newReservationFetch } from "../actions/reservations";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


class ReservationForm extends React.Component {

  state = {
    guest_name: "",
    number_of_guests: "",
    date: "",
    time: "",
    special_requests: ""
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.props);
    this.props.newReservationFetch(this.state)
    let name = `Reservation created for ${this.state.guest_name}`
    alert(name)
    this.props.history.push('/')
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    // TODO: semantic ui form for styling
    console.log('rerender');
    return(

      <div style={{ textAlign: "center" }}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
          </label>
          <input name="guest_name" value={this.state.guest_name} onChange={this.handleChange}/>
          <br/>
          <label>
            Number Of Guests
          </label>
          <input type="number" name="number_of_guests" value={this.state.number_of_guests} onChange={this.handleChange}/>
          <br/>
          <label>
            Date
          </label>
          <input type="date" name="date" value={this.state.date} onChange={this.handleChange}/>
          <label>
            Time
          </label>
          <input type="time" name="time" value={this.state.time} onChange={this.handleChange}/>
          <br/>
          <label>
            Special Requests
          </label>
          <br/>
          <textarea rows="4" name="special_requests" value={this.state.special_requests} onChange={this.handleChange}/>
          <input type="submit"/>

        </form>
        <button onClick={ () => { this.props.history.push('/') } }>Go Back</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    reservations: state.reservations,

  };
};

export default withRouter(connect(mapStateToProps, { newReservationFetch })(ReservationForm));
