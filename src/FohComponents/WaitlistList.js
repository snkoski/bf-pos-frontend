import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import WaitlistCard from './WaitlistCard';

import { connect } from 'react-redux';
import { waitlistFetchData } from '../actions/waitlist';

class WaitlistList extends React.Component {

  renderWaitlistCards() {
    return this.props.waitlist.map(waitlist => {
      return <WaitlistCard key={waitlist.id}  waitlist={waitlist} />
    })
  }

  render() {
    return(
      <div>
        <h1>Current Waitlist</h1>
        <h4><Link to='/waitlist'>Add Waitlist</Link></h4>
        <ul>
          {this.renderWaitlistCards()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    waitlist: state.waitlist,
    hasErrored: state.waitlistHasErrored,
    isLoading: state.waitlistIsLoading
  };
};

export default withRouter(connect(mapStateToProps)(WaitlistList));
