import React from 'react';
import { connect } from 'react-redux';
import { clearTableFetch } from "../actions/tables";

class SeatedTableList extends React.Component {

  render() {
    return(
      <div>
        <h1>Seated Tables</h1>
        {this.props.static_tables.map(table => {
          if (table.occupied === true) {
            return <div>
              <p> Table {table.id}</p>
              <button onClick={() => {this.props.clearTableFetch(table.id)}}>clear table</button>
            </div>
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

export default connect(mapStateToProps, { clearTableFetch })(SeatedTableList);
