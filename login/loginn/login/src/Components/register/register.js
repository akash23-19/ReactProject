import React from "react";
import "./register.css"

const Register =()=>{
    return(
        <div>
            <h1>Register</h1>
            <input type="text" placeholder="Enter Your Name"></input>
            <input type="text" placeholder="Your Email"></input>
            <input type="password" placeholder="Your Password" ></input>
            <input type="password" placeholder="Re-Enter Your Password" ></input>
            <div className="button">Register</div>
            <div>or</div>
            <div className="button">Login</div>
        </div>
    )
}

export default Register