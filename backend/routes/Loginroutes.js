import express from "express";
import Loginmodal from "../Schemas/UserloginSchma.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const Secretkey="Mykey"
export const  Loginrouter=express.Router()

Loginrouter.get("/signup",(req,res)=>{
    res.json("hello")
})

Loginrouter.post("/signup",async(req,res)=>{

    const {name,email,password}=req.body;
console.log(name,email,password);

    const datas=await Loginmodal.findOne({email})
    if(datas){
      return  res.json({message:"email already there"})
    }

    try {
        const Hashedpassword=await bcrypt.hash(password,10)
        const newuser=new Loginmodal({
            name,
            email,
            password:Hashedpassword
        })
        await newuser.save()

        return res.json({status:true,message:"successfully sign in"})
        
    } catch (error) {
          console.log(error);
          
    }

})

Loginrouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
console.log(email);

    const Checkif=await Loginmodal.findOne({email})
    if(!Checkif){
        return res.json({message:"its not found"})
    }

    const Hashecmpared=await bcrypt.compare(password,Checkif.password)

    if(!Hashecmpared){
         return res.json({message:"wrong password"})
    }

    const token =jwt.sign({email:Checkif.email},Secretkey,{expiresIn:"1hr"})
    console.log(token);
    
res.cookie("token",token,{
    httpOnly:true,
    secure: true,
    sameSite: "none",
    maxAge: 3600 * 1000,
})

return res.json({status:true,message:"login successfully",name:Checkif.name})
})


Loginrouter.post("/logout",(req,res)=>{
    res.clearCookie("token")

    return res.json({message:"logout successfully",status:true})
})


Loginrouter.get("/checklogin",(req,res)=>{
    const token=req.cookies.token

    if(!token){
        return res.json({isLogged:false,message:"you have to login first"})
    }

    const Decoded=jwt.verify(token,Secretkey)

    if(Decoded){
           return res.json({isLogged:true,message:"already loginned"})

    }
})

Loginrouter.get("/getname",async(req,res)=>{
    const token=req.cookies.token
    const Decoded=jwt.verify(token,Secretkey)
    if(Decoded){
        
        
const Getuser=await Loginmodal.findOne({email:Decoded.email})
return res.json({name:Getuser.name})
    }
    
})