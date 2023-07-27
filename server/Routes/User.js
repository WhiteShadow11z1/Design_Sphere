import express from "express";
import {deleteUser, followUser, getUser, unFollowUser, updateUser } from "../Controller/UserController.js";

const router = express.Router();

router.get("/:id", getUser);
router.put("/update/:id", updateUser);
router.put("/follow/:id", followUser);
router.put("/unfollow/:id", unFollowUser);
router.delete("/delete/:id", deleteUser);

export default router;