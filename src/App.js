import React,{ Component } from 'react';
import './App.css';
import Radium from 'radium';
import Navigation from './navigation/navigation';
import Alert from 'react-bootstrap/Alert';
import {DropdownButton,Dropdown} from 'react-bootstrap';




class App extends Component {
  

render(){
  return (
    <div className="App container-fulid sb-nav-fixed">
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Start Bootstrap</a><button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#">
        <svg className="bi bi-list" width="2em" height="2em" viewBox="0 0 16 16" fill="darkgrey" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 013 11h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 7h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 3h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" clipRule="evenodd"/>
          </svg>   
        </button>
        <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
          <div className="input-group search-box">
            <input className="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
            <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <svg className="bi bi-search" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clipRule="evenodd"/>
                  <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clipRule="evenodd"/>
                  </svg>
                </button>
            </div>
          </div>
        </form> 
        <svg className="bi bi-person-fill" width="2em" height="2em" viewBox="0 0 16 16" fill="darkgrey" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
        </svg>     
        <DropdownButton variant="secondary" id="dropdown-Secondary-button" title="">
          <Dropdown.Item href="#">Settings</Dropdown.Item>
          <Dropdown.Item href="#">Activity</Dropdown.Item>
          <hr></hr>
          <Dropdown.Item href="#">Logout</Dropdown.Item>
        </DropdownButton>
      </nav>      
            <Navigation/>
      </div>
    );
}
}
export default Radium(App);
