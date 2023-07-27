import express from "express";
import Post from "../Model/PostModel.js";
import User from "../Model/UserModel.js";

export const getUserPosts = async(req, res) =>
{
    const userId = req.params.id;

    try
    {
        const user = await User.findById(userId);
        if(user)
        {
            const posts = await Post.find({userID : userId});
            res.status(200).json(user);
        }
        else
        {
            res.status(404).json("No such user exists");
        }
    }
    catch(error)
    {
        res.status(500).json(error);
    }
}

export const createPost = async(req, res) =>
{
    const id = req.params.id;

    try{
        const user = await User.findOne({_id : id});
        if(user)
        {
            const newPost = new Post(req.body);
            const updateUser = await User.findByIdAndUpdate(id, {$push : {posts : newPost._id}}, {new : true});

            await newPost.save();

            res.status(200).json(newPost);
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

export const likePost = async(req, res) =>
{
    const postID = req.params.id;
    const {userID} = req.body;

    try
    {
        const post = await Post.findOne({_id : postID});
        if(post)
        {
            const post = await Post.findByIdAndUpdate(postID, {$push : {likes : userID}}, {new : true});
            res.status(200).json(post);
        }
        else
        {
            res.status(404).json("The resources youre looking for no longer exists");
        }
    }
    catch(error)
    {
        res.status(500).json(error);
    }
}

export const unlikePost = async(req, res) =>
{
    const postID = req.params.id;
    const {userID} = req.body;

    try
    {
        const post = await Post.findOne({_id : postID});
        if(post)
        {
            const post = await Post.findByIdAndUpdate(postID, {$pull : {likes : userID}}, {new : true});
            res.status(200).json(post);
        }
        else
        {
            res.status(404).json("The resources youre looking for no longer exists");
        }
    }
    catch(error)
    {
        res.status(500).json(error);
    }   
}

export const deletePost = async(req, res) =>
{
    const postID = req.params.id;
    const {userID} = req.body;

    try 
    {
        const user = await User.findOne({posts : postID});

        if(user)
        {
            const post = new Post.findByIdAndDelete(postID);
            res.status(200).json("Post Deleted");
        }
        else
        {
            res.status(403).json("Only the owner can delete post");
        }
    }
    catch(error)
    {
        res.status(500).json(error);
    }
}