import React from "react";
import "./Profile.css";
import coverImage from "../../img/Landscape-Color.jpg";
import Avatar from "../Avatar/Avatar";

function Profile(props)
{
    return(
        <div className = "Profile-Container align-center">
            <div className = "Logo align-center">
                <p className = "Logo-p">Design  Sphere</p>
            </div>
            <div className = "Profile-Card">
                <div className = "Image-Card align-center ">
                    <img className = "Image-Card-img" src = {coverImage} alt = "Cover-Banner" />
                    <div className = "AvatarCard">
                        <Avatar />
                    </div>
                </div>
                <div className = "User-Details align-center">
                    <p className = "User-details-p align-center"><b>Name</b></p>
                    <p className = "User-details-p align-center">@ userName</p>
                </div>
                <div className = "Description align-center">
                    <p className = "Description-p">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                </div>
                <div className = "Full-Profile align-center">
                    <hr className = "Full-Profile-Horizontal" />
                    <button type = "submit" className = "Full-Profile-Button">View Full Profile</button>
                </div>        
            </div>
            <div className = "Create-Post align-center">
                <div className = "Overlay">
                    <div className = "Modal">
                        <form className = "Image-upload">
                            <input type = "file" name = "image" className = "Image-Upload-Input"></input>
                            <input type = "text" name = "description"></input>
                            <button type = "submit">Share</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;