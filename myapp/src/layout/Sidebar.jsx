import React from 'react'
import { IoIosClose } from "react-icons/io";
import { NavLink } from 'react-router'
import { FaRegUser } from "react-icons/fa";
import { IoIosLogOut } from 'react-icons/io';
const Sidebar = ({Setranslate,Setmodalsign,name,Handlelogut}) => {


  return (
    <div className='bg-neutral-800 p-5 h-screen '>
        <div className='mt-5 flex justify-end' onClick={()=>Setranslate(false)}>
<IoIosClose className='text-4xl text-white'/>
        </div>

       <nav className=" gap-8 text-gray-300 font-medium flex flex-col space-y-1 mt-20">
       {name==null? <button onClick={()=>Setmodalsign(true)} className="bg-purple-600 flex hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold">
        <FaRegUser className='text-xl mr-2 text-white' />  register
        </button>:<button  className="bg-purple-600  flex justify-center items-center hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold" onClick={Handlelogut}>
                 <IoIosLogOut className='text-xs mr-2 text-white' />  log-out
                </button>}
          
          <NavLink to="/" className={({isActive})=>isActive?"bg-purple-500 py-3 px-3 rounded-md" : "hover:text-purple-300  py-3 px-4"}>Home</NavLink>
          <NavLink to="/generate" className={({isActive})=>isActive?"bg-purple-500 py-3 px-3 rounded-md" : "hover:text-purple-300  py-3 px-4"}>Templates</NavLink>
          <NavLink to="/dashboard" className={({isActive})=>isActive?"bg-purple-500 py-3 px-3 rounded-md" : "hover:text-purple-300  py-3 px-4"}>history</NavLink>

        </nav>
    </div>
  )
}

export default Sidebar
