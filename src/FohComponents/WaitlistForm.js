import React from "react";
import { connect } from "react-redux";
import { newWaitlistFetch } from "../actions/waitlist";
import { withRouter } from 'react-router';
import { Form, Button, Header, Icon, Modal, TextArea } from 'semantic-ui-react'

class WaitlistForm extends React.Component {

  state = {
    guest: {
    guest_name: "",
    phone_number: "",
    number_of_guests: "",
    date: new Date(),
    start_waitlist: new Date()
  },
  modalOpen: false
  }

  // componentDidMount(){
  //  this.nameInput.focus();
  // }
  //
  // handleSubmit = (e) => {
  //
  //   e.preventDefault()
  //
  //   this.props.newWaitlistFetch(this.state)
  //
  //   let name = `Waitlist created for ${this.state.guest_name}`
  //   alert(name)
  //   this.props.history.push('/')
  // }

  handleMakeWaitlist = () => {
    // e.preventDefault()

      this.props.newWaitlistFetch(this.state.guest)
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
    const enabled = this.state.guest.guest_name.length > 0 && this.state.guest.number_of_guests.length > 0 && this.state.guest.phone_number.length > 0
    return (<div className="outer-waitlist">
      <svg className="form-svg" viewBox="0 0 850 500" preserveAspectRatio="xMinYMin" width="100%" height="auto">
        <rect className="rect" width="100%" height="100vh"/>
        <rect className="rect-right-side" x="830" width="20px" height="100vh"/>
      </svg>
      <div className="form waitlist-form" style={{
        textAlign: "center"
      }}>

        <Form onSubmit={this.handleSubmit}>

          <Form.Input className="waitlist-name" label="Name" name="guest_name" value={this.state.guest.guest_name}
            onChange={this.handleChange} style={{ width: "60%" }} required />

          <Form.Input label="Number of Guests" type="number" name="number_of_guests"
            value={this.state.guest.number_of_guests} onChange={this.handleChange} style={{ width: "100px" }} required />

          <Form.Input label="Phone Number" name="phone_number" value={this.state.guest.phone_number}
            onChange={this.handleChange} style={{ width: "200px" }} required />

          <Modal trigger={<Button disabled={!enabled} onClick={this.handleOpen}>Submit</Button>}  open={this.state.modalOpen}
            onClose={this.handleClose} basic size='small'>
            <Header icon='utensils' content='Finalizing Waitlist' />
            <Modal.Content>
              <h3>
                Adding {this.state.guest.guest_name}      +{this.state.guest.number_of_guests - 1} to waitlist<br/>  Phone: {this.state.guest.phone_number}
              </h3>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={this.handleClose} basic color='red' inverted>
                <Icon name='remove' /> No
              </Button>
              <Button onClick={this.handleMakeWaitlist} color='green' inverted>
                <Icon name='checkmark' /> Yes
              </Button>
            </Modal.Actions>
          </Modal>
          <Button onClick={() => {
            this.props.history.push('/')
          }} >Back</Button>
        </Form>

      </div>
    </div>
)
  }
}
const mapStateToProps = (state) => {
  return {waitlist: state.waitlist};
};

export default withRouter(connect(mapStateToProps, {newWaitlistFetch})(WaitlistForm));
