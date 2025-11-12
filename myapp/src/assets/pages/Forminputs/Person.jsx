import React, { useEffect } from 'react'
import { useFormik,Form,Formik,Field } from 'formik'

import * as yup from "yup";
import { Signupschema } from '../schema';
import { Button } from '@mui/material';
import { FaInfinity } from "react-icons/fa";
const Person = ({userInformation,setUserInformation,Setopen}) => {

const initialValue={
name: userInformation?.personalDetails?.name || "",
    email: userInformation?.personalDetails?.email || "",
    phone: userInformation?.personalDetails?.phone || "",
    title: userInformation?.personalDetails?.title || "",
    about: userInformation?.personalDetails?.about || "",
    address: userInformation?.personalDetails?.address || "",

}

const Handledata=(values)=>{
 


setUserInformation({...userInformation,personalDetails:{
  ...userInformation.personalDetails,...values
}})



}
useEffect(()=>{
  console.log(userInformation,"information");
  
},[userInformation])

  return (
    <div>
        <section className="mb-10">
                 
                    <div className=''>
                           
                    </div>
                     <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-6">
                    Personal Information
                  </h2>
               <Formik initialValues={initialValue} enableReinitialize validationSchema={Signupschema} onSubmit={Handledata} >
              {({errors})=>(
                   <Form action="" >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-6">
                   <div>
                     <Field
                      type="text"
                      placeholder="name"
                      name='name'
                      
                      className="p-1 lg:p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                    <br/>
                    {
                      errors.name  && <p className='text-red-600 '>{errors.name}</p>
                    }
                    <br/>
                   </div>
             <div>
                     <Field
                      type="email"
                     
                      placeholder="Email Address"
                      name='email'
                        
                      className="p-1 lg:p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                    <br/>
                    {errors.email&&<p className='text-red-600 '>{errors.email}</p>}
                    <br/>
             </div>
               <div>
                     <Field
                      type="text"
                      placeholder="Phone Number"
                      name='phone'
                      
                      className="p-1 lg:p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                     <br/>{errors.phone&&<p className='text-red-600 '>{errors.phone}</p>}<br/>
               </div>
              
                  <div>
                     <Field
                      type="text"
                      
                      name='title'
                      placeholder="title"
                   
                      className="p-1 lg:p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                      <br/>
                    {
                      errors.title  && <p className='text-red-600 '>{errors.title}</p>
                    }
                    <br/>
                    
               </div>
               
                <div>
                     <Field
                      type="text"
                      
                      name='address'
                   placeholder="address"
                      className="p-1 lg:p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                     {
                      errors.address  && <p className='text-red-600 '>{errors.address}</p>
                    }
               </div>

                  </div>
                   <div className='mt-5'>

                  <button className='flex justify-center items-center space-x-2 py-1 my-2 font-bold px-4 text-white rounded-md text-xs bg-linear-to-r from-blue-600 via-blue-400 to-purple-600' onClick={()=>Setopen(true)}><FaInfinity className='text-xl mr-2'/>use ai</button>
                     <Field
                       as="textarea"
                    name="role"
                    placeholder="Describe your about"
                    rows={4}
                      className="p-1 lg:p-3 w-full  border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                    
                      <br/>
                    {
                      errors.about  && <p className='text-red-600 '>{errors.about}</p>
                    }
                    <br/>
                    
               </div>
                <Button type='submit' variant='outlined' sx={{marginTop:"10px"}} >Submit</Button>
                </Form>
              )}
               </Formik>
                </section>
        
      
    </div>
  )
}

export default Person
