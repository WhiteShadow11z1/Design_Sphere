import express from "express";
import User from "../Model/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = 10;

export const LoginUser = async (req, res) =>
{
    const {userName, password} = req.body;

    try 
    {
        const user = await User.findOne(userName);
        if(user)
        {
            if(bcrypt.compare(password, user.password))
            {
                const userObject = {
                    userName : user.userName,
                    userID : user._id
                }
                const token = jwt.sign(userObject, process.env.JWT_KEY);
                res.status(200).json({token});
            }
            else{
                res.status(401).json("Invalid credentials, please check your username and password!!!");
            }
        }
        else{
            res.status(404).json("No such user exist");
        }
    }
    catch(error)
    {
        res.status(500).json(error);
    }
}


export const SignUp = async (req, res) =>
{
    const {username, password, firstName, lastName} = req.body;
    try
    {
        const user = await User.findOne({username});
        if(!user)
        {
            const salt = await bcrypt.genSalt(10);
            const hashedpassword = await bcrypt.hash(password, salt);

            const newUser = new User({username, password : hashedpassword, firstName, lastName});
            await newUser.save();

            res.status(200).json("Successfully registered");
        }   
        else
        {
            res.status(409).json("User already exists!");
        }
    }
    catch(error)
    {
        res.status(500).json(error);
    }
}