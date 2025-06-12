import express from 'express';
import createToken from "../middlewares/CreateToken.js";
import Authenticate from "../middlewares/Auth.js";
import Usermodel from "../models/Usermodel.js";
import bcrypt from "bcryptjs";
import cookieParser from 'cookie-parser';

const router=express.Router();



router.post('/auth',Authenticate,async(req,res)=>{
    res.json('User Authenticated')
})
router.post('/signup',async(req,res)=>{

    const {username,password,email}=req.body;
        
    const isExisting= await Usermodel.findOne({username});
    if(isExisting){
        return res.json({message:"username already taken"})
    }
    
    const hashedPassword=await bcrypt.hash(password,10);

    const newuser = new Usermodel({username ,password:hashedPassword,email});
    
    await newuser.save();
    
    res.json({message:"User Created"});
});
router.post('/login',async(req,res)=>{
    const {username,password} = req.body;

    const user = await Usermodel.findOne({username});

    if(user){
        const passwordCheck=await bcrypt.compare(password,user.password);
        if(passwordCheck){
            createToken(res,user);
            res.json({message:'Login Success'});
        }else{
            res.json({message:"Incorrect Password"})
        }
    }
    else{
        res.json({message:"user does not exist"});
    }
});
router.post('/logout',async(req,res)=>{
    res.cookie('token',"");
    res.json({message:"User Logged Out"});
});

export default router;