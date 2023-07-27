import React from "react";
import "./Login.css";
import LoginImage from "../../img/Digital lifestyle-pana.svg"

function Login()
{
    return(
        <div className = "Login-Container align-center-Login">
            <div className = "Form-Container">
                <form className="align-center-Login" action = "/" method = "post">  
                    <p style = {{justifyContent:"flex-start", marginBottom : "0.5rem"}}>Email</p>
                    <input className = "Login-input" type = "email" placeholder = "Email"></input>
                    <p>Password</p>
                    <input className = "Login-input" type = "password" placeholder = "Password"></input>
                    <button className = "Login-button" type = "submit">Login</button> 
                </form>
            </div>
            <div className = "Login-Image">
                <img className = "Login-Image-img" src = {LoginImage} alt = "Login"></img>
            </div>
        </div>
    );
}

export default Login;