import React from 'react';
import { staticClearTableFetch, clearTableFetch, selectedTable } from "../actions/tables";
import { removeCustomerFetch, newCustomerFetch } from "../actions/customers";
import { seatWaitlistFetch } from "../actions/waitlist";
import { newTableFetch } from "../actions/tables"
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom"

class SeatedTableCard extends React.Component {

  removeTable = () => {

    let tableCustomers = this.props.customers.filter(customer => {
      return customer.table_id === this.props.table.id
    })
// debugger
    this.props.staticClearTableFetch(this.props.table.table_number)
    this.props.clearTableFetch(this.props.table.id)
// debugger
    tableCustomers.forEach(customer => {
      this.props.removeCustomerFetch(customer.id)
    })
    this.props.history.push('/')
    // this.checkWaitlist()
    this.checkReservations()
    console.log("TC", tableCustomers);
  }

  seatCustomer = (numberOfCustomers, table) => {
    for (let i = 0; i < numberOfCustomers; i++) {
      this.props.newCustomerFetch({
        seat_number: i + 1,
        table_id: table
      })
    }
  }

  checkReservations = () => {
    if (this.props.reservations.length > 0) {
      alert('there are reservations')
    }
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
    // this.props.history.push(`/order/${this.props.selectedTable.id}`)
  }

  render() {
console.log("SEATED TABLE CARD: ", this.props);
  return <div key={this.props.table.id + 'div'}>
    <p key={this.props.table.id}> Table {this.props.table.table_number}</p>

    <h4 onClick={this.selectTable}><Link to={`/order/${this.props.table.id}` }>Add Order</Link></h4>

    <button key={this.props.table.id + this.props.table.occupied} onClick={this.removeTable}>clear table</button>
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
export default withRouter(connect(mapStateToProps, { staticClearTableFetch, clearTableFetch, removeCustomerFetch, selectedTable, seatWaitlistFetch, newTableFetch, newCustomerFetch })(SeatedTableCard));
