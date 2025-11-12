import { Button } from '@mui/material';
import { Formik,Form, Field } from 'formik'
import React, { useEffect } from 'react'
import * as Yup from "yup";

const Skill = ({userInformation, setUserInformation}) => {


const SkillSchema = Yup.object({
  skillone:Yup.string().min(2).required("Skill too short"),
  skilltwo:Yup.string().min(2).required("Skill too short"),
  skillthree:Yup.string().min(2).required("Skill too short"),
})
  
 const initialValues = {
    skillone: userInformation?.skills?.skillone,
    skilltwo: userInformation?.skills?.skilltwo,
    skillthree: userInformation?.skills?.skillthree,
  };

  const handleSkill=(values)=>{
setUserInformation({
  ...userInformation,skills:{
    ...userInformation.skills,...values
  }
})
  }
  useEffect(()=>{
    console.log(userInformation);
    
  },[userInformation])
  return (
    <div>
           <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-6">
            Skills
          </h2>
        <Formik validationSchema={SkillSchema} enableReinitialize initialValues={initialValues} onSubmit={handleSkill}>
{
  ({errors})=>(
      <Form className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Field
              type="text"
              placeholder="Skill 1"
              name="skillone"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <Field
              type="text"
              placeholder="Skill 2"
               name="skilltwo"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <Field
              type="text"
              placeholder="Skill 3"
               name="skillthree"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <Button type='submit' variant="outlined">Submit</Button>
          </Form>
  )
}
        </Formik>
        </section>
    </div>
  )
}

export default Skill
