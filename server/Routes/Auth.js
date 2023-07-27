import express from "express";
import {LoginUser, SignUp} from "../Controller/AuthController.js";

const AuthRoutes = express.Router();

AuthRoutes.post("/login", LoginUser);
AuthRoutes.post("/signup", SignUp);

export default AuthRoutes;