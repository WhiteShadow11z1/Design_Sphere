import React from "react";
import Profile from "../../Components/ProfileCard/Profile";
import Posts from "../../Components/Posts/Posts";
import Trending from "../../Components/Trending/Trending";
import AuthPage from "../Authentication/Auth";
import "./Home.css";

function Home()
{
    return(
        <div className = "HomePage">
            <Profile />
            <Posts />
            <Trending /> 
        </div>
    );
}

export default Home;