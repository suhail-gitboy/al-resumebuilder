import React from "react";
import { Formik, Form, Field } from "formik";
import { Button } from "@mui/material";
import * as Yup from "yup";

const MediaLinkSchema = Yup.object({
  linkedin: Yup.string().url("Enter a valid URL").required("LinkedIn URL is required"),
  github: Yup.string().url("Enter a valid URL"),
  portfolio: Yup.string().url("Enter a valid URL"),

});

const MediaLinks = ({ userInformation, setUserInformation }) => {
  const initialValues = {
    linkedin: userInformation?.media?.linkedin || "",
    github: userInformation?.media?.github || "",
    portfolio: userInformation?.media?.portfolio || "",
   
  };

  const handleSubmit = (values) => {
    // Convert file to Base64 (optional)
    
      setUserInformation({
        ...userInformation,
        media: {
          ...userInformation.media,
          ...values,
        },
      });
      console.log("Media Info Submitted ✅", userInformation);
    };

  

  return (
    <div>
      {/* --- Media Links & Upload Section --- */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-6">
          Media Links & Uploads
        </h2>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={MediaLinkSchema}
          enableReinitialize
        >
          {({ errors, setFieldValue }) => (
            <Form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* LinkedIn */}
                <div>
                  <Field
                    type="url"
                    name="linkedin"
                    placeholder="LinkedIn Profile URL"
                    className="p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none w-full"
                  />
                  {errors.linkedin && (
                    <p className="text-red-600 text-sm">{errors.linkedin}</p>
                  )}
                </div>

                {/* GitHub */}
                <div>
                  <Field
                    type="url"
                    name="github"
                    placeholder="GitHub Profile URL"
                    className="p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none w-full"
                  />
                  {errors.github && (
                    <p className="text-red-600 text-sm">{errors.github}</p>
                  )}
                </div>

                {/* Portfolio */}
                <div>
                  <Field
                    type="url"
                    name="portfolio"
                    placeholder="Portfolio / Personal Website URL"
                    className="p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none w-full"
                  />
                  {errors.portfolio && (
                    <p className="text-red-600 text-sm">{errors.portfolio}</p>
                  )}
                </div>

                {/* Resume Upload */}
              
              </div>

              <Button
                type="submit"
                variant="outlined"
                className="mt-6"
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </section>
    </div>
  );
};

export default MediaLinks;
