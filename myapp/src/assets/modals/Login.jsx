import axios from 'axios'
import { Formik,Form,Field } from 'formik'
import { motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { toast } from 'sonner'
import * as Yup from "yup"
import Axios  from 'axios'


const Login = ({Setsign,Setlogin,name,  Setunsername}) => {

const newRef=useRef(null)

  const Schemalogin=Yup.object({
    email:Yup.string().email().required("enter email"),
    password:Yup.string().required("enter password")
  })
const Initialvalues={
  email:"",
  password:""
}
Axios.defaults.withCredentials=true
const Loginfunction=(values)=>{
  axios.post("https://al-resumebuilder.onrender.com/api/login",{email:values.email,password:values.password},{ withCredentials: true }).then(res=>{
    console.log(values);
    
    if(res.data.status){
      localStorage.setItem("username",res.data.name)
      Setlogin(false)
 toast.success(res.data.message)
    
     
        
      

      
      Setunsername(res.data.name)
     
    }else{
      toast.error(res.data.message)
    }
  })
}
const Handleclose=(e)=>{
  if(e.target==newRef.current){
    Setlogin(false)

  }
}


useEffect(()=>{
localStorage.getItem("username") && Setlogin(false)
},[])

  return (
    <div className='inset-0 fixed flex justify-center items-center bg-black/45 z-100' ref={newRef}  onClick={Handleclose}>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}}  className=" flex items-center justify-center p-8">
<div className=" max-w-md bg-[#0f0a1f] border border-[#2a1b3f] rounded-2xl p-8 shadow-lg" >
<h2 className="text-3xl font-bold text-white mb-2 text-center">Welcome Back</h2>
<p className="text-sm text-gray-400 text-center mb-6">Login to continue building your professional resume</p>

<Formik initialValues={Initialvalues} validationSchema={Schemalogin} onSubmit={Loginfunction}>
  {
    ({errors,touched})=>(

<Form className="space-y-5" >
<div>
<label className="block text-sm mb-1 text-gray-300">Email</label>
<Field
type="email"
placeholder="you@example.com"
name="email"
className="w-full px-4 py-2 rounded-lg bg-white border border-[#2d1b46] focus:outline-none focus:border-purple-500"

/>
{errors.email&&touched.email&&<p className='text-red-800'>{errors.email}</p>}
</div>
<div>
<label className="block text-sm mb-1 text-gray-300">Password</label>
<Field
type="password"
placeholder="••••••••"
name='password'
className="w-full px-4 py-2 rounded-lg bg-white border border-[#2d1b46] focus:outline-none focus:border-purple-500"
/>
{errors.password&&touched.password&&<p className='text-red-800'>{errors.password}</p>}
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<input type="checkbox" id="remember" className="accent-purple-600" />
<label htmlFor="remember" className="text-gray-400">Remember me</label>
</div>
<a href="#" className="text-purple-400 hover:text-purple-300">Forgot password?</a>
</div>


<button className="w-full bg-linear-to-r from-purple-700 to-purple-500 py-2 rounded-lg font-medium hover:scale-[1.02] transition-transform" >
Login
</button>
</Form>
    )
  }
</Formik>


<p className="text-sm text-center text-gray-400 mt-6">
Don’t have an account? <a href="#" className="text-purple-400 hover:text-purple-300" onClick={()=>{Setsign(true),Setlogin(false)}}>Register</a>
</p>
</div>
</motion.div>
    </div>
  )
}

export default Login
