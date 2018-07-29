import React from 'react';
import { staticClearTableFetch, clearTableFetch } from "../actions/tables";
import { removeCustomerFetch } from "../actions/customers";
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
    console.log("TC", tableCustomers);
  }

  render() {
console.log("SEATED TABLE CARD: ", this.props);
  return <div key={this.props.table.id + 'div'}>
    <p key={this.props.table.id}> Table {this.props.table.table_number}</p>

    <h4><Link to={`/order/${this.props.table.id}` }>Add Order</Link></h4>

    <button key={this.props.table.id + this.props.table.occupied} onClick={this.removeTable}>clear table</button>
      </div>
    }
 }

const mapStateToProps = (state) => {
  return {
    static_tables: state.static_tables,
    customers: state.customers

  };
};
export default withRouter(connect(mapStateToProps, { staticClearTableFetch, clearTableFetch, removeCustomerFetch })(SeatedTableCard));
