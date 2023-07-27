import express from "express";
import User from "../Model/UserModel.js";

const router = express.Router();

export const getUser = async(req, res) =>
{
    const userID = req.params.id;

    try{
        const user = await User.findOne({_id : userID});

        if (user)
        {
            res.status(200).json(user);
        }
        else
        {
            res.status(404).json("No such user exist");
        }
    }
    catch(error)
    {
        res.status(500).json(error);
    }
}

export const updateUser = async(req, res) =>
{
    const userID = req.params.id;
    const {currentUserID} = req.body;

    try 
    {
        if(userID === currentUserID)
        {
            const updatedUser = await User.findOneAndUpdate({_id : userID}, req.body, {new: true});

            res.status(200).json(updatedUser);
        }
        else
        {
            res.status(403).json("You can change only your profile");
        }
    }
    catch(error)
    {
        res.status(500).json(error);
    }
}

export const deleteUser = async(req, res) =>
{
    const id = req.params.id;
    const {currentUserID} = req.body;

    try
    {
        if(id === currentUserID)
        {
            await User.findByIdAndDelete(id);

            res.status(200).json("User Deleted");
        }
        else
        {
            res.status(403).json("You can delete only your profile");
        }
    }
    catch(error)
    {
        res.status(500).json(error);
    }
}

export const followUser = async(req, res) =>
{
    const id = req.params.id;
    const {followUserID} = req.body;

    try
    {
        if(id === followUserID)
        {
            res.status(403).json("You cannot follow yourself");
        }
        else
        {
            const user = await User.findByIdAndUpdate( followUserID, {$push : {followedBy : id}}, {new : true});
            res.status(200).json(`You are now following ${user.firstName}`);
        }
    }
    catch(error)
    {
        res.status(500).json(error);
    }
}

export const unFollowUser = async (req, res) =>
{
    const id = req.params.id;
    const {unfollowUserID} = req.body;

    try 
    {
        if(id === unfollowUserID)
        {
            res.status(403).json("You cannot unfollow yourself");
        }
        else
        {
            const user = await User.findByIdAndUpdate(unfollowUserID, {$pull  : {followedBy : id}}, {new : true});

            if(!user)
            {
                res.status(404).json("No such user exist");
            }
            else
            {
                res.status(200).json(user);
            }
        }
    }
    catch(error)
    {
        res.status(500).json(error);
    }
}