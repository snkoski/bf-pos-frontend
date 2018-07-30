import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import CustomerCard from "./CustomerCard";
import {tablesFetchData} from "../actions/tables"

class OrderForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // table_num: parseInt(this.props.match.params.value, 10)
      table_num: this.props.selectedTable.id
    }
  }

  componentDidMount() {
    this.props.tablesFetchData("http://localhost:3000/api/v1/tables");
  }

  renderCustomers = () => {
    let tableCustomers = this.props.customers.filter(customer => {
      return customer.table_id === this.state.table_num
    })

    return tableCustomers.map(customer => {
      return <CustomerCard key={customer.id} customer={customer}/>
    })
  }

  render() {
    console.log("ORDER FORM", this.props.selectedTable.id);
// debugger
    let currentTable = this.props.tables.find(table => {
      return table.id === this.state.table_num
    })
    // debugger
    return (<div>
      <div className="table-order">
        <h1>Table {currentTable.table_number}</h1>
        <button onClick={() => {
            this.props.history.push('/')
          }}>Go Back</button>
      </div>
      <div>
        <ul>
          {this.renderCustomers()}
        </ul>
      </div>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {customers: state.customers, tables: state.tables, selectedTable: state.selectedTable}
}

export default withRouter(connect(mapStateToProps, {tablesFetchData})(OrderForm));
