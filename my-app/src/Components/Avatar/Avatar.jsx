import React from "react";
import "./Avatar.css";
import avatarImage from "../../img/human-3782189_640.jpg";

function Avatar()
{
    return(
        <div className = "Avatar">
            <img src = {avatarImage} alt = "Avatar"></img>
        </div>
    )
}

export default Avatar;