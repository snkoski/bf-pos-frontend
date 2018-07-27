import React, { Component } from 'react';
// import {Router} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import FohContainer from './FohComponents/FohContainer'
import { connect } from 'react-redux';
import {withRouter} from 'react-router'


import { staticTablesFetchData, tablesFetchData } from './actions/tables';
import { customerFetchData } from './actions/customers';
import { reservationsFetchData } from './actions/reservations';

class App extends Component {

componentDidMount() {
  this.props.tablesFetchData("http://localhost:3000/api/v1/tables");
  this.props.staticTablesFetchData("http://localhost:3000/api/v1/static_tables");
  this.props.customerFetchData("http://localhost:3000/api/v1/customers");
  this.props.reservationsFetchData("http://localhost:3000/api/v1/reservations")
}

  render() {
console.log("APP.JS", this.props);
    return(
        <div>
          <NavBar />

          <FohContainer />
        </div>
    );

  }
}
const mapStateToProps = (state) => {
  return {
    static_tables: state.static_tables,
    tables: state.tables,
    customers: state.customers,
    reservations: state.reservations
  };
};

export default withRouter(connect(mapStateToProps,{ staticTablesFetchData, tablesFetchData, customerFetchData, reservationsFetchData })(App));
