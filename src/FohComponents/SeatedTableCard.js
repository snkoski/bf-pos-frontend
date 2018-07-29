import React from 'react';
import { staticClearTableFetch, clearTableFetch } from "../actions/tables";
import { removeCustomerFetch } from "../actions/customers";
import { connect } from 'react-redux';

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
    console.log("TC", tableCustomers);
  }

  render() {

  return <div key={this.props.table.id + 'div'}>
    <p key={this.props.table.id}> Table {this.props.table.table_number}</p>

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
export default connect(mapStateToProps, { staticClearTableFetch, clearTableFetch, removeCustomerFetch })(SeatedTableCard);
