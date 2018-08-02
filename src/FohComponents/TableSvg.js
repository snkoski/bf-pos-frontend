import React from 'react';
import {staticSeatTableFetch, newTableFetch} from '../actions/tables';
import {newCustomerFetch} from '../actions/customers';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, Input, Modal} from 'semantic-ui-react';

class TableSvg extends React.Component {

  setTables() {
    if (this.props.tables.length > 0 && this.props.static_tables.length > 0) {

      this.props.tables.forEach((e1) => this.props.static_tables.forEach((e2) => {

        if (e1.table_number === parseInt(e2.id, 10)) {
          let a = document.getElementById(e1.table_number)

          a.setAttribute('occupied', 'occupied')
        } else {
          let a = document.getElementById(parseInt(e2.id, 10))
          a.removeAttribute('occupied')
        }
      }))
    }
  }

  seatCustomer = (numberOfCustomers, table) => {
    for (let i = 0; i < numberOfCustomers; i++) {
      this.props.newCustomerFetch({
        seat_number: i + 1,
        table_id: table
      })
    }
  }

  handleClick = (e) => {
    // get the clicked on table's id as an integer
    let num = parseInt(e.target.id, 10)
    // check if the clicked table is occupied
    let test = !!this.props.tables.find(table => {
      return table.occupied === true && table.table_number === num
    })
    //
    if (test === false) {
      // get prompt for number of customers
      let customerNumber = parseInt(prompt("How many customers in party?"), 10)
      // only seat customers if a number more than one was entered
      if (customerNumber > 0) {
        // set static table to occupied
        this.props.staticSeatTableFetch(e.target.id)
        // create new table in db table number set to id of clicked table
        this.props.newTableFetch({
          occupied: true,
          table_number: parseInt(e.target.id, 10),
          user_id: 1
        })
        // create new customers for table
        this.seatCustomer(customerNumber, (this.props.lastTable.id + 1))
      }
    }

  }

  render() {
    return (<div className="svg-container">
      <svg className="table-svg" viewBox="0 0 650 500" preserveAspectRatio="xMinYMin" width="100%">
        <rect className="rect" x="12" y="12" width="100%" height="70vh"/>
        <rect className="rect-svg-border" x="630" width="20px" height="100vh"/>
        <rect className="rect-svg-border" y="498" width="100vh" height="20px"/>
        <g>
          <circle id="1" className="circle" cx="70" cy="70" r="40" onClick={(this.handleClick.bind(this))}/>
          <text x="65" y="44" fontFamily="Verdana" fontSize="15" fill="#a36167">1</text>
        </g>
        <g>
          <circle id="2" className="circle" cx="70" cy="190" r="40" onClick={(this.handleClick.bind(this))}/>
          <text x="65" y="164" fontFamily="Verdana" fontSize="15" fill="#a36167">2</text>
        </g>
        <g>
          <circle id="3" className="circle" cx="70" cy="310" r="40" onClick={(this.handleClick.bind(this))}></circle>
          <text x="65" y="284" fontFamily="Verdana" fontSize="15" fill="#a36167">3</text>
        </g>
        <g>
          <circle id="4" className="circle" cx="70" cy="430" r="40" onClick={(this.handleClick.bind(this))}></circle>
          <text x="65" y="404" fontFamily="Verdana" fontSize="15" fill="#a36167">4</text>
        </g>
        <g>
          <circle id="5" className="circle" cx="200" cy="70" r="40" onClick={(this.handleClick.bind(this))}></circle>
          <text x="195" y="44" fontFamily="Verdana" fontSize="15" fill="#a36167">5</text>
        </g>
        <g>
          <circle id="6" className="circle" cx="200" cy="190" r="40" onClick={(this.handleClick.bind(this))}></circle>
          <text x="195" y="164" fontFamily="Verdana" fontSize="15" fill="#a36167">6</text>
        </g>
        <g>
          <circle id="7" className="circle" cx="200" cy="310" r="40" onClick={(this.handleClick.bind(this))}></circle>
          <text x="195" y="284" fontFamily="Verdana" fontSize="15" fill="#a36167">7</text>
        </g>
        <g>
          <circle id="8" className="circle" cx="200" cy="430" r="40" onClick={(this.handleClick.bind(this))}></circle>
          <text x="195" y="404" fontFamily="Verdana" fontSize="15" fill="#a36167">8</text>
        </g>
        <g>
          <circle id="9" className="circle" cx="330" cy="130" r="40" onClick={(this.handleClick.bind(this))}></circle>
          <text x="325" y="104" fontFamily="Verdana" fontSize="15" fill="#a36167">9</text>
        </g>
        <g>
          <circle id="10" className="circle" cx="330" cy="250" r="40" onClick={(this.handleClick.bind(this))}></circle>
          <text x="320" y="224" fontFamily="Verdana" fontSize="15" fill="#a36167">10</text>
        </g>
        <g>
          <circle id="11" className="circle" cx="330" cy="370" r="40" onClick={(this.handleClick.bind(this))}></circle>
          <text x="320" y="344" fontFamily="Verdana" fontSize="15" fill="#a36167">11</text>
        </g>
      </svg>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {static_tables: state.static_tables, tables: state.tables, customers: state.customers, lastTable: state.lastTable};
};

export default withRouter(connect(mapStateToProps, {staticSeatTableFetch, newTableFetch, newCustomerFetch})(TableSvg));
