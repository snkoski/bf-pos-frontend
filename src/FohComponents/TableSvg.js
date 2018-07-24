import React from 'react';
import { staticTablesFetchData } from '../actions/tables';
import { connect } from 'react-redux';

class TableSvg extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }
  componentDidMount() {
    this.props.fetchStaticTables("http://localhost:3000/api/v1/static_tables")
  }


  handleClick = (e) => {
    alert(e.target.id)

  }

  render() {
    return(
      <div className="svg-container">
        <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin" width="100%" height="auto">
          <rect className="rect" width="100%" height="95vh"  onClick={(this.handleClick.bind(this))}  />
          <circle id="0" occupied="occupied"
            className="circle" cx="150" cy="100" r="25" stroke="green" strokeWidth="4" fill="yellow" onClick={(this.handleClick.bind(this))}  />

          <circle id="1" className="circle" cx="400" cy="100" r="10" stroke="green" strokeWidth="4" fill="yellow"
            onClick={(this.handleClick.bind(this))}
          />


          <circle id="2" className="circle" cx="150" cy="350" r="90" stroke="green" strokeWidth="4" fill="yellow"
            onClick={(this.handleClick.bind(this))}
          />
          <defs>
            <filter id="f1" x="0" y="0">
              <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
            </filter>
          </defs>
          <rect className="rect small" width="90" height="90" x="50%" filter="url(#f1)" />

        </svg>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    static_tables: state.static_tables
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStaticTables: (url) => dispatch(staticTablesFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableSvg);
