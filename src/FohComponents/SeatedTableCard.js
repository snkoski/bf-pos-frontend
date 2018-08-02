import React from 'react';
import { staticClearTableFetch, clearTableFetch, selectedTable } from "../actions/tables";
import { removeCustomerFetch, newCustomerFetch } from "../actions/customers";
import { seatWaitlistFetch } from "../actions/waitlist";
import { newTableFetch } from "../actions/tables";
import { seatReservationFetch } from "../actions/reservations";
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { Button, Modal, Icon } from 'semantic-ui-react'

class SeatedTableCard extends React.Component {

state = {
  open: false,
  nextGuest: ""
}

  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  removeTable = () => {

    let tableCustomers = this.props.customers.filter(customer => {
      return customer.table_id === this.props.table.id
    })
// debugger

    this.props.clearTableFetch(this.props.table.id)
// debugger
    tableCustomers.forEach(customer => {
      this.props.removeCustomerFetch(customer.id)
    })
    this.props.history.push('/')
    if (this.props.reservations.length > 0 && this.upcomingReservation(this.props.reservations[0])) {

      this.checkReservations()
  }else if (this.props.waitlist.length > 0) {
    this.checkWaitlist()
  } else {
    this.props.staticClearTableFetch(this.props.table.table_number)
  }
    console.log("TC", tableCustomers);
  }

// removeTable = () => {
//
//   let tableCustomers = this.props.customers.filter(customer => {
//     return customer.table_id === this.props.table.id
//   })
// // debugger
//
//   this.props.clearTableFetch(this.props.table.id)
// // debugger
//   tableCustomers.forEach(customer => {
//     this.props.removeCustomerFetch(customer.id)
//   })
//
//
//   this.props.staticClearTableFetch(this.props.table.table_number)
//
//
// }

// this.props.history.push('/')
// if (this.props.reservations.length > 0 && this.upcomingReservation(this.props.reservations[0])) {
//   this.checkReservations()
// }else if (this.props.waitlist.length > 0) {
// this.checkWaitlist()



  seatCustomer = (numberOfCustomers, table) => {
    for (let i = 0; i < numberOfCustomers; i++) {
      this.props.newCustomerFetch({
        seat_number: i + 1,
        table_id: table
      })
    }
  }

  getNowTime = () => {
    let today = new Date()
    let hours = today.getHours()
    let minutes = today.getMinutes()

    return (hours * 60) + minutes
  }

  getReservationTime = (reservation) => {
    // debugger
    let reservationTime = reservation.time
    let reservationTimeArray = reservationTime.slice(11, 16).split(':')
    return (reservationTimeArray[0] * 60) + (reservationTimeArray[1] * 1)
  }

  upcomingReservation = (reservation) => {
    if (this.getReservationTime(reservation) - this.getNowTime() <= 15 ) {
      return true
    }
    return false
  }

  checkReservations = () => {
    // debugger


        let nextGroupSize = this.props.reservations[0].number_of_guests
        // alert(`Now seating: ${this.props.reservations[0].guest_name}`)
        this.props.seatReservationFetch(this.props.reservations[0].id)
        this.seatReservation()


  }

  seatReservation = () => {
    let index = this.props.tables[this.props.tables.length - 1].id
    this.props.newTableFetch({
      occupied: true,
      table_number: this.props.table.table_number,
      user_id: 1
    })
    // create new customers for table
    this.seatCustomer(this.props.reservations[0].number_of_guests, (index + 1))
  }

  checkWaitlist = () => {

    if (this.props.waitlist.length > 0) {
      let nextGroupSize = this.props.waitlist[0].number_of_guests
      alert(`Now seating: ${this.props.waitlist[0].guest_name}`)
      this.props.seatWaitlistFetch(this.props.waitlist[0].id)

      this.seatWaitlist()

    }
  }

  seatWaitlist = () => {
    // debugger
    let index = this.props.tables[this.props.tables.length - 1].id
    this.props.newTableFetch({
      occupied: true,
      table_number: this.props.table.table_number,
      user_id: 1
    })
    // create new customers for table
    this.seatCustomer(this.props.waitlist[0].number_of_guests, (index + 1))
  }

  selectTable = () => {
    this.props.selectedTable(this.props.table)
  }

  render() {
    // debugger
console.log("SEATED TABLE CARD: ", this.props);
  return <div key={this.props.table.id + 'div'}>
    <p key={this.props.table.id}> Table {this.props.table.table_number}</p>

    <h4 onClick={this.selectTable}><Link to={`/order/${this.props.table.id}` }>Add Order</Link></h4>
    
    <Button onClick={this.show}>Clear</Button>
    <Modal size='samll' open={this.state.open} onClose={this.close}>
      <Modal.Header>Clear Table?</Modal.Header>
      <Modal.Content>
        <p>Clear Table {this.props.table.table_number} and seat next customer?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={this.close} negative>No</Button>
        <Button onClick={this.removeTable}positive icon='checkmark' labelPosition='right' content='Yes' />
      </Modal.Actions>
    </Modal>





  </div>
    }
 }

const mapStateToProps = (state) => {
  return {
    static_tables: state.static_tables,
    customers: state.customers,
    selectedTable: state.selectedTable,
    waitlist: state.waitlist,
    lastTable: state.lastTable,
    tables: state.tables,
    reservations: state.reservations

  };
};
export default withRouter(connect(mapStateToProps, { staticClearTableFetch, clearTableFetch, removeCustomerFetch, selectedTable, seatWaitlistFetch, newTableFetch, newCustomerFetch, seatReservationFetch })(SeatedTableCard));
