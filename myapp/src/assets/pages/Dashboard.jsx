import axios from 'axios'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useOutletContext } from 'react-router'
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime";
import { toast } from 'sonner'
dayjs.extend(relativeTime);
const ResumeDashboard = () => {
const [resumes,Setresumes]=useState([])
console.log(resumes,"resumes");
const {userInformation,setUserInformation,name}=useOutletContext()
const Navigate=useNavigate()
  useEffect(()=>{
    axios.get("https://al-resumebuilder.onrender.com/api/getdata",{withCredentials:true})
    .then(res=>{
      console.log(res.data.resume);
      Setresumes(res.data.resume)

      
    })
  },[])

const {isUpdate,Setupdate}=useOutletContext()


  const handleEdit=(data,id)=>{
setUserInformation(data)
Navigate("/generate")
Setupdate(id)


  }

  const Handledelete=(id)=>{
    axios.delete(`https://al-resumebuilder.onrender.com/api/delete/${id}`,{withCredentials:true}).then(res=>{
      if(res.data.message){
        setTimeout(() => {
          toast.success(res.data.message)
          
        }, 1000);
location.reload()
      }
    
      
    })
  }
  return (
    <motion.div initial={{opacity:0.5}} animate={{opacity:1}} transition={{duration:0.3}} exit={{opacity:0.4}} className="min-h-screen bg-linear-to-br from-black via-[#0a0014] to-[#1c0029] text-gray-200 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Resume Builder Dashboard</h1>

        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <input
            type="text"
            placeholder="Search resumes..."
            className="w-full sm:w-80 px-4 py-2 rounded-lg bg-[#0f0a1f] border border-[#2d1b46] focus:outline-none focus:border-purple-500"
          />
          <Link to="/generate" className="bg-linear-to-r from-purple-700 to-purple-500 px-4 py-2 rounded-lg font-medium hover:scale-105 transition-transform">
            + Create Resume
          </Link>
        </div>

        {/* Recently Created Section */}
        <h2 className="text-xl font-semibold text-purple-400 mb-4">Recently Created</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Resume Card */}


{resumes.length>0?resumes.map((data,ind)=>(
   <div className="bg-[#0e061a] border border-[#2a1b3f] p-4 rounded-2xl shadow-lg hover:shadow-purple-900/30 transition-all">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-white">{data.personalDetails.title} Resume</h3>
              <h3 className="text-sm font-semibold text-white">{data.personalDetails.name}</h3>
              <span className="text-xs text-gray-400">1 pages</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">Modern template • Updated {dayjs(data.updatedAt).fromNow()}</p>

            <div className="w-full h-2 bg-[#1a102b] rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-linear-to-r from-purple-700 to-purple-500"></div>
            </div>
            <p className="text-xs text-gray-400 mt-2">Progress: 75%</p>

            <div className="mt-4 flex gap-2">
              <Link className="px-3 py-1 text-sm bg-[#1b0b2f] border border-[#3a2360] rounded-md hover:bg-[#26123d]" to={`/view/${data._id}`}>View</Link>
              <button className="px-3 py-1 text-sm bg-[#1b0b2f] border border-[#3a2360] rounded-md hover:bg-[#26123d]" onClick={()=>handleEdit(data,data._id)}>Edit</button>
              <button className="px-3 py-1 text-sm bg-[#1b0b2f] border border-[#3a2360] rounded-md hover:bg-[#26123d]" onClick={()=>Handledelete(data._id)}>delete</button>
            </div>
          </div>
)):<h2 className='bg-white/10 p-3 rounded-md'>you haven't created yet</h2>}

     

         
        </div>
      </div>
    </motion.div>
  )
}

export default ResumeDashboard
