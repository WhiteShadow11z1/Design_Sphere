import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
    {
        userID : 
        {
            type : String,
            required : true
        },
        postID :
        {
            type : String,
            required : true
        },
        description : String,
        likes : Array,
        comments : Array
    }
);

const Post = mongoose.model("Post", PostSchema);

export default Post;