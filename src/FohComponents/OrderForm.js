import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CustomerCard from "./CustomerCard";

class OrderForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      table_num: parseInt(this.props.match.params.value, 10)
    }
  }

  renderCustomers = () => {
    let tableCustomers = this.props.customers.filter(customer => {
      return customer.table_id === this.state.table_num
    })

    return tableCustomers.map(customer => {
      return <CustomerCard key={customer.id} customer={customer} />
    })
  }

        render() {

          // let table_id = parseInt(this.props.match.params.value, 10)


          let currentTable = this.props.tables.find(table => {
            return table.id === this.state.table_num
          })
          // debugger
    return(
      <div>
        <div className="table-order">
          <h1>Table {currentTable.table_number}</h1>
          <button onClick={ () => { this.props.history.push('/') } }>Go Back</button>
        </div>
        <div>
          <ul>
            {this.renderCustomers()}
          </ul>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    customers: state.customers,
    tables: state.tables
  }
}

export default withRouter(connect(mapStateToProps)(OrderForm));
