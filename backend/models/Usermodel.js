import mongoose from "mongoose";
import { Schema } from "mongoose";

const userschema= new Schema({
    username:{  
        type:String,
        required:true,
        unique:true
            },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    isadmin:{
        type:Boolean,
        default:false
    }
})

const Usermodel=mongoose.model("user",userschema);

export default Usermodel;