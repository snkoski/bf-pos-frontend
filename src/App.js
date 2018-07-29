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
import { recipesFetchData } from './actions/recipes';
import { ordersFetchData } from './actions/orders';
import { waitlistFetchData } from './actions/waitlist';

class App extends Component {

componentDidMount() {
  this.props.tablesFetchData("http://localhost:3000/api/v1/tables");
  this.props.staticTablesFetchData("http://localhost:3000/api/v1/static_tables");
  this.props.customerFetchData("http://localhost:3000/api/v1/customers");
  this.props.reservationsFetchData("http://localhost:3000/api/v1/reservations")
  this.props.recipesFetchData("http://localhost:3000/api/v1/recipes")
  this.props.ordersFetchData("http://localhost:3000/api/v1/orders")
  this.props.waitlistFetchData("http://localhost:3000/api/v1/waitlists")
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
    reservations: state.reservations,
    recipes: state.recipes,
    orders: state.orders
  };
};

export default withRouter(connect(mapStateToProps,{ staticTablesFetchData, tablesFetchData, customerFetchData, reservationsFetchData, recipesFetchData, ordersFetchData, waitlistFetchData })(App));
