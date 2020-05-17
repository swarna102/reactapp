import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Navigation from './navigation/navigation';
import Header from './Header/Header';

import Alert from 'react-bootstrap/Alert';
import { DropdownButton, Dropdown } from 'react-bootstrap';




class App extends Component {


  render() {
    return (

      <div className="App container-fulid sb-nav-fixed">
        <Header />
        <Navigation />
      </div>
    );
  }
}
export default Radium(App);

