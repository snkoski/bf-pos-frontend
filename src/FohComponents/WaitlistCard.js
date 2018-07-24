import React from 'react';

class WaitlistCard extends React.Component {
  render() {
    return(
      <li>
        <h3>Guest Name: {this.props.waitlist.guest_name}</h3>
      </li>
    )
  }
}

export default WaitlistCard;
