import React, { useState } from 'react'
import { Outlet } from 'react-router'
import Nav from './Nav'
import axios from 'axios';

const Mainlayout = ({name,Setunsername}) => {
  const [userInformation, setUserInformation] = useState({
  // 🔹 Linked User ID (optional, filled after login)
imageprofile:"",
  // 🔹 Personal Details
  personalDetails: {
    name: "",
    email: "",
    phone: "",
    title: "",
    about: "",
    address: "",
  },

  // 🔹 Social Links
  media: {
   linkedin: "",
    github:  "",
    portfolio:  "",
 
  },

  // 🔹 Skills
  skills: 
   
  {
    skillone:"",
    skilltwo:"",
    skillthree:""
  },

  // 🔹 Tools
 

  // 🔹 Experience Section
  experience: {
    company:"",
  job:"",
  role:""
  }
    
  ,

  // 🔹 Education Section
  education: {
    course:"",
college:"",
passyear:"",
grade:""
  }
   
  ,
});

  const [loginmodal,Setmodallogin]=useState(false)
  const [isUpdate,Setupdate]=useState(null)
const [coverLetter,Setcoverletter]=useState(false)

  const Handleupdate=()=>{
    axios.put("")
  }
  return (
  <>
  <Nav name={name}  Setunsername={Setunsername} userInformation={userInformation} coverLetter={coverLetter} Setcoverletter={Setcoverletter}  loginmodal={loginmodal} Setmodallogin={Setmodallogin}/>
  <Outlet context={{Setmodallogin,userInformation,setUserInformation,Setcoverletter ,isUpdate,Setupdate}}/>
  </>
  )
}

export default Mainlayout
