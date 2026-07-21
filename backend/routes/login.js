import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const appSign = express();

appSign.post('/signup', async (req, res)=>{
    const { email, password} = req.body;
    try{
       const userExist = await User.findOne({email});
       if(userExist){
        res.status(201).json({message: "User already exists!"});
       }
       const passwordHashed = await bcrypt.hash(password, 10);
       const newUser = new User({email, password: passwordHashed});
       await newUser.save();
       res.status(200).json({message: "SignUp Successful"});
}
    catch(err){
        res.status(404).json({message: "SignUp Failed"});
    }
});

appSign.post('/login', async (req, res)=>{
    const {email, password} = req.body;
    try{
    const userExist = await User.findOne({email});
    if(!(userExist)){
        res.status(400).json({message: "Invalid Credentials"})
    }
    if(await bcrypt.compare(password, userExist.password)){
        const token = jwt.sign({userId: userExist._id}, process.env.JWT_SECRET_KEY, {expiresIn: '1d'}
        );
        res.status(200).json({message: "Login Successful", token});
    }
    res.status(400).json({message: "Password is incorrect. Try again!"});
    }
    catch(err){
        res.status(400).json({message: "Server Error!"})
    }
});
