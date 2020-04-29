import React, { Component } from "react";
import './login.css'

class login extends Component {
    render() {
        return (
            <div className="container login-sec">
                <div className="row justify-center">
                    <div className="col-lg-5">
                        <div className="login mt-5">
                            <div className="">
                            <img src="./login/techmahindra.png"/>
                            <h3 class="text-center font-weight-light my-4">Login</h3></div>
                            <div className="mx-4">
                                <form>
                                    <div className="form-group">
                                    <label className=" mb-1" for="inputEmailAddress">Email</label><input className="form-control py-4" id="inputEmailAddress" type="email" placeholder="Enter email address"/></div>
                                    <div className="form-group">
                                    <label className=" mb-1" for="inputPassword">Password</label><input className="form-control py-4" id="inputPassword" type="password" placeholder="Enter password"/></div>
                                    <div className="my-5 login-btn"> <a class="btn btn-primary" href="#">Login</a>
                                    </div>
                                </form>
                            </div>                               
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default login;
                    
