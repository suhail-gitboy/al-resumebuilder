import React from 'react'
import { Trash2, Cpu } from 'lucide-react'

// Full-width top bar component
// Usage: <TopBar username="Suhail Ameer" onDelete={()=>{}} onAI={()=>{}} />
export default function TopBar({Setcoverletter, name, setUserInformation, onAI = () => {},Setresumetype,Resumetype,  Setisopenmodal }){



  const onDelete=()=>{
    setUserInformation({
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
   
  
});}
  return (
    <header className="w-full bg-neutral-900 rounded-lg">
      <div className="max-w-full mx-auto px-4 py-4 rounded-md">
        <div className="flex items-center justify-between h-16">
          {/* Left: Username */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-br from-purple-600 to-purple-400 shadow-lg">
              {/* Initials circle */}
              <span className="text-white font-semibold">{("usernane"|| 'U').split(' ').map(n=>n[0]).slice(0,2).join('')}</span>
            </div>
            <div>
              <div className="text-white font-medium">{name?name:"username"}</div>
              <div className="text-purple-300 text-xs">Resume • Theme</div>
            </div>
          </div>

          {/* Right: Actions (Resume theme label + icons) */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-linear-to-r from-purple-900 via-purple-700 to-purple-600 text-white">
              <h2  className="text-sm px-4 font-semibold py-1" onClick={()=>Setisopenmodal(true)}>
               {Resumetype}
              </h2>
            </div>

            {/* AI button - blue background with icon */}
            <button
              onClick={()=>Setcoverletter(true)}
              aria-label="AI tools"
              className="flex items-center gap-2 px-3 py-1 rounded-md bg-blue-600 hover:bg-blue-500 transition-shadow shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10">
                <Cpu className="w-4 h-4 text-white" />
              </div>
              <span className="text-white text-sm font-bold bg-linear-to-r from-blue-600 to to-blue-500">Coverletter</span>
            </button>

            {/* Delete button - red icon only */}
            <button
              onClick={onDelete}
              aria-label="Delete"
              className="flex items-center justify-center w-10 h-10 rounded-md bg-red-600 hover:bg-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              <Trash2 className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
  }


