import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import userRoute from "./routes/user.route.js"
import gamesRoute from "./routes/game.route.js"
import bodyParser from 'body-parser';
import multer from 'multer';
import cookieParser from 'cookie-parser';
import cors from "cors";


dotenv.config()
const port = process.env.port
const app = express()
const mongourl=process.env.mongoURI
const upload = multer()
 
//middleware
app.use(express.json());
app.use(upload.any());
app.use(cookieParser())
app.use(cors({ origin: 'http://localhost:5173' }));

//Connecting to DB
try {
    mongoose.connect(mongourl)
    console.log("Connected to DB")
} catch (error) {
    console.log(error)
}


//Define routes
app.use("/api/users",userRoute)
app.use("/api/games",gamesRoute)



app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})