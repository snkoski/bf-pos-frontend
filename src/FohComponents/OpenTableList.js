import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class OpenTableList extends React.Component {

  render() {
    return(
      <div>
        <h1>Open Tables</h1>
        {this.props.static_tables.map(table => {
          if (table.occupied === false) {
            return <p key={table.id}> Table {table.id}</p>
          }
        })}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    static_tables: state.static_tables
  };
};

export default withRouter(connect(mapStateToProps)(OpenTableList));
