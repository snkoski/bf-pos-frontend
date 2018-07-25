import React from 'react';
import{ connect } from 'react-redux';

class OpenTableList extends React.Component {

  render() {
    return(
      <div>
        <h1>Open Tables</h1>
        {this.props.static_tables.map(table => {
          if (table.occupied === false) {
            return <p> Table {table.id}</p>
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

export default connect(mapStateToProps)(OpenTableList);
