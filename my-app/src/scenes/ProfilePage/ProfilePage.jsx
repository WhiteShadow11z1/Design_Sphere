import React from "react";
import Post from "../../Components/Post/Post.jsx";
import "./ProfilePage.css";

function ProfilePage()
{
    return(
        <div className = "ProfilePage-Container">
            <div className = "Profile-Card-Extended">
                <div className = "User-Posts">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </div>
    );
}
export default ProfilePage;