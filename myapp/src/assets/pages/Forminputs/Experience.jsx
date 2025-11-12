import { Button } from '@mui/material'
import { Formik, Form, Field } from 'formik'
import React from 'react'
import * as Yup from "yup";

const Experience = ({ userInformation, setUserInformation,Setexpaiopen }) => {

  const ValidationSchema = Yup.object({
    company: Yup.string().required("Enter company name"),
    job: Yup.string().required("Enter job name"),
    role: Yup.string().min(20, "At least 20 characters").required("Describe your role")
  });

  const InitialValues = {
    company: userInformation?.experience?.company || "",
    job: userInformation?.experience?.job || "",
    role: userInformation?.experience?.role || ""
  };

  const onSubmitFunc = (values) => {
    console.log("Form submitted ✅");
    console.log(values);

    setUserInformation({
      ...userInformation,
      experience: {
        ...userInformation.experience,
        ...values
      }
    });
  };

  return (
    <div>
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-6">
          Experience
        </h2>

        <Formik
          validationSchema={ValidationSchema}
          onSubmit={onSubmitFunc}
          enableReinitialize
          initialValues={InitialValues}
        >
          {({ errors }) => (
            <Form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Field
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    className="p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none w-full"
                  />
                  {errors.company && <div className="text-red-500 text-sm">{errors.company}</div>}
                </div>

                <div>
                  <Field
                    type="text"
                    name="job"
                    placeholder="Job Title"
                    className="p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none w-full"
                  />
                  {errors.job && <div className="text-red-500 text-sm">{errors.job}</div>}
                </div>

                <div className="col-span-2">
                  <button onClick={()=>Setexpaiopen(true)} className='py-1 my-2 font-bold px-4 text-white rounded-md text-sm bg-linear-to-r from-blue-600 via-blue-400 to-purple-600'>use ai</button>
                  <Field
                    as="textarea"
                    name="role"
                    placeholder="Describe your role and achievements..."
                    rows={4}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  />
                  {errors.role && <div className="text-red-500 text-sm">{errors.role}</div>}
                </div>
              </div>

              <Button type="submit" variant="outlined" className="mt-4">Submit</Button>
            </Form>
          )}
        </Formik>
      </section>
    </div>
  )
}

export default Experience;