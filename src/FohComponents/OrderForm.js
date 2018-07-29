import React from "react";
import { connect } from "react-redux";

class OrderForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {

  let table_id = parseInt(this.props.match.params.value, 10)
281

  let currentTable = this.props.tables.find(table => {
    return table.id === table_id
  })
    // debugger
    return(
      <div>
        <div className="table-order">
          <h1>Table {currentTable.table_number}</h1>
          <button onClick={ () => { this.props.history.push('/') } }>Go Back</button>
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

export default connect(mapStateToProps)(OrderForm);
