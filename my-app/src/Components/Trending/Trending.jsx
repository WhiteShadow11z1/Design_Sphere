import React from "react";
import "./Trending.css";
import ProfilePicture from "../../img/human-3782189_640.jpg";

function Trending()
{
    return(
        <div className = "Trending-Container">
            <div className = 'LoginCredentials'>
                <img className = "ProfilePicture" src = {ProfilePicture} alt = "Profile" />
                <p className = "LoginUserName">Username</p>
            </div>
            <div className = "Trending">
                <h3>Trending</h3>
                <p>#HelloWorld</p>
            </div>
        </div>
    );
}

export default  Trending;