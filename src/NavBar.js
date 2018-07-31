import React from 'react';
import { Menu, Button } from 'semantic-ui-react';
// import Moment from 'react-moment';
import Clock from 'react-live-clock';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeCurrentTab } from "./actions/navBar";
class NavBar extends React.Component {

handleClick = (e) => {
  console.log(e.target.value);
  this.props.changeCurrentTab(e.target.value)
}

  render() {
    return(
      <div>
        <Menu>
          <Menu.Item name='date'>
            {(new Date()).toLocaleDateString('en-US')}
          </Menu.Item>

          <Menu.Item name='time' >
            <Clock format={'HH:mm:ss'}
              ticking={true}
              timezone={'US/Eastern'}
            />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item  >
              <Button onClick={this.handleClick} color="pink" value="tables" >Tables</Button>
            </Menu.Item>
            <Menu.Item  >
              <Button onClick={this.handleClick} color="pink" value="waitlist" >Waitlist</Button>
            </Menu.Item>
            <Menu.Item  >
              <Button onClick={this.handleClick} color="pink" value="reservations" >Reservations</Button>
            </Menu.Item>

          </Menu.Menu>
        </Menu>
        {/* TODO: format date, figure out alignment */}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {currentTab: state.currentTab};
};
export default withRouter(connect(mapStateToProps, {changeCurrentTab})(NavBar));
