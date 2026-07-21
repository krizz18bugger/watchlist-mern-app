import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {appMedia} from './routes/mediaRoute.js';
import {appSign} from './routes/login.js';
import auth from './middleware/auth.js'
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

//integrating routers
app.use('/api', auth, appMedia);
app.use('/auth', appSign);
//Connecting mongoDB
const port=process.env.PORT;
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});