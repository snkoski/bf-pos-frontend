import React from "react";
import { Grid } from "semantic-ui-react";
import "../table.css";
import { Switch, Route } from 'react-router-dom';

import ReservationList from "./ReservationList";
import WaitlistList from "./WaitlistList";
import OpenTableList from "./OpenTableList";
import SeatedTableList from "./SeatedTableList";

import TableSvg from "./TableSvg";
import ReservationForm from "./ReservationForm";

class FohContainer extends React.Component {

  render() {

    return(
      <Grid>
        <Grid.Column width={12}>
          {/* <h1 className="anh1">Hello</h1> */}
          <Switch>

            <Route path='/reservation' component={ReservationForm} />
            <Route path='/' component={TableSvg} />
          </Switch>
        </Grid.Column>
        <Grid.Column width={4}>
          {/* <h1>Four wide column</h1> */}

          {/* <OpenTableList />
          <SeatedTableList /> */}
          <OpenTableList />
          <SeatedTableList />
          <ReservationList />
          <WaitlistList />


        </Grid.Column>
      </Grid>



    )
  }
}

export default FohContainer;


// right side svg column
// <div className="svg-container">
//   <svg viewBox="0 0 500 1500" preserveAspectRatio="xMinYMin" width="100%" height="auto">
//     <rect className="rect" width="100%" height="50000"  />
//   </svg>
// </div>
