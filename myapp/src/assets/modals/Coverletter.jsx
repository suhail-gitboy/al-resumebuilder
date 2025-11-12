import React, { useState } from "react";
import CoverLetterPDF from "./Coverletterpdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { TextField } from "@mui/material";
import axios from "axios";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function CoverLetterModal({Setcoverletter,userInformation}) {



    const [resume, setResume] = useState({
    name: userInformation.personalDetails.name|| "ameer suhail",
    role: userInformation.personalDetails.title||"Full Stack Developer",
    company: "Acme Tech Solutions",
    companyLocation:"sanfransisco,",
    experience: "4 years",
    skills: ["React", "Django", "Tailwind", "Cloud"],
    location: "New Delhi, India",
    email: userInformation.personalDetails.email||"prateek.garg@example.com",
    phone: userInformation.personalDetails.phone||"+91 98765 43210",
  });


  const ForgenAlletter=()=>{

    axios.post("https://al-resumebuilder.onrender.com/api/ailetter",{letterprompt:resume},{withCredentials:true}).then((res)=>{
      if(res.data.status){
        console.log(res.data.ailetter);
        
      }
    })

  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60">
      {/* Modal container */}
      <motion.div initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.2}}  className="w-full max-w-6xl h-[90vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
       <div>
         <header className="flex items-center justify-between gap-4 p-6 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-semibold text-lg">
              CV
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Cover Letter Preview</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Responsive, print-friendly modal — UI-only (no functionality)</p>
            </div>
          </div>

          {/* Decorative close button (no functionality) */}
          <button
          onClick={()=>Setcoverletter(false)}
            aria-label="Close modal"
            className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 hover:shadow-sm"
          >
            ✕
          </button>

          
        </header>
        <div className="flex justify-center items-center mt-3" >
          <button
      onClick={ForgenAlletter}
      className="inline-flex items-center justify-center gap-2 px-5 py-3 
      rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 
      text-white font-medium shadow-md hover:opacity-90 
      transition-all duration-300 ease-in-out focus:ring-2 focus:ring-indigo-400"
    >
      <SparklesIcon className="w-5 h-5 text-white animate-pulse" />
      generate cover letter with AI
    </button>
        </div>
       </div>
 
        {/* Body */}
        <main className="flex flex-col overflow-scroll  md:flex-row">
           
          {/* Left column: Applicant info / cover image */}
          <aside className="w-full md:flex md:w-1/3 lg:w-1/4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-6 flex-col gap-6 border-r border-gray-100 dark:border-gray-800">
            <div className="flex flex-col items-start gap-3">
            
              <div className="bg-gray-100 rounded-md  w-full flex flex-col items-center justify-center px-2 py-4 space-y-2 mx-auto">

                <div className="py-4">
                  <h3 className="rounded-md px-2 py-3 text-red-400  font-lighter bg-red-100">fill the resume form first</h3>
                </div>
               <div>
                  <TextField
                  onChange={(e)=>setResume({...resume,company:e.target.value})}
         
          id="outlined-required"
       label="applying company"
         
        />
               </div>
      <div>
                  <TextField
         id="outlined-required"
       label="company location"
           onChange={(e)=>setResume({...resume,companyLocation:e.target.value})}
         
         
        />
               </div>
      <div>
                  <TextField
         
   id="outlined-required"
       label="years of exp"
           onChange={(e)=>setResume({...resume,experience:e.target.value})}
    
        />
               </div>
      <div>
                  <TextField
         
          id="outlined-required"
          label="Required"
         
        />
               </div>
     
      
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{resume.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{resume.role}</p>
              </div>
            </div>

            <div className="mt-auto text-sm text-gray-600 dark:text-gray-300">
              <p><span className="font-medium">Email:</span> {resume.email}</p>
              <p><span className="font-medium">Phone:</span> {resume.phone}</p>
              <p><span className="font-medium">Location:</span> {resume.location},india</p>
            </div>
          </aside>

          {/* Right column: Cover letter content */}
          <section className="mt-5 flex md:flex-1  py-3 bg-white md:overflow-auto p-6 md:p-8">
            <div className="max-w-none bg-white p-4 lg:max-w-3xl mx-auto">
              <div className="mb-6 text-sm  text-black">
                <p>{new Date().toLocaleDateString()}</p>
                <p className="mt-2">Hiring Manager<br/>{resume.company}<br/>{resume.companyLocation}</p>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-black mb-4">Dear Hiring Manager,</h1>

              <article className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  I am writing to express my interest in the {userInformation.personalDetails.tilte} position at {resume.company}. With over {resume.experience} years of experience building modern, responsive web applications using React, Django, and cloud services, I am confident that my technical skills and collaborative work style would be a strong fit for your team.
                </p>

                <p>
                  In my current role at CalmConnect, I led the front-end development for a mental health companion platform. I designed and implemented modular React components, integrated third-party AI APIs for conversational features, and worked closely with designers to deliver pixel-perfect UI using Tailwind CSS. My work reduced page load times by 28% and improved user engagement through a more intuitive interface.
                </p>

                <p>
                  I enjoy solving complex problems and optimizing user experiences. Beyond coding, I focus on maintainability — writing clear documentation, setting up automated tests, and mentoring junior developers. I believe these practices help teams move faster and build durable products.
                </p>

                <p>
                  I am excited about the opportunity to contribute to Acme Tech Solutions and would welcome the chance to discuss how my background can support your product goals. Thank you for considering my application.
                </p>

                <p className="mt-6">Sincerely,<br/><span className="font-semibold">{resume.name}</span></p>
              </article>

              {/* Footer actions (UI only) */}
              <div className="mt-8 pb-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <PDFDownloadLink
              document={<CoverLetterPDF resume={resume} />}
              fileName={`${resume.name}-CoverLetter.pdf`}
            >
              {({ loading }) =>
                loading ? (
                  <button className="px-5 py-3 rounded-2xl bg-gray-400 text-white font-medium shadow-md">
                    Preparing PDF...
                  </button>
                ) : (
                  <button className="px-5 py-3 rounded-2xl bg-indigo-600 text-white font-medium shadow-md hover:opacity-95 ">
                    Download PDF
                  </button>
                )
              }
            </PDFDownloadLink>
                <button className="inline-flex items-center justify-center px-5 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">Print</button>
                <button className="ml-auto inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm text-gray-500 bg-gray-50 dark:bg-gray-800 border border-gray-100">Edit</button>
              </div>

              {/* Small-screen quick info */}
              <div className="mt-8 md:hidden border-t border-gray-100 dark:border-gray-800 pt-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Contact</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{resume.email} · +{resume.phone} · {resume.location}, India</p>
              </div>
            </div>
          </section>
        </main>

        {/* Subtle footer */}
        <footer className="p-4 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800">
          This is a UI-only modal. Replace sample text and image placeholders with real data in your app.
        </footer>
      </motion.div>
    </div>
  );
}
