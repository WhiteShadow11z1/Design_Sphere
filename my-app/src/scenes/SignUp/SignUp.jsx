import React from "react";
import CoverImage from "../../img/Tablet login-rafiki.svg"
import "./SignUp.css";

function SignUp()
{
    return(
        <div className = "SignUp-Container">
            <form className = "SignUp-Form" action = "/signup" method="post">
                <input name = "userName" placeholder="User Name"></input>
                <input name = "firstName" placeholder = "First Name"></input>
                <input name = "lastName" placeholder = "Last Name"></input>
                <input type = "email" placeholder = "Email"></input>
                <input type = "password" placeholder="Password"></input>
                <button type = "submit">Sign Up</button>
            </form>

            <div className = "Image-Container">
                <img className = "Image-Container-img" src = {CoverImage} alt = "signUp"></img>
            </div>
        </div>
    );
}

export default SignUp;