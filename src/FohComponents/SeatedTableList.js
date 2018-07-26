import React from 'react';
import { connect } from 'react-redux';
import { staticClearTableFetch, clearTableFetch } from "../actions/tables";
import { customerFetchData } from "../actions/customers"
import SeatedTableCard from "./SeatedTableCard";

class SeatedTableList extends React.Component {

componentDidMount() {
  this.props.customerFetchData("http://localhost:3000/api/v1/customers")
}

currentTables = () => {
  this.props.tables.filter(table => {
  return table.occupied === true
})}

currentCustomers = () => {
  this.props.customers.filter(customer => {
    return customer.seated === true
  })
}

renderSeatedTableCards() {
  return this.props.tables.map(table => {
    return <SeatedTableCard />
  })
}

// renderWaitlistCards() {
//   return this.props.customers.map(customer => {
//     return <WaitlistCard key={customer.id}  customer={customer} />
//   })
// }

  render() {
    let currentTables = this.props.tables.filter(table => {
    return table.occupied === true
  })

// let currentCustomers = this.currentCustomers()

  // let currentCustomers = this.props.customers.filter(customer => {
  //   return customer.seated === true
  // })

debugger
    return(

      <div>
        <h1>Seated Tables</h1>
        <ul>
          {this.renderSeatedTableCards()}
        </ul>


        {/* {currentTables.map(table => {
          // if (table.occupied === true) {


          return <div key={table.id + 'div'}>
            <p key={table.id}> Table {table.table_number}</p>
            {this.currentCustomers}
            <button key={table.id + table.occupied} onClick={() => {
          this.props.staticClearTableFetch(table.table_number)
          this.props.clearTableFetch(table.id)
            }}>clear table</button>
          </div>
            // }
        })} */}
      </div>

          )
  }
}

const mapStateToProps = (state) => {
  return {
    static_tables: state.static_tables,
    tables: state.tables,
    customers: state.customers
  };
};

export default connect(mapStateToProps, { staticClearTableFetch, clearTableFetch, customerFetchData })(SeatedTableList);
