import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Media from "./models/Media.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello from backend");
});
app.post("/api/media", async (req, res) => {
    try{
        const { title, category, status, rating } = req.body;
        const newMedia = new Media({ title, category, status, rating });
        await newMedia.save();
        res.status(201).json(newMedia);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating media", error });
    }
});
app.get("/api/media", async (req, res) => {
    try{
        const mediaList = await Media.find();
        res.status(200).json(mediaList);
    }
    catch (err){
        res.status(500).json({ message: "Error fetching media", err });
    }
})
app.delete('/api/media/:id', async (req, res) => {
    try{
        const {id}= req.params;
        await Media.findByIdAndDelete(id);
        res.status(200).json({ message: 'Item deleted successfully' });
    }
    catch (err){
        res.status(500).json({ message: 'Error deleting item', err });
    }
});
const port=process.env.PORT;
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});