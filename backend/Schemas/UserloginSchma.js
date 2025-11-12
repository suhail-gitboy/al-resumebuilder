import mongoose from "mongoose";



const NewSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},

    password:{type:String,required:true}
})


const Loginmodal=mongoose.model("registeration",NewSchema)

export default Loginmodal