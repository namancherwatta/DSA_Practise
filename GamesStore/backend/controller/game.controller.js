import { game } from "../model/game.model.js";



export const AddGame=async(req,res)=>{
    try{  const {gamename,gameURL,category,about}=req.body
      
      console.log(gamename)
    if(!gamename || !gameURL || !category || !about){
        
        return res.status(400).json({message:"Please fill all required fields"})
    }
      const createdBy=req?.user?._id;
      const gamedata={gamename,gameURL,category,about,createdBy}
      const newgame=await game.create(gamedata);
      if(newgame){
        return res.status(201).json({message:"Game is added successfully",newgame})
      }
    }catch(error){
        console.log(error)
        return res.status(500).json({error:"Internal server error"}) 
    }
    };