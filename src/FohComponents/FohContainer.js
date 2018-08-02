import React from 'react';
import {Grid} from 'semantic-ui-react';
import '../table.css';
import {Switch, Route} from 'react-router-dom';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {changeCurrentTab} from '../actions/navBar';
import ReservationList from './ReservationList';
import WaitlistList from './WaitlistList';
import OpenTableList from './OpenTableList';
import SeatedTableList from './SeatedTableList';
import OrderForm from './OrderForm';
import WaitlistForm from './WaitlistForm';
import TableSvg from './TableSvg';
import ReservationForm from './ReservationForm';

class FohContainer extends React.Component {

  render() {
    return (<div className="whole-div">
      <Grid className="whole-grid">
        <Grid.Column width={12}>

          <Switch>

            <Route path='/reservation' component={ReservationForm}/>
            <Route path='/waitlist' component={WaitlistForm}/>
            <Route path={`/order/:value`} render={(() => {
                return <OrderForm table={this.props.selectedTable}/>
              })}/>
            <Route path='/' component={TableSvg} last={this.props.lastTable}/>
          </Switch>
        </Grid.Column>

        <Grid.Column className="foh-side" width={4}>

          {
            this.props.currentTab === "tables"
              ? (<div>
                <Grid.Row><OpenTableList/></Grid.Row>
                <Grid.Row><SeatedTableList/></Grid.Row>
              </div>)
              : this.props.currentTab === "reservations"
                ? (<ReservationList/>)
                : (<WaitlistList/>)
          }

        </Grid.Column>
      </Grid>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    static_tables: state.static_tables,
    tables: state.tables,
    customers: state.customers,
    lastTable: state.lastTable,
    selectedTable: state.selectedTable,
    currentTab: state.currentTab
  };
};

export default withRouter(connect(mapStateToProps, {changeCurrentTab})(FohContainer));
