import React from 'react';
import { staticSeatTableFetch, newTableFetch } from '../actions/tables';
import { newCustomerFetch } from "../actions/customers";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class TableSvg extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "",
      last: ""
    }
  }


  setTables() {
    if (this.props.tables.length > 0 && this.props.static_tables.length > 0) {

      this.props.tables.forEach((e1) => this.props.static_tables.forEach((e2) => {

        if(e1.table_number === parseInt(e2.id, 10)) {
          let a = document.getElementById(e1.table_number)

          a.setAttribute('occupied', 'occupied')
        } else {
          let a = document.getElementById(parseInt(e2.id, 10))
          a.removeAttribute('occupied')
        }
      }))
    }
  }

  seatCustomer =(numberOfCustomers, table) => {
    for (let i = 0; i < numberOfCustomers; i++) {
      this.props.newCustomerFetch({seat_number: i + 1, table_id: table})
    }
  }

  handleClick = (e) => {




// debugger

    let num = parseInt(e.target.id, 10)
    let nextTable = this.state.last
    let foundTable = ''
    let test = !!this.props.tables.find(table => {
      foundTable = table.id + 1
      return table.occupied === true && table.table_number === num
    })
    if (test === false) {
      this.setState({
        selected: num
      })
      let customerNumber = parseInt(prompt("enter a number"), 10)
      if (customerNumber > 0) {
      this.props.staticSeatTableFetch(e.target.id)
      this.props.newTableFetch({occupied: true, table_number: parseInt(e.target.id, 10), user_id: 1})
      this.seatCustomer(customerNumber, (this.props.lastTable.id + 1))
    }
    }

  }



  render() {
    // debugger
    // this.setTables()
    // console.log(this.state);
    // console.log(this.props);
    return(
      <div className="svg-container">
        <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin" width="100%" height="auto">
          <rect className="rect" width="100%" height="95vh" />
          <circle id="1"
            className="circle" cx="150" cy="100" r="75" stroke="green" strokeWidth="4"  onClick={(this.handleClick.bind(this))}  />

          <circle id="2" className="circle" cx="400" cy="100" r="75" stroke="green" strokeWidth="4" fill="yellow"
            onClick={(this.handleClick.bind(this))}
          />


          <circle id="3" className="circle" cx="150" cy="350" r="75" stroke="green" strokeWidth="4" fill="yellow"
            onClick={(this.handleClick.bind(this))}
          ></circle>
          {/* <defs>
            <filter id="f1" x="0" y="0">
              <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
            </filter>
            </defs>
          <rect className="rect small" width="90" height="90" x="50%" filter="url(#f1)" /> */}

        </svg>

      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    static_tables: state.static_tables,
    tables: state.tables,
    customers: state.customers,
    lastTable: state.lastTable
  };
};

export default withRouter(connect(mapStateToProps,{ staticSeatTableFetch, newTableFetch, newCustomerFetch })(TableSvg));
