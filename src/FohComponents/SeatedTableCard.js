import React from 'react';
import { staticClearTableFetch, clearTableFetch } from "../actions/tables";
import { connect } from 'react-redux';

class SeatedTableCard extends React.Component {


  // let currentTables = this.props.tables.filter(table => {
  // return table.occupied === true
  // })

  removeTable = () => {
    this.props.staticClearTableFetch(this.props.table.table_number)
    this.props.clearTableFetch(this.props.table.id)
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
export default connect(mapStateToProps, { staticClearTableFetch, clearTableFetch })(SeatedTableCard);
