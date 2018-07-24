import React from 'react';
import { Menu } from 'semantic-ui-react';
// import Moment from 'react-moment';
import Clock from 'react-live-clock';

class NavBar extends React.Component {


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
        </Menu>
        {/* TODO: format date, figure out alignment */}
      </div>
    )
  }
}
export default NavBar;
