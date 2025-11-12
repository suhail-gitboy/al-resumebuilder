import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const Secretkey="Mykey";


export const Protuctmiddleware=(req,res,next)=>{
    const token=req.cookies.token;
    console.log(token);

    if(!token){
        return res.status(401).json({message:"unauhtorised"})
    }
    const Decoded=jwt.verify(token,Secretkey)

    req.user=Decoded

    next()

}