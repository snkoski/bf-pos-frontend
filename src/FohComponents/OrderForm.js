import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import CustomerCard from './CustomerCard';
import {tablesFetchData} from '../actions/tables';
import {Button} from 'semantic-ui-react';

class OrderForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
    tableCustomers.sort((a, b) => a.seat_number - b.seat_number)
    return tableCustomers.map(customer => {
      return <CustomerCard key={customer.id} customer={customer}/>
    })
  }

  render() {
    let currentTable = this.props.tables.find(table => {
      return table.id === this.state.table_num
    })
    return (<div>
      <div className="table-order">
        <svg className="form-svg" viewBox="0 0 850 500" preserveAspectRatio="xMinYMin" width="100%" height="auto">
          <rect className="rect" width="100%" height="100vh"/>
          <rect className="rect-right-side" x="830" width="20px" height="100vh"/>
        </svg>
        <h1 style={{
            textAlign: "center",
            paddingTop: "10px",
            fontSize: "30px",
            color: "#a36167"
          }}>Table {currentTable.table_number}</h1>
        <Button onClick={() => {
            this.props.history.push('/')
          }}>Back</Button>
      </div>
      <div className="customer-card-list">
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
