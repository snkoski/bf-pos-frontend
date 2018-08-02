import React from 'react';
import {connect} from 'react-redux';
import {cancelWaitlistFetch} from '../actions/waitlist';
import {withRouter} from 'react-router';
import {Button} from 'semantic-ui-react';

class WaitlistCard extends React.Component {

  getNowTime = () => {
    let today = new Date()
    let hours = today.getHours()
    let minutes = today.getMinutes()

    return (hours * 60) + minutes
  }

  getWaitlistTime = (waitlist) => {
    let waitlistTime = waitlist.start_waitlist
    let waitlistTimeArray = waitlistTime.slice(11, 16).split(':')
    return (waitlistTimeArray[0] * 60) + (waitlistTimeArray[1] * 1)
  }

  getElapsedWaitlistTime = (waitlist) => {
    let now = this.getNowTime()
    let waitlistStart = this.getWaitlistTime(waitlist) - 240
    let elapsed = now - waitlistStart
    let hour = Math.floor(elapsed / 60)
    let min = elapsed % 60
    return hour + ":" + min
  }

  handleClick = () => {
    this.props.cancelWaitlistFetch(this.props.waitlist.id)
  }
  render() {
    return (<li>
      <h3 style={{
          display: "inline"
        }}>{this.props.waitlist.guest_name}</h3><br/>
      <h4 style={{
          display: "inline"
        }}>{(this.getElapsedWaitlistTime(this.props.waitlist))}
        - {this.props.waitlist.number_of_guests}
        Guests</h4>

      <Button className="waitlist-btn-cancel" onClick={this.handleClick}>
        Cancel
      </Button>
    </li>)
  }
}

export default withRouter(connect(null, {cancelWaitlistFetch})(WaitlistCard));
