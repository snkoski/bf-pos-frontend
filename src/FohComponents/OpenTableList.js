import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class OpenTableList extends React.Component {

  render() {
    return (<div className="open-tables">
      <h1 style={{
          textAlign: "center",
          paddingTop: "10px",
          color: "#a36167"
      }}>Open Tables</h1>
      <div className="open-cards">
        {
          this.props.static_tables.map(table => {
            if (table.occupied === false) {
              return <p key={table.id}>
                Table {table.id}</p>
            }
          })
        }
      </div>
    </div>)
  }

}

const mapStateToProps = (state) => {
  return {static_tables: state.static_tables};
};

export default withRouter(connect(mapStateToProps)(OpenTableList));
