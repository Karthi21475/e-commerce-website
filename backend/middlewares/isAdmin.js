import jwt from "jsonwebtoken";

const isAdmin=async(req,res,next)=>{
    if(!res.user.isadmin){
        return res.json({message:'Access denied! Admins only.'});
    }
    
    next();
}
export default isAdmin;