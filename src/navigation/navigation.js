import React, { useState, Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
  import { Collapse, CardBody, Card } from 'reactstrap';

  
export default class leftnav extends Component{

    state={
        isOpen:false,
        isOpen2:false,
        isOpen3:false,
        isOpen4:false ,
        isOpen5:false       
    }

  toggle = () => {
      console.log("swa1");
    const drplist=this.state.isOpen;
    this.setState({isOpen:!drplist});
  };
  toggle2 = () => {
    console.log("swa1");
    const drplist2=this.state.isOpen2;
    this.setState({isOpen2:!drplist2});
  };toggle3 = () => {
    const drplist3=this.state.isOpen3;
    this.setState({isOpen3:!drplist3});
  };toggle4 = () => {
    const drplist4=this.state.isOpen4;
    this.setState({isOpen:!drplist4});
  };
  toggle5 = () => {
    const drplist5=this.state.isOpen1;
    this.setState({isOpen:!drplist5});
  };
     
    render(){


    return(
        <Router>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core
                            </div>
                            
                            <a className="nav-link"  href="/dashboard">
                            <svg className="bi bi-alt" width="1em" height="1em" viewBox="0 0 16 16" fill="darkgrey" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M1 13.5a.5.5 0 00.5.5h3.797a.5.5 0 00.439-.26L11 3h3.5a.5.5 0 000-1h-3.797a.5.5 0 00-.439.26L5 13H1.5a.5.5 0 00-.5.5zm10 0a.5.5 0 00.5.5h3a.5.5 0 000-1h-3a.5.5 0 00-.5.5z" clipRule="evenodd"/>
                            </svg>  Dashboard</a>
                            <div className="sb-sidenav-menu-heading">Interface</div>
                            <a className="nav-link " href="#" onClick={this.toggle}>
                                <svg className="bi bi-columns" width="1em" height="1em" viewBox="0 0 16 16" fill="darkgrey" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M15 2H1v12h14V2zM1 1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V2a1 1 0 00-1-1H1z" clipRule="evenodd"/>
                                <path fillRule="evenodd" d="M7.5 14V2h1v12h-1zm0-8H1V5h6.5v1zm7.5 5H8.5v-1H15v1z" clipRule="evenodd"/>
                              </svg>
                                Layouts
                                <span className="sb-sidenav-collapse-arrow">
                                <svg className="bi bi-chevron-right" width="1em" height="1em" viewBox="0 0 16 16" fill="darkgrey" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z" clipRule="evenodd"/>
                                </svg>
                                </span>
                                </a>

                            <Collapse isOpen={this.state.isOpen}>
                                <Card>
                                    <CardBody>
                                        <nav className="sb-sidenav-menu-nested nav"><a className="nav-link" href="/staticnav">Static Navigation</a><a className="nav-link" href="/lightsidenav">Light Sidenav</a></nav>
                                    </CardBody>
                                </Card>
                            </Collapse>

                      
                             <a className="nav-link " onClick={this.toggle2} href="#" >
                             <svg className="bi bi-book" width="1em" height="1em" viewBox="0 0 16 16" fill="darkgrey" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3.214 1.072C4.813.752 6.916.71 8.354 2.146A.5.5 0 018.5 2.5v11a.5.5 0 01-.854.354c-.843-.844-2.115-1.059-3.47-.92-1.344.14-2.66.617-3.452 1.013A.5.5 0 010 13.5v-11a.5.5 0 01.276-.447L.5 2.5l-.224-.447.002-.001.004-.002.013-.006a5.017 5.017 0 01.22-.103 12.958 12.958 0 012.7-.869zM1 2.82v9.908c.846-.343 1.944-.672 3.074-.788 1.143-.118 2.387-.023 3.426.56V2.718c-1.063-.929-2.631-.956-4.09-.664A11.958 11.958 0 001 2.82z" clipRule="evenodd"/>
                                <path fillRule="evenodd" d="M12.786 1.072C11.188.752 9.084.71 7.646 2.146A.5.5 0 007.5 2.5v11a.5.5 0 00.854.354c.843-.844 2.115-1.059 3.47-.92 1.344.14 2.66.617 3.452 1.013A.5.5 0 0016 13.5v-11a.5.5 0 00-.276-.447L15.5 2.5l.224-.447-.002-.001-.004-.002-.013-.006-.047-.023a12.582 12.582 0 00-.799-.34 12.96 12.96 0 00-2.073-.609zM15 2.82v9.908c-.846-.343-1.944-.672-3.074-.788-1.143-.118-2.387-.023-3.426.56V2.718c1.063-.929 2.631-.956 4.09-.664A11.956 11.956 0 0115 2.82z" clipRule="evenodd"/>
                              </svg>
                                Pages
                                <span className="sb-sidenav-collapse-arrow">
                                <svg className="bi bi-chevron-right" width="1em" height="1em" viewBox="0 0 16 16" fill="darkgrey" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z" clipRule="evenodd"/>
                                </svg>
                                </span>
                            </a>

                            <Collapse isOpen={this.state.isOpen2}>
                                <Card>
                                    <CardBody>
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" href="/staticnav" onClick={this.toggle3}>Authentication
                                            <span className="sb-sidenav-collapse-arrow">
                                <svg className="bi bi-chevron-right" width="1em" height="1em" viewBox="0 0 16 16" fill="darkgrey" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z" clipRule="evenodd"/>
                                </svg>
                                </span>
                                            </a>
                                <Collapse isOpen={this.state.isOpen3}>
                                <Card>
                                    <CardBody>
                                    <nav className="sb-sidenav-menu-nested nav"><a className="nav-link" href="/login">Login</a><a className="nav-link" href="/register">Register</a><a className="nav-link" href="/password">Forgot Password</a></nav>
                                    </CardBody>
                                </Card>
                            </Collapse>
                                <a className="nav-link" href="/lightsidenav" onClick={this.toggle4}>Light Sidenav
                                 <span className="sb-sidenav-collapse-arrow">
                                <svg className="bi bi-chevron-right" width="1em" height="1em" viewBox="0 0 16 16" fill="darkgrey" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z" clipRule="evenodd"/>
                                </svg>
                                </span>
                                </a>
                                 <Collapse isOpen={this.state.isOpen4}>
                                <Card>
                                    <CardBody>
                                    <nav className="sb-sidenav-menu-nested nav"><a className="nav-link" href="/login">Login</a><a className="nav-link" href="/register">Register</a><a className="nav-link" href="/password">Forgot Password</a></nav>
                                    </CardBody>
                                </Card>
                            </Collapse>  
                             
                                    
                <a className="nav-link collapsed" href="#" onClick={this.toggle5}                                       >Error
                <span className="sb-sidenav-collapse-arrow">
                                <svg className="bi bi-chevron-right" width="1em" height="1em" viewBox="0 0 16 16" fill="darkgrey" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z" clipRule="evenodd"/>
                                </svg>
                                </span>
                                </a>
                                 <Collapse isOpen={this.state.isOpen5}>
                                <Card>
                                    <CardBody>
                                    <nav className="sb-sidenav-menu-nested nav"><a className="nav-link" href="/401">401 Page</a><a className="nav-link" href="/404">404 Page</a><a className="nav-link" href="/500">500 Page</a></nav>
                                    </CardBody>
                                </Card>
                           </Collapse>
                           </nav>                  
                        </CardBody>
                    </Card>
                </Collapse>


                           <div className="sb-sidenav-menu-heading">Addons</div>
                            <a className="nav-link" href="charts.html"
                                ><svg className="bi bi-bar-chart" width="1em" height="1em" viewBox="0 0 16 16" fill="darkgrey" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5h-2v12h2V2zm-2-1a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V2a1 1 0 00-1-1h-2zM6 7a1 1 0 011-1h2a1 1 0 011 1v7a1 1 0 01-1 1H7a1 1 0 01-1-1V7zm-5 4a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 01-1 1H2a1 1 0 01-1-1v-3z" clipRule="evenodd"/>
                              </svg>
                                Charts</a
                            ><a className="nav-link" href="tables.html"
                                ><svg className="bi bi-table" width="1em" height="1em" viewBox="0 0 16 16" fill="darkgrey" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z" clipRule="evenodd"/>
                                <path fillRule="evenodd" d="M15 4H1V3h14v1z" clipRule="evenodd"/>
                                <path fillRule="evenodd" d="M5 15.5v-14h1v14H5zm5 0v-14h1v14h-1z" clipRule="evenodd"/>
                                <path fillRule="evenodd" d="M15 8H1V7h14v1zm0 4H1v-1h14v1z" clipRule="evenodd"/>
                                <path d="M0 2a2 2 0 012-2h12a2 2 0 012 2v2H0V2z"/>
                              </svg>
                                Tables</a
    >
                        </div> 
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </nav>
        </div>
        <div className="rightsidenav">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/staticnav">
            <Staticnav />
          </Route>
          <Route path="/lightsidenav">
            <Lightsidenav />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
         
          <Route path="/register">
            <Register/>
          </Route>
         
          <Route path="/password">
            <Password />
          </Route>
         
         
        </Switch>
        </div>
        </div>      
    </Router>

        );
}}
      
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
function Staticnav() {
  return (
    <div>
      <h2>staticnav</h2>
    </div>
  );
}
function Lightsidenav() {
  return (
    <div>
      <h2>lightsidenav</h2>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h2>login</h2>
    </div>
  );
}
function Register() {
  return (
    <div>
      <h2>register</h2>
    </div>
  );
}
function Password() {
  return (
    <div>
      <h2>password</h2>
    </div>
  );
}
    