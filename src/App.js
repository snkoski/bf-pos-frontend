import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import FohContainer from './FohComponents/FohContainer'

class App extends Component {



  render() {
    
    return(
      <div>
        <NavBar />

        <FohContainer />
      </div>
    );
  }
}

export default App;
