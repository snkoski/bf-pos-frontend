import React from "react";
import { Grid } from "semantic-ui-react";
import "../table.css";
import {  Switch, Route } from 'react-router-dom';
import {withRouter} from 'react-router';
import { connect } from 'react-redux';

class BohContainer extends React.Component {
  render() {
    return(
      <h1>FUTURE HOME OF BOH</h1>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    // static_tables: state.static_tables,
    // tables: state.tables,
    // customers: state.customers,
    // lastTable: state.lastTable,
    // selectedTable: state.selectedTable,
    currentTab: state.currentTab,
    currentDepartment: state.currentDepartment

  };
};

export default withRouter(connect(mapStateToProps)(BohContainer))
