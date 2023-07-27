import express from "express";
import { createPost, deletePost, getUserPosts, likePost, unlikePost } from "../Controller/PostController.js";


const router = express.Router();

router.post("create/:id", createPost );
router.put("like/:id", likePost);
router.put("dislike/:id", unlikePost);
router.delete("delete/:id", deletePost);
router.get("user-feed/:id", getUserPosts);

export default router;