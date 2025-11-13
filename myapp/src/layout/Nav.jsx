import React, { useEffect, useState } from 'react'
import { FaRegUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { FiAlignLeft } from "react-icons/fi";
import Sidebar from './Sidebar';
import { Link } from 'react-router';
import {motion} from "framer-motion"
import Login from '../assets/modals/Login';
import Signup from '../assets/modals/Signup';
import axios from 'axios';
import { IoIosLogOut } from 'react-icons/io';
import { toast } from 'sonner';
import CoverLetterModal from '../assets/modals/Coverletter';
const Nav = ({name , Setunsername,loginmodal,Setmodallogin,coverLetter,Setcoverletter,userInformation}) => {

  const [signmodal,Setmodalsign]=useState(false)
  
  const [translate,Settranslate]=useState(false)

  const Handlelogut=()=>{
    axios.post("https://al-resumebuilder.onrender.com/api/logout",{}, { withCredentials: true }).then((res)=>{
       localStorage.removeItem("username")
      if(res.data.status){
     

          toast.success(res.data.message)
       
 
        Setunsername(null)
      }
    })
  }

useEffect(()=>{
    axios.get("https://al-resumebuilder.onrender.com/api/getname",{ withCredentials:true}).then(res=>{
      console.log(res.data);
      Setunsername(localStorage.getItem("username"))
      
    })
  },[])

  return (
    <div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
           <header className="w-full py-5 px-10  flex justify-between items-center bg-[#1a1a23] shadow-lg">
                  <div className={`w-2/3 ${translate?"translate-x-0":"-translate-x-full"} transform transition-transform duration-200 fixed md:hidden z-20 h-full left-0 top-0 bottom-0`}>
<Sidebar Handlelogut={Handlelogut} Setranslate={Settranslate} name={name} Setmodalsign={Setmodalsign}/>
      </div>
        <h1 className="text-3xl font-extrabold text-purple-500">ResumeBuilder</h1>
        <nav className=" gap-8 text-gray-300 font-medium hidden md:flex">
          <Link to="/" className="hover:text-purple-400">Home</Link>
          <Link to="/generate" className="hover:text-purple-400">Templates</Link>
          <Link to="/dashboard"  className="hover:text-purple-400">history</Link>
      
        </nav>
       {
        name==null?( <button onClick={()=>Setmodalsign(true)} className="bg-purple-600 hidden md:flex hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold">
         <FaRegUser className='text-xl mr-2 text-white' />   register
        </button>):(<button  className="bg-purple-600 hidden md:flex hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold" onClick={Handlelogut}>
         <IoIosLogOut className='text-xl mr-2 text-white' />  log-out
        </button>)
       }
        <button className='md:hidden'onClick={()=>Settranslate(!translate)}><FiAlignLeft className='text-2xl text-purple-800' /></button>
      </header>
      {/*login modal*/}
      {loginmodal&&<Login Setsign={Setmodalsign} Setlogin={Setmodallogin} name={name}  Setunsername={Setunsername} />}

      {/*signmodal modal*/}
      {signmodal&&<Signup Setsign={Setmodalsign} Setlogin={Setmodallogin} />}
      {coverLetter&&<CoverLetterModal userInformation={userInformation} Setcoverletter={Setcoverletter}/>}

    </div>
  )
}

export default Nav
