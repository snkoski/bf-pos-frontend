import React from 'react';
import { withRouter } from 'react-router-dom';

import WaitlistCard from './WaitlistCard';

import { connect } from 'react-redux';
import { waitlistFetchData } from '../actions/waitlist';

class WaitlistList extends React.Component {
  componentDidMount() {
    this.props.fetchWaitlist("http://localhost:3000/api/v1/waitlists")
  }

  renderWaitlistCards() {
    return this.props.waitlist.map(waitlist => {
      return <WaitlistCard key={waitlist.id}  waitlist={waitlist} />
    })
  }

  render() {
    return(
      <div>
        <h1>Waitlist</h1>
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWaitlist: (url) =>  dispatch(waitlistFetchData(url))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WaitlistList));
