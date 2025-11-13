import React, { useEffect, useRef, useState } from 'react'
import { Pagination,Stack } from '@mui/material'
import Person from './Forminputs/Person'
import About from './Forminputs/About'
import Experience from './Forminputs/Experience'
import Qualification from './Forminputs/Qualification'
import Skill from './Forminputs/Skill'
import Typeone from '../typetemplate/Typeone'
import Fileupload from './Forminputs/Fileupload'
import TopBar from '../Topbar'
import MediaLinks from './Forminputs/About'
import ImageUploadForm from './Forminputs/Fileupload'

import { FaEye, FaLongArrowAltDown, FaUpload } from "react-icons/fa";
import { Download } from 'lucide-react'
import axios from 'axios'
import { toast } from 'sonner'
import { useOutletContext } from 'react-router'
import Typetwo from '../typetemplate/Typetwo'
import Typethree from '../typetemplate/Typethree'
import Templatemodals from '../modals/Templatemodals'
import { AnimatePresence } from 'framer-motion'
import html2pdf from "html2pdf.js";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom"
import { PDFDownloadLink } from '@react-pdf/renderer'
import TypeTwoPDF from '../typetemplate/Typetwopdf'
import TypeonePDF from '../typetemplate/typeonepdf'
import TypeThreePDF from '../typetemplate/Typethreepdf'
import AiInputModal from '../modals/Aimodal'



const Resume = ({name}) => {
    const [page,Setpage]=useState(1)

const {Setmodallogin,userInformation,setUserInformation,Setcoverletter}=useOutletContext();

const [resumetype,Setresumetype]=useState("normal")
const [isOpenmodal,Setisopenmodal]=useState(false)
const steps=["user", "information","Qualifications","experiences","medialinks","skills","imageUpload"]










const SwitchtypePdf = () => {
  switch (resumetype) {
    case "normal":
      return (
        <PDFDownloadLink
          document={<TypeTwoPDF userInformation={userInformation} />}
          fileName={`${userInformation.personalDetails.name}.pdf`}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition-all"
        >
          Download
        </PDFDownloadLink>
      );

    case "ats":
      return (
        <PDFDownloadLink
          document={<TypeThreePDF userInformation={userInformation} />}
          fileName={`${userInformation.personalDetails.name}.pdf`}
          className="bg-indigo-600 text-white px-3 py-1  md:px-6 md:py-3 rounded-lg shadow hover:bg-indigo-700 transition-all"
        >
          Download
        </PDFDownloadLink>
      );

    case "modern":
      return (
        <PDFDownloadLink
          document={<TypeonePDF userInformation={userInformation} />}
          fileName={`${userInformation.personalDetails.name}.pdf`}
          className="bg-indigo-600 text-white px-3 py-1  md:px-6 md:py-3 rounded-lg shadow hover:bg-indigo-700 transition-all"
        >
          Download
        </PDFDownloadLink>
      );

    default:
      // ✅ Always add a default to avoid returning undefined
      return (
        <PDFDownloadLink
          document={<TypeTwoPDF userInformation={userInformation} />}
          fileName={`${userInformation.personalDetails.name}.pdf`}
          className="bg-indigo-600 text-white px-3 py-1  md:px-6 md:py-3 rounded-lg shadow hover:bg-indigo-700 transition-all"
        >
          Download
        </PDFDownloadLink>
      );
  }
};

  const [open, setOpen] = useState(false);
  const [expaiOpen,Setexpaiopen]=useState(false)
const Handleswitch=(pages)=>{



    switch(pages){
        case 0:
            return( <Person Setopen={setOpen} userInformation={userInformation} setUserInformation={setUserInformation} />);


            case 1:return (<Qualification userInformation={userInformation} setUserInformation={setUserInformation}/>);


            case 2:return <Experience Setexpaiopen={Setexpaiopen} userInformation={userInformation} setUserInformation={setUserInformation}/>
            case 3:return <MediaLinks userInformation={userInformation} setUserInformation={setUserInformation}/>
            case 4:return <Skill userInformation={userInformation} setUserInformation={setUserInformation}/>
            case 5:return <ImageUploadForm userInformation={userInformation} setUserInformation={setUserInformation}/>



    }
}
const Pdfref=useRef(null)
const [isLogin,Setislogin]=useState(false)


useEffect(()=>{
  axios.get("https://al-resumebuilder.onrender.com/api/checklogin",{withCredentials:true})
  .then((res)=>{
    console.log(res.data);
    
    if(res.data.isLogged){
       Setislogin(true)
       console.log("its true");
       
    }else{
     Setislogin(false)
    }
  })

},[])

    const Handleupdate=(e,value)=>{
        console.log(value,e);
        Setpage(value)
    }


    const Switchresume=()=>{
      switch(resumetype){
        case "normal":
          return <Typetwo ref={Pdfref} userInformation={userInformation}/>
        case "ats":
          return <Typethree ref={Pdfref}  userInformation={userInformation}/>
        case "modern":
          return <Typeone ref={Pdfref}  userInformation={userInformation}/>
      }
    }




const Handlesave=()=>{
     

if(isLogin==false){
setTimeout(() => {
    toast.error("register to download")
  
}, 1000);
  Setmodallogin(true)

}
else{

    
  
axios.post("https://al-resumebuilder.onrender.com/api/save",{resumedata:userInformation},{withCredentials:true}).then(res=>{
 
  if(res.data.message){
    toast.success(res.data.message)
 

    

  }else(
    toast.error("Server error")
  )
})}

}
const {isUpdate,Setupdate}=useOutletContext()


const Handleupdated=()=>{
  axios.put(`https://al-resumebuilder.onrender.com/api/update/${isUpdate}`,{resumedata:userInformation},{withCredentials:true}).then(res=>location.reload())
  Setupdate(null)
  console.log(isUpdate,"id");
  
}
//for steper

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  const Renderswithsteps=(stepactive)=>{
    switch(stepactive){
      case 0:return <div>user information</div>;
      case 1:return <div>Qualifications</div>
      case 2:return <div>Experience</div>
      case 3:return <div>Medialinks</div>
      case 4:return <div>Skills</div>
      case 5:return <div>imageupload</div>
      case 6:return <div>
        <h3 className='text-center font-semibold mt-10 text-green-800'>You have successfully completed your registerataion</h3>
        <h4 className='text-center text-3xl font-bold mt-3 text-blue-500'>go and check resume</h4>
      </div>
    }
  }


  // for ai inputmodal


  const [Prompt,Setprompt]=useState("")
const [loading,Setloading]=useState(false)

const HandlePrompt=()=>{
    Setloading(true)
    axios.post("https://al-resumebuilder.onrender.com/api/aioutput",{prompt:Prompt},{ withCredentials: true }).then((res)=>{
        if(res.data.status){
            console.log(res.data.aiprompt);
            
            setUserInformation((prev)=>({
              ...prev,personalDetails:{
                ...prev.personalDetails,about:res.data.aiprompt
              }
            }))
             console.log("after",userInformation.personalDetails.about);
Setloading(false)

        }
    })
}



const [Expaiprompt,Setaiprompt]=useState("")

const HandleExpairesult=()=>{
   Setloading(true)
  axios.post("https://al-resumebuilder.onrender.com/api/aiexperience",{experienceprompt:Expaiprompt},{ withCredentials: true })
  .then(res=>{if(res.data.status){
    console.log(res.data.aiworkexperience);
setUserInformation({
  ...userInformation,experience:{
    ...userInformation.experience,role:res.data.aiworkexperience
  }
})
Setloading(false)
    
  }})

}

  return (
    
    <div className='bg-neutral-800 min-h-screen px-4 md:px-10 lg:px-15 pb-20'>
      {open&&<AiInputModal Placeholder={"Type your job role to create corresponding about..."} datatype={"about"} HandlePrompt={HandlePrompt} Setloading={Setloading} userInformation={userInformation} texttype={"about"} loading={loading} Prompt={Prompt} Setprompt={Setprompt} open={open} setOpen={setOpen}/>}
      {expaiOpen&&<AiInputModal Placeholder={"Type your experience and axhievements so ai generate better explanation "} datatype={"role"}  Setprompt={Setaiprompt} HandlePrompt={HandleExpairesult} Setloading={Setloading} userInformation={userInformation} texttype={"jobrole"} loading={loading} Prompt={Expaiprompt} open={expaiOpen} setOpen={Setexpaiopen}/>}
      <AnimatePresence>
{isOpenmodal&&<Templatemodals Setresumetype={Setresumetype}   Setisopenmodal={Setisopenmodal}/>}
      </AnimatePresence>
      
         <div className='w-full pt-20'>
          <TopBar Setcoverletter={Setcoverletter} Setresumetype={Setresumetype} setUserInformation={setUserInformation} Resumetype={resumetype}  Setisopenmodal={Setisopenmodal} name={name}/>
        </div>
      <div className='flex flex-col lg:flex-row pt-2 gap-8' >
     
        <div className='w-full sm:w-full lg:w-1/2  p-4 rounded-lg bg-white '>
  
    <div className="min-h-screen bg-gray-50 flex justify-center py-10 px-4">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          🧾 Resume Builder Form
        </h1>
  <div className='py-5'>
              <Box sx={{ width:"100%", overflowX:"auto" }}>
      <Stepper  activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography  variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps} sx={{ maxWidth: 120, flex: 1 }}>
              <StepLabel   
             {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}

      
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Step {activeStep+1}
           
          </Typography>
           <Box>
{Renderswithsteps(activeStep)}


            </Box>
            <div className='w-full h-auto'>
              {Handleswitch(activeStep)}
            </div>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep ==steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>       
    
            </div>
  <div className='w-full'>
{Handleswitch()}
  </div>
       
      </div>
    </div>
        </div>

        {/*resume*/}
        <div className='w-full lg:w-1/2  p-4 rounded-lg bg-white/70 ' id='preview'>
<div className='flex justify-baseline flex-wrap md:flex-wrap items-center space-x-2 my-5'>
   {
  isUpdate?       <div className='mb-2  flex justify-center items-center mt-2 '>
      <a
       
     
      className="flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg font-medium shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-200"
onClick={Handleupdated}    >
      <FaUpload size={20} />
      Save Update
    </a>
</div>:       <div className='mb-2  flex justify-center items-center mt-2 '  onClick={Handlesave}>
      <a
     
     
      className="flex  items-center text-nowrap  text-xs md:text-lg justify-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg font-medium shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-200"
    >
      <Download size={20} />
      draft resume
    </a>
</div>
 }
 <div>
  
 {
  isLogin? <SwitchtypePdf/> :<button className='bg-indigo-600 text-xs text-nowrap md:text-lg text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition-all"' onClick={()=>Setmodallogin(true)}>
      login to download
    </button>
 }

 </div>

 <div>
  <Link className="flex justify-center  text-xs md:text-lg items-center px-2 md:px-5  py-2   bg-linear-to-r from-blue-600 to-blue-800 text-white  rounded-lg font-medium shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-200 " to={`/preview/${resumetype}`}><FaEye className='text-sm md:text-xl  md:mr-2'/> view</Link>
 </div>
</div>
{Switchresume()}

        </div>

      </div>
    </div>
  )
}

export default Resume
