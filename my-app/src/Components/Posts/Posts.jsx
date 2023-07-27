import React from "react";
import "./Posts.css";
import Navbar from "../Navbar/Navbar";
import Post from "../Post/Post";


function Posts()
{
    return(
        <div className = "Posts-Container align-center">
            <Navbar />
            <div className = "Posts">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default Posts;