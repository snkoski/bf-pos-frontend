import React from "react";
import { connect } from "react-redux";
import { newWaitlistFetch } from "../actions/waitlist";

import { withRouter } from 'react-router';

class WaitlistForm extends React.Component {

  state = {
    guest_name: "",
    phone_number: "",
    number_of_guests: "",
    date: new Date(),
    start_waitlist: new Date()
  }

  componentDidMount(){
   this.nameInput.focus();
  }

  handleSubmit = (e) => {

    e.preventDefault()

    this.props.newWaitlistFetch(this.state)

    let name = `Waitlist created for ${this.state.guest_name}`
    alert(name)
    this.props.history.push('/')
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (<div style={{
      textAlign: "center"
    }}>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
        </label>
        <input name="guest_name" value={this.state.guest_name}
          onChange={this.handleChange} ref={(input) => { this.nameInput = input; }}/>
        <br/>
        <label>
          Phone Number
        </label>
        <input name="phone_number" value={this.state.phone_number}
          onChange={this.handleChange}/>
        <br/>
        <label>
          Number of Guests
        </label>
        <input type="number" name="number_of_guests"
          value={this.state.number_of_guests} onChange={this.handleChange}/>
        <input type="submit"/>
      </form>
      <button onClick={() => {
        this.props.history.push('/')
      }}>Go Back</button>
    </div>)
  }
}
const mapStateToProps = (state) => {
  return {waitlist: state.waitlist};
};

export default withRouter(connect(mapStateToProps, {newWaitlistFetch})(WaitlistForm));
