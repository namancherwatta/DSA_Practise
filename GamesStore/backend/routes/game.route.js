import express from "express";
import { AddGame } from "../controller/game.controller.js";
import { isAuthenticated } from "../middleware/authUser.js";


const router=express.Router()


router.post('/addGame',isAuthenticated,AddGame)


export default router;