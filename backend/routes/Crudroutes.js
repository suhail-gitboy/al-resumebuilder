import express from "express";
import Resumemodel from "../Schemas/ResumeSchema.js";
import { Protuctmiddleware } from "../Middleware.js";

import { GoogleGenerativeAI } from "@google/generative-ai";

export const Crudrouter=express.Router()

Crudrouter.post("/save",Protuctmiddleware, async(req,res)=>{
    const {resumedata}=req.body
console.log(resumedata);

 const Useremail=req.user.email

const {personalDetails}=resumedata;

const checkifnotfull=Object.values(personalDetails).some((val)=>val.trim()==="")



 const Storedata={
    ...resumedata,Useremail
 }
const Checkresume=await Resumemodel.findOne(Storedata)
if(Checkresume){
   return res.json({message:"already there"})
}

if(checkifnotfull){
   return res.json({messsage:"pleae fill all the details"})
}

    const datasaved=new Resumemodel(Storedata)

   await datasaved.save()

   return res.json({status:true,message:"saved to dashboard"})


})


Crudrouter.get("/getdata",Protuctmiddleware,async(req,res)=>{
   const Stichedemail=req.user.email
   
   
  try {
    const userData=await Resumemodel.find({Useremail:Stichedemail})
   console.log(userData);
   
  return res.status(201).json({resume:userData})
  } catch (error) {
   return res.status(500).json({message:"server error",error:error.message})
   
  }


})


Crudrouter.delete("/delete/:id",Protuctmiddleware,async(req,res)=>{
   const {id}=req.params

await Resumemodel.findByIdAndDelete({_id:id})
return res.json({message:"deleted successfully"})
})


Crudrouter.put("/update/:id",Protuctmiddleware,async(req,res)=>{

   const {id}=req.params
console.log(id);
const {resumedata}=req.body
console.log(resumedata,"resumedata");


   await Resumemodel.findByIdAndUpdate(id,resumedata,{new:true})
})

 const genAI = new GoogleGenerativeAI(process.env.API_KEY || "AIzaSyAeZXdPWioSj4cECTzMRn9TX8OcvKSCFXc");
Crudrouter.post("/aioutput", async (req, res) => {
  try {

   const {prompt}=req.body
    // you can send custom prompt from frontend

    // ✅ Choose model
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // ✅ Generate response

       const result = await model.generateContent(`create a three line introduction for ${prompt},no need more than four lines and only text no decorative items`);
    const text = result.response.text();

    console.log("✅ Gemini Output:", text);
    return res.json({status:true, aiprompt: text });


  } catch (error) {
    console.error("❌ Gemini Error:", error);
    return res.status(500).json({ error: error.message });
  }
});


Crudrouter.post("/ailetter",Protuctmiddleware,async(req,res)=>{
   try {


      const {letterprompt}=req.body
      console.log(letterprompt.skills.join(","));
       const model=genAI.getGenerativeModel({model:"gemini-2.5-flash"})
   
         
   
    const result=await model.generateContent(`write a professional cover letter for the user with his details ${letterprompt.name} ,role:${letterprompt.role} company:${letterprompt.company} companyloaction:${letterprompt.companyLocation},Experience:${letterprompt.experience},Skills:${letterprompt.skills.join(",")},email:${letterprompt.email} in date:${new Date().toLocaleDateString()}`)
      const output=result.response.text()
      console.log("gemini output",output);

      return res.json({status:true,ailetter:output})
 

     
   } catch (error) {
      return res.status(500).json({error:error.message})
      
   }
})

Crudrouter.post("/aiexperience",async(req,res)=>{
     try {

   const {experienceprompt}=req.body
    // you can send custom prompt from frontend
console.log(experienceprompt);

    // ✅ Choose model
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // ✅ Generate response

       const result = await model.generateContent(`create a four line job experience  with heading for ${experienceprompt},no need more than four lines and only text no decorative items`);
    const text = result.response.text();

    console.log("✅ Gemini Output for exxperience:", text);
    return res.json({status:true, aiworkexperience: text });


  } catch (error) {
    console.error("❌ Gemini Error:", error);
    return res.status(500).json({ error: error.message });
  }
})