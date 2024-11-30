import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import userRoute from "./routes/user.route.js"
import bodyParser from 'body-parser';
import multer from 'multer';


dotenv.config()
const port = process.env.port
const app = express()
const mongourl=process.env.mongoURI
const upload = multer()
 
//middleware
app.use(express.json());
app.use(upload.any());

//Connecting to DB
try {
    mongoose.connect(mongourl)
    console.log("Connected to DB")
} catch (error) {
    console.log(error)
}


//Define routes
app.use("/api/users",userRoute)



app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})