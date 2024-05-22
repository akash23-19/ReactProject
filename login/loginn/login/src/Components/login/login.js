import React from "react";
import "./login.css"

const Login =()=>{
    return(
        <div className="Login">
            <h1>Login</h1>
            <input type="text" placeholder="Enter Your Email"></input>
            <input type="password" placeholder="Enter Your Password" ></input>
            <div className="button">Login</div>
            <div>or</div>
            <div className="button">Register</div>
        </div>
    )
}

export default Login