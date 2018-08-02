import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import WaitlistCard from './WaitlistCard';

import { connect } from 'react-redux';


class WaitlistList extends React.Component {

  renderWaitlistCards() {
    return this.props.waitlist.map(waitlist => {
      return <WaitlistCard key={waitlist.id}  waitlist={waitlist} />
    })
  }

  render() {
    return(
      <div>
        <h1 style={{
          textAlign: "center", paddingTop: "10px", color: "#a36167"
        }} >Current Waitlist</h1>
        <h4 style={{
        textAlign: "center", marginTop: "-15px"}}><Link to='/waitlist'>Add Waitlist</Link></h4>
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
