import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import { Loginrouter } from "./routes/Loginroutes.js";
import { Crudrouter } from "./routes/Crudroutes.js";
dotenv.config()
const port=process.env.PORT || 8300

const connect=mongoose.connect("mongodb+srv://suhail123:5Rgvh1Sdqu0Lk8Wg@cluster0.cc6yh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")





const app=express();

app.use(express.json())
app.use(cors({
    origin:"https://al-resumebuilder.vercel.app/",
    credentials:true
}))
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.json("hello")
})

app.use("/api",Loginrouter)
app.use("/api",Crudrouter)

app.listen(port,connect,()=>{
    console.log("mongoconnected");
    
    console.log(`listening on port ${port}`);
    
})