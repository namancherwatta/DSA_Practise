import { User } from "../model/user.model.js";
import jwt from "jsonwebtoken";

//authenticate
export const isAuthenticated=async(req,res, next)=>{
    try {

      const token = req.cookies.jwt
      if(!token){
        return res.status(401).json({error:"User not authenticated"})
      }
      const decoded= jwt.verify(token,process.env.jwtSecretKey);
      console.log(decoded)
      const user=await User.findById(decoded.userID);
      if(!user){
        return res.status(404).json({error:"User not found"})

      }
      req.user=user
      //console.log("Middleware"+token)
      next();
        
    } catch (error) {
        console.log("Error while authenticating"+error)
        return res.status(401).json({error:"User not authenticated"})
    
    }
}


//authorise