import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoutes from "./Routes/Auth.js";
import UserRoutes from "./Routes/User.js";
import PostRoutes from "./Routes/Post.js";
import cors from 'cors';

dotenv.config();

const app = express();
app.use(bodyParser.json({extended :true}));
app.use(bodyParser.urlencoded({extended :true}));
app.use(cors());

app.use("/auth", AuthRoutes);
app.use("/user", UserRoutes);
app.use("/posts", PostRoutes);

await mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser : true, useUnifiedTopology : true})
.then(
    app.listen(3000, (req, res) => {
        console.log("Server has started");
    })
).catch( (error) => {
    console.log(`Database refused to connect + ${error}`);
});