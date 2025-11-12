import React from 'react'
import { IoIosClose } from "react-icons/io";
import { motion ,AnimatePresence} from 'framer-motion';
import {Link } from "react-router-dom"

const Templatemodals = ({Setresumetype,Setisopenmodal}) => {
  return (
<div className="fixed inset-0 z-50 flex items-center justify-center p-6">
{/* Backdrop */}
<div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />


{/* Panel */}
<div className="relative w-full max-w-5xl mx-auto">
    

    <motion.div initial={{opacity:0,scale:0.7}} animate={{opacity:1 ,scale:1}} transition={{duration:0.2}} exit={{opacity:0 }}  className="bg-white rounded-xl shadow-2xl  overflow-hidden ">
    <div className='p-3 flex justify-end text-black text-2xl '>
        <IoIosClose onClick={()=>Setisopenmodal(false)} />
    </div>
{/* Content only: title + grid of cards */}
<div className="px-3 py-3 md:px-8 md:py-10">
<h3 className="text-xl font-semibold mb-4">Templates</h3>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
{/* Card A */}
<div className="bg-white rounded-2xl p-5 shadow-lg transform transition-all hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] cursor-pointer" onClick={()=>{Setresumetype("ats");Setisopenmodal(false)}}>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white font-semibold">A</div>
<div className="flex-1">
<h4 className="font-semibold" >Clean Atsfriendly</h4>
<p className="text-sm text-gray-500">Simple, focused resume — ideal for developers.</p>
</div>
</div>



<div className="mt-4 border rounded-lg p-3 bg-gray-50 flex justify-center ">
    <img src="https://resumesector.com/wp-content/uploads/2025/04/ATS-Friendly-Resume-Template.jpg" className='h-40 w-fit' alt="" />

</div>


<div className="mt-4 flex items-center justify-between">
<div className="text-xs text-gray-500">Skills-focused</div>
<Link className="text-xs font-medium text-indigo-600" to={`/preview/ats`}>Preview</Link>
</div>
</div>


{/* Card B */}
<div className="bg-white rounded-2xl p-5 shadow-lg transform transition-all hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] cursor-pointer" onClick={()=>{Setresumetype("normal");Setisopenmodal(false)}}>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-semibold">B</div>
<div className="flex-1">
<h4 className="font-semibold"  >Portfolio</h4>
<p className="text-sm text-gray-500">Designed for creatives — highlights projects and visuals.</p>
</div>
</div>


<div className="mt-4 border rounded-lg p-3 bg-gray-50 flex justify-center ">
    <img src="https://cvmantra.com/wp-content/uploads/2024/08/cv-format-01.jpg" className='h-40 w-fit' alt="" />

</div>


<div className="mt-4 flex items-center justify-between">
<div className="text-xs text-gray-500" >Visual-first</div>
<Link className="text-xs font-medium text-emerald-600" to="/preview/normal">Preview</Link>
</div>
</div>


{/* Card C */}
<div className="bg-white rounded-2xl p-5 shadow-lg transform transition-all hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] cursor-pointer" onClick={()=>{Setresumetype("modern");Setisopenmodal(false)}}>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-linear-to-br from-rose-400 to-rose-600 flex items-center justify-center text-white font-semibold">C</div>
<div className="flex-1">
<h4 className="font-semibold">Compact Skill-first</h4>
<p className="text-sm text-gray-500">Dense layout for experienced professionals.</p>
</div>
</div>


<div className="mt-4 border rounded-lg p-3 bg-gray-50 flex justify-center ">
    <img src="https://s3.amazonaws.com/thumbnails.venngage.com/template/432ded33-c178-4781-86de-5a39a93d2a7c.png" className='h-40 w-fit' alt="" />

</div>


<div className="mt-4 flex items-center justify-between">
<div className="text-xs text-gray-500">Compact</div>
<Link className="text-xs font-medium text-rose-600" to="/preview/modern">Preview</Link>
</div>
</div>
</div>
</div>
</motion.div>

</div>
</div>
);
}

export default Templatemodals
