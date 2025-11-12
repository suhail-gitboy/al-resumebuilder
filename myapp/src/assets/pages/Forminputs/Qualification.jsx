import React from 'react'
import { Formik,Form,Field } from 'formik'
import { QualificationSchema } from '../schema'
import { Button } from '@mui/material'

const Qualification = ({userInformation,setUserInformation}) => {

  const initialValues={
course:userInformation?.education?.course||"",
college:userInformation?.education?.college||"",
passyear:userInformation?.education?.passyear||"",
grade:userInformation?.education?.grade||""



  }


  const HandleSubmit=(values)=>{


    setUserInformation({
      ...userInformation,education:{
        ...userInformation.education,...values
      }
    })
  console.log(userInformation);
}
  return (
    <div>
         {/* --- Qualification Section --- */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-6">
            Qualification
          </h2>
         <Formik initialValues={initialValues} onSubmit={HandleSubmit}  validationSchema={QualificationSchema} enableReinitialize >
          
{({errors,isValid})=>( <Form>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div>
             <Field
              type="text"
              name="course"
              placeholder="Degree / Course"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <br />
{errors.course&&<p className='text-red-700'>{errors.course}</p>}
           </div>
           <div>
             <Field
              type="text"
               name="college"
              placeholder="University / Institution"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            {errors.college&&<p className='text-red-700'>{errors.college}</p>}
           </div>
         
            <div>
               <Field
              type="text"
               name="passyear"
              placeholder="University / Institution"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            {errors.passyear&&<p className='text-red-700'>{errors.passyear}</p>}
            </div>
            
             <div>
              <Field
              type="text"
               name="grade"
              placeholder="University / Institution"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            {errors.grade&&<p className='text-red-700'>{errors.grade}</p>}
             </div>
          </div>
          <Button type='submit' variant='outlined'>Submit</Button>
        
</Form>)}
          
         </Formik>
        </section>
    </div>
  )
}

export default Qualification
