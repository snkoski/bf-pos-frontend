import React from "react";
import { Grid } from "semantic-ui-react";
import "../table.css";
import {  Switch, Route } from 'react-router-dom';
import {withRouter} from 'react-router'
import { connect } from 'react-redux'

import ReservationList from "./ReservationList";
import WaitlistList from "./WaitlistList";
import OpenTableList from "./OpenTableList";
import SeatedTableList from "./SeatedTableList";
import OrderForm from "./OrderForm";
import WaitlistForm from "./WaitlistForm";

import TableSvg from "./TableSvg";
import ReservationForm from "./ReservationForm";

class FohContainer extends React.Component {

  render() {
// console.log("FOH CONTAINER: ", this.props);

    return(

      <Grid>
        <Grid.Column width={12}>
          {/* <h1 className="anh1">Hello</h1> */}

          <Switch>


            <Route path='/reservation' component={ReservationForm} />
            <Route path='/waitlist' component={WaitlistForm} />
            {/* <Route path={`/order/:value`} component={OrderForm} /> */}
            <Route path={`/order/:value`} render={(() => {
              return <OrderForm table={this.props.selectedTable}/>
            })}/>
            <Route path='/' component={TableSvg} last={this.props.lastTable} />
          </Switch>
        </Grid.Column>
        <Grid.Column width={4}>

          <OpenTableList />
          <SeatedTableList />
          <ReservationList />
          <WaitlistList />


        </Grid.Column>
      </Grid>



    )
  }
}

const mapStateToProps = (state) => {
  return {
    static_tables: state.static_tables,
    tables: state.tables,
    customers: state.customers,
    lastTable: state.lastTable,
    selectedTable: state.selectedTable
  };
};


export default withRouter(connect(mapStateToProps)(FohContainer));


// right side svg column
// <div className="svg-container">
//   <svg viewBox="0 0 500 1500" preserveAspectRatio="xMinYMin" width="100%" height="auto">
//     <rect className="rect" width="100%" height="50000"  />
//   </svg>
// </div>
