import React from "react";
import {connect} from "react-redux";
import {newReservationFetch} from "../actions/reservations";
import {withRouter} from 'react-router';
import { Form, Button, Header, Icon, Modal, TextArea } from 'semantic-ui-react'

class ReservationForm extends React.Component {

  state = {
    guest: {
    guest_name: "",
    number_of_guests: "",
    date: "",
    time: "",
    special_requests: ""
  },
  modalOpen: false
  }

  componentDidMount(){
   // this.nameInput.focus();
  }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   this.props.newReservationFetch(this.state)
  //   let name = `Reservation created for ${this.state.guest_name}`
  //   // alert(name)
  //   // this.props.history.push('/')
  // }

  handleMakeReservation = () => {
    // e.preventDefault()

      this.props.newReservationFetch(this.state.guest)
    //   let name = `Reservation created for ${this.state.guest_name}`
    //   // alert(name)
      this.props.history.push('/')
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleChange = (e) => {

    this.setState({guest:{...this.state.guest,
      [e.target.name]: e.target.value
    }})
  }

  render() {
    const enabled = this.state.guest.guest_name.length > 0 && this.state.guest.number_of_guests.length > 0 && this.state.guest.date.length > 0 && this.state.guest.time.length > 0
    // TODO: semantic ui form for styling
    console.log('rerender');
    return (<div className="outer-res">
      <svg className="form-svg" viewBox="0 0 850 500" preserveAspectRatio="xMinYMin" width="100%" height="auto">
        <rect className="rect" width="100%" height="100vh"/>
        <rect className="rect-right-side" x="830" width="20px" height="100vh"/>
      </svg>


      <div className="form res-form" style={{
          textAlign: "center"
      }}>
        <Form onSubmit={this.handleSubmit}>

          <Form.Input label="Name" name="guest_name" value={this.state.guest.guest_name} onChange={this.handleChange} style={{ width: "60%" }} required/>


          <Form.Input label="Number of Guests" type="number" name="number_of_guests" value={this.state.guest.number_of_guests} onChange={this.handleChange} style={{ width: "100px" }} required/>


          <Form.Input label="Date" type="date" name="date" value={this.state.guest.date} onChange={this.handleChange} style={{ width: "200px" }} required/>

          <Form.Input label="Time" type="time" name="time" value={this.state.guest.time} onChange={this.handleChange} style={{ width: "100px" }} required/>

          <Form.TextArea label="Special Requests" rows="4" name="special_requests" value={this.state.guest.special_requests} onChange={this.handleChange} style={{ width: "75%" }}/>

          <Modal trigger={<Button disabled={!enabled} onClick={this.handleOpen}>Submit</Button>}  open={this.state.modalOpen}
            onClose={this.handleClose} basic size='small'>
            <Header icon='utensils' content='Finalizing Reservation' />
            <Modal.Content>
              <h3>
                Make reservation for {this.state.guest.guest_name}     +{this.state.guest.number_of_guests - 1}<br/> on {this.state.guest.date}<br/>at {this.state.guest.time}?
              </h3>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={this.handleClose} basic color='red' inverted>
                <Icon name='remove' /> No
              </Button>
              <Button onClick={this.handleMakeReservation} color='green' inverted>
                <Icon name='checkmark' /> Yes
              </Button>
            </Modal.Actions>
          </Modal>
          <Button onClick={() => {
              this.props.history.push('/')
            }} >Back</Button>
            {/* <button onClick={() => {
              this.props.history.push('/')
            }}>Go Back</button> */}
          </Form>
          {/* <button onClick={() => {
              this.props.history.push('/')
          }}>Go Back</button> */}
        </div>

      </div>
      )
  }
}
const mapStateToProps = (state) => {
  return {reservations: state.reservations};
};

export default withRouter(connect(mapStateToProps, {newReservationFetch})(ReservationForm));
