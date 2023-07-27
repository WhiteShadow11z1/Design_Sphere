import react from "react";
import "./Post.css";
import image from "../../img/Landscape-Color.jpg"
import * as Unicons from "@iconscout/react-unicons";
import Avatar from "../Avatar/Avatar";


function Post()
{
    return(
        <div className = "Post">
            <div className = "AvatarName padding-left">
                <Avatar />
                <div className = "UserName">
                    <p className = "UserName-p" >Name</p>
                    <p className = "UserName-p" style={{fontSize : "1.2rem"}}>@Username</p>
                </div>
            </div>
            <div className = "PostDescription padding-left">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</p>
            </div>
            <div className = "PostMedia">
                <img className = "PostMedia-img" src = {image} alt = "PostImage" />
            </div>
            <div className = "InteractionBar padding-left">
                <div className = "LikeBar">
                    <Unicons.UilHeart />
                    <p>Count</p>
                </div>
                <Unicons.UilComment />
                <Unicons.UilShare />
            </div>
        </div>
    )
}

export default Post;