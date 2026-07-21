import express from 'express';
import Media from "../models/Media.js";
export const appMedia = express();
appMedia.post("/media", async (req, res) => {
    try{
        const { title, category, status, rating } = req.body;
        const newMedia = new Media({userId: req.user.userId, title, category, status, rating });
        await newMedia.save();
        console.log(req.user);
        res.status(201).json(newMedia);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating media", error });
    }
});
appMedia.get("/media", async (req, res) => {
    try{
        const mediaList = await Media.find({userId: req.user.userId});
        console.log(mediaList);
        res.status(200).json(mediaList);
    }
    catch (err){
        res.status(500).json({ message: "Error fetching media", err });
    }
})
appMedia.delete('/media/:id', async (req, res) => {
    try{
        const {id}= req.params;
        await Media.findOneAndDelete({_id: id, userId: req.user.userId});
        res.status(200).json({ message: 'Item deleted successfully' });
    }
    catch (err){
        res.status(500).json({ message: 'Error deleting item', err });
    }
});
appMedia.put('/media/:id', async (req, res) => {
    try{
        const {id}= req.params;
        const {status}= req.body;
        const updatedMedia = await Media.findOneAndUpdate({_id: id, userId: req.user.userId}, {status}, {new: true});
        res.status(200).json(updatedMedia);
    }
    catch (err){
        res.status(500).json({ message: 'Error updating item', err });
    }
});