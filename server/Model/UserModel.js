import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username :
        {
            type : String,
            required : true
        },
        password : 
        {
            type : String,
            required : true
        },
        firstName : String,
        lastName : String,
        posts : Array,
        followedBy : Array, 
    },
    {
        timestamps : true
    }
);

const User = mongoose.model('User', UserSchema);

export default User;