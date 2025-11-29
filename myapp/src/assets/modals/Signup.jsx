import axios from 'axios'
import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { Formik,Form,Field } from 'formik'
import * as Yup from "yup";
import { toast } from 'sonner';

const Signup = ({Setsign,Setlogin}) => {
const refdata=useRef(null)
const [isSubmited,Setisubmitted]=useState(false)
  const Initialvalue={
    name:"",
    email:"",
    password:""
  }

  const Signupschema=Yup.object({
    name:Yup.string().min(4).required("please enter username"),
    email:Yup.string().email("enter valid email").required("enter email"),
      password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[a-z]/, "Must contain at least one lowercase letter")
      .matches(/[0-9]/, "Must contain at least one number")
      .matches(/[!@#$%^&*]/, "Must contain at least one special character")
      .required("Password is required")
  })

  const Handlesubmit=(values)=>{


    if(isSubmited) return 

    Setisubmitted(true)
   
try {
      axios.post("https://al-resumebuilder.onrender.com/api/signup",{name:values.name,password:values.password,email:values.email}).then((res)=>{
      console.log(res.data.message);
      if(res.data.status){
       console.log(res.data.status);
       toast.success(res.data.message)
       Setlogin(true)
       Setsign(false)
      }else{
     
       
      }
      
    })
  
} catch (error) {
  Setisubmitted(false)
}
    
    
  }
const Handleback=(e)=>{
  if(e.target==refdata.current){
    Setsign(false)
  }
}
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3}} className='flex fixed inset-0 bg-black/60  justify-center items-center z-100' onClick={Handleback} ref={refdata}>
        <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-[#0f0a1f]/90 border border-[#2a1b3f] rounded-2xl p-8 shadow-2xl backdrop-blur-md">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">
            Sign In
          </h2>
          <p className="text-sm text-gray-400 text-center mb-6">
            Access your dashboard and start building your perfect resume
          </p>

    <Formik initialValues={Initialvalue} validationSchema={Signupschema} onSubmit={Handlesubmit} >
      {({errors})=>(
              <Form className="space-y-5" >
                <div>
              <label className="block text-sm mb-1 text-gray-300">
                username
              </label>
              <Field
                type="text"
                placeholder="username"
                name='name'
                className="w-full px-4 py-2 rounded-lg  border border-[#2d1b46] bg-white focus:outline-none focus:border-purple-500"
              />
            </div>
            {errors.name&&<p className='text-red-700'>{errors.name}</p>}
            <div>
              <label className="block text-sm mb-1 text-gray-300">
                Email Address
              </label>
              <Field
                type="email"
                name='email'
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-lg bg-white border border-[#2d1b46] focus:outline-none focus:border-purple-500"
              />
               {errors.email&&<p className='text-red-700'>{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-300">
                Password
              </label>
              <Field
                type="password"
                name='password'
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-lg bg-white border border-[#2d1b46] focus:outline-none focus:border-purple-500"
              />
               {errors.password&&<p className='text-red-700'>{errors.password}</p>}
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="accent-purple-600"
                />
                <label htmlFor="remember" className="text-gray-400">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-purple-400 hover:text-purple-300">
                Forgot password?
              </a>
            </div>
    <button type='submit' disabled={isSubmited} className="w-full bg-linear-to-r from-purple-700 to-purple-500 py-2 rounded-lg font-medium hover:scale-[1.02] transition-transform">
             {isSubmited?"signing-in":"sign-in"}
            </button>
            
          </Form>
      )}
  
    </Formik>

          <p className="text-sm text-center text-gray-400 mt-6">
            already have an account?{" "}
            <a href="#" className="text-purple-400 hover:text-purple-300" onClick={()=>{Setlogin(true),Setsign(false)}}>
             Login
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Signup
