import React from 'react';
import { connect } from 'react-redux';
import { staticClearTableFetch, clearTableFetch } from "../actions/tables";
import { withRouter } from 'react-router-dom';

import SeatedTableCard from "./SeatedTableCard";

class SeatedTableList extends React.Component {

renderSeatedTableCards() {
  // debugger
  let filt = this.props.tables.filter(table => {
    return table.occupied === true
  })
  return filt.map(table => {
    return <SeatedTableCard key={table.id} table={table} />
  })

}

  render() {


    return(

      <div>
        <h1>Seated Tables</h1>




        {this.renderSeatedTableCards()}

        
      </div>

          )
  }
}

const mapStateToProps = (state) => {
  return {
    static_tables: state.static_tables,
    tables: state.tables,
    customers: state.customers,
    orders: state.orders
  };
};

export default withRouter(connect(mapStateToProps, { staticClearTableFetch, clearTableFetch })(SeatedTableList));
